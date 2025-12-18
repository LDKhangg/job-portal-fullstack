package com.personal.JobPortal.service;

import com.personal.JobPortal.dto.request.RegisterRequest;
import com.personal.JobPortal.model.User;
import com.personal.JobPortal.model.enums.Role;
import com.personal.JobPortal.repository.UserRepo;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;

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
}
