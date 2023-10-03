package com.ktxdev.chatty.users;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {
    Page<User> findAllByEmailIsNot(String email, Pageable pageable);
    Optional<User> findByEmail(String email);
    boolean existsByEmail(String email);
}
