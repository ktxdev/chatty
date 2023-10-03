package com.ktxdev.chatty.users;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserDto toDto(User user);
    User fromSignUpRequest(UserSignUpRequest signUpRequest);
}
