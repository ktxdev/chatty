package com.ktxdev.chatty.users;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface UserService {
    User signUp(UserSignUpRequest signUpRequest);

    Page<UserDto> fetchAllUsers(Pageable pageable, User user);

    Optional<User> findByEmail(String email);
}
