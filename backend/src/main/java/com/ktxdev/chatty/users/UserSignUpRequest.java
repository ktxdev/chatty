package com.ktxdev.chatty.users;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;

public record UserSignUpRequest(@NotNull(message = "Name should be provided") String name,
                                @NotNull(message = "Email should be provided") @Email(message = "Email is invalid") String email,
                                @NotNull(message = "Password should be provided") String password,
                                @NotNull(message = "Password should be confirmed") String confirmPassword) {
}
