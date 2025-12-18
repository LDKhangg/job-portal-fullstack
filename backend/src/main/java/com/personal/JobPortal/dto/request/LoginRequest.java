package com.personal.JobPortal.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class LoginRequest {
    @Email
    @NotBlank(message = "Email is not empty!")
    String email;

    @NotBlank(message = "Password is not empty!")
    String password;


}
