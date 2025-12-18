package com.personal.JobPortal.dto.response;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.experimental.FieldDefaults;

@Builder
@FieldDefaults(level= AccessLevel.PRIVATE)
public class AuthResponse {
    String access_token;
    String refresh_token;
    String fullName;
    String avatar;
    String role;
}
