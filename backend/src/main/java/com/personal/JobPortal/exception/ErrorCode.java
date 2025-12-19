package com.personal.JobPortal.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public enum ErrorCode {
    USER_EXISTED("Email này đã được sử dụng", HttpStatus.BAD_REQUEST), // 400
    USER_NOT_FOUND("Không tìm thấy người dùng", HttpStatus.NOT_FOUND), // 404
    UNAUTHORIZED("Bạn không có quyền truy cập", HttpStatus.FORBIDDEN), // 403
    UNCATEGORIZED("Lỗi hệ thống chưa xác định", HttpStatus.INTERNAL_SERVER_ERROR), // 500
    INVALID_KEY("Lỗi sai key validation", HttpStatus.BAD_REQUEST), // 400
    ;
    private final String message;
    private final HttpStatus httpStatus;

    ErrorCode(String message, HttpStatus httpStatus) {
        this.message = message;
        this.httpStatus = httpStatus;
    }
}
