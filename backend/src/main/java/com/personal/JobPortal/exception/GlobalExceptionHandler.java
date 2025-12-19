package com.personal.JobPortal.exception;

import com.personal.JobPortal.dto.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(value = AppException.class)
    ResponseEntity<ApiResponse<?>> handlingAppException(AppException exception) {
        ErrorCode errorCode = exception.getErrorCode();

        return ResponseEntity
                .status(errorCode.getHttpStatus()) // Header trả về 400, 404...
                .body(ApiResponse.builder()
                        .statusCode(errorCode.getHttpStatus().value()) // Body JSON cũng là 400, 404...
                        .message(errorCode.getMessage())
                        .build());
    }

    @ExceptionHandler(value = MethodArgumentNotValidException.class)
    ResponseEntity<ApiResponse<?>> handlingValidation(MethodArgumentNotValidException exception) {
        String message = exception.getFieldError().getDefaultMessage();

        return ResponseEntity.badRequest().body(ApiResponse.builder()
                .statusCode(400)
                .message(message)
                .build());
    }

    @ExceptionHandler(value = RuntimeException.class)
    ResponseEntity<ApiResponse<?>> handlingRuntimeException(RuntimeException exception) {
        return ResponseEntity.internalServerError().body(ApiResponse.builder()
                .statusCode(500)
                .message(exception.getMessage())
                .build());
    }
}
