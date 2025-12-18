package com.personal.JobPortal.service;

import com.personal.JobPortal.dto.request.LoginRequest;
import com.personal.JobPortal.dto.request.RegisterRequest;
import com.personal.JobPortal.dto.response.AuthResponse;
import com.personal.JobPortal.model.CustomUserDetails;
import com.personal.JobPortal.model.User;
import com.personal.JobPortal.model.enums.Role;
import com.personal.JobPortal.repository.UserRepo;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;
    private final CustomUserDetailsService cUserDetails;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    @Transactional
    public void register(RegisterRequest request){
        if(userRepo.findUserByEmail(request.getEmail())) {
            throw new UsernameNotFoundException("Email Already Exists");
        }
        User user = User.builder()
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .fullName(request.getFullName())
                .role(Role.CANDIDATE)
                .isActive(true)
                .build();
        userRepo.save(user);
    }

    public AuthResponse login(@Valid LoginRequest request) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();
        User user = userDetails.getUser();
        String jwt = jwtService.generateToken(authentication);
        return AuthResponse.builder()
                .access_token(jwt)
                .refresh_token(null)
                .fullName(user.getFullName())
                .avatar(user.getEmail())
                .role(user.getRole().toString())
                .build();
    }
}
