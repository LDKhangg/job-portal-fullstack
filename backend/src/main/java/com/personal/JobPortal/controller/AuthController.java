package com.personal.JobPortal.controller;

import com.personal.JobPortal.dto.ApiResponse;
import com.personal.JobPortal.dto.request.LoginRequest;
import com.personal.JobPortal.dto.request.RegisterRequest;
import com.personal.JobPortal.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController("/api/auth")
@Slf4j
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody RegisterRequest request){
        log.info("Request REGISTER received for email: {}", request.getEmail());
        return ResponseEntity.status(HttpStatus.CREATED).body(ApiResponse.builder()
                .statusCode(HttpStatus.CREATED.value())
                .message("Register successfully!")
                .build());
    }
    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequest request){
        log.info("Request LOGIN received for email: {}", request.getEmail());
        var Response = authService.login(request);
        return ResponseEntity.status(HttpStatus.OK)
                .body(ApiResponse.builder()
                .statusCode(HttpStatus.OK.value())
                        .message("Login successfully!")
                        .data(Response).build());
    }
}
