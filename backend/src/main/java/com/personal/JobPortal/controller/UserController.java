package com.personal.JobPortal.controller;

import com.personal.JobPortal.dto.ApiResponse;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/api/user")
public class UserController {
    @GetMapping("/my-profile")
    public ApiResponse<UserResponse> getMyProfile() {
        var authentication = SecurityContextHolder.getContext().getAuthentication();
        if(authentication.getPrincipal()==null) throw new UsernameNotFoundException("Username not found");
        String email = authentication.getName();

        return ApiResponse.<UserResponse>builder()
                .result(userService.getMyInfo(email))
                .build();
    }
}
