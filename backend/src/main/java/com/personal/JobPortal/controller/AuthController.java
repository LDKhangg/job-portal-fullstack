package com.personal.JobPortal.controller;

import com.personal.JobPortal.dto.request.RegisterRequest;
import com.personal.JobPortal.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;

    @PostMapping()
    public ResponseEntity<?> register(@Valid @RequestBody RegisterRequest request){
        log.info("Request LOGIN received for email: {}", request.getEmail());
        return ResponseEntity.ok().build();
    }
}
