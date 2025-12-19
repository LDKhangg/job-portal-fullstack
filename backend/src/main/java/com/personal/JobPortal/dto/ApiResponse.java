package com.personal.JobPortal.dto;

import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDateTime;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ApiResponse<T> {
    int statusCode;
    String message;
    T data;
    LocalDateTime responseAt = LocalDateTime.now();

}
