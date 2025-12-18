package com.personal.JobPortal.service;

import com.personal.JobPortal.model.CustomUserDetails;
import com.personal.JobPortal.model.User;
import com.personal.JobPortal.repository.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepo userRepo;
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<User> user = userRepo.getUserByEmail(email);
        if(user.isPresent()){
            return new CustomUserDetails(user.get());
        }
        else{
            throw new UsernameNotFoundException("Username not found");
        }
    }
}
