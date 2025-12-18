package com.personal.JobPortal.model;

import com.personal.JobPortal.model.enums.Role;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.annotation.Nullable;
import java.util.UUID;

@Entity
@Table(name="users")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level=AccessLevel.PRIVATE)
public class User extends BaseEntity{
    @Id
    @GeneratedValue(strategy= GenerationType.UUID)
    @Column(name="id",updatable=false, nullable=false)
    UUID id;

    @Column(unique=true,nullable=false)
    String email;

    @Column(nullable=false)
    String password;

    String fullName;

    String avatarUrl;
    @Enumerated(EnumType.STRING)
    Role role;

    boolean isActive;

}
