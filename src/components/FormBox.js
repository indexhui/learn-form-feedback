import { useState } from 'react';

import {
  Flex,
  Box,
  Text,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
} from '@chakra-ui/react';

import useInput from '../hooks/useInput';

const FormBox = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: enteredNameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(name => name.trim().length > 0);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: enteredEmailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(value => value.includes('@'));

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: enteredPasswordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(password => password.trim().length > 6);

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = e => {
    e.preventDefault();
    if (!enteredNameIsValid) {
      return;
    }
    resetName();
    resetEmail();
    resetPassword();
  };

  return (
    <Flex
      bg="white"
      w="400px"
      minH="500px"
      direction="column"
      align="center"
      rounded="md"
      py="20px"
      px="16px"
    >
      <Text fontWeight="900" fontSize="20px">
        建立會員
      </Text>
      <Flex w="100%" flex="1" direction="column">
        <form
          onSubmit={formSubmissionHandler}
          style={{ flex: '1', display: 'flex' }}
        >
          <Flex flex="1" direction="column" justify="space-between">
            <Box flex="1">
              <FormControl py="8px" isInvalid={enteredNameHasError}>
                <FormLabel htmlFor="name" fontWeight="900">
                  姓名
                </FormLabel>
                <Input
                  id="userName"
                  type="text"
                  value={enteredName}
                  onChange={nameChangeHandler}
                  onBlur={nameBlurHandler}
                  autoComplete="off"
                />
                {!enteredNameHasError ? (
                  <FormHelperText>至少兩個字</FormHelperText>
                ) : (
                  <FormErrorMessage color="red">
                    姓名至少兩個字
                  </FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={enteredEmailHasError}>
                <FormLabel htmlFor="email" fontWeight="900">
                  信箱
                </FormLabel>
                <Input
                  id="userName"
                  type="text"
                  inputMode="email"
                  value={enteredEmail}
                  onChange={emailChangeHandler}
                  onBlur={emailBlurHandler}
                  autoComplete="off"
                />
                {!enteredEmailHasError ? (
                  <Box h="28px"></Box>
                ) : (
                  <FormErrorMessage h="28px" m="0" color="red">
                    信箱格式錯誤
                  </FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={enteredPasswordHasError}>
                <FormLabel htmlFor="password" fontWeight="900">
                  密碼
                </FormLabel>
                <Input
                  id="userName"
                  type="text"
                  inputMode="password"
                  value={enteredPassword}
                  onChange={passwordChangeHandler}
                  onBlur={passwordBlurHandler}
                  autoComplete="off"
                />
                {!enteredPasswordHasError ? (
                  <FormHelperText>請設定六個字以上密碼</FormHelperText>
                ) : (
                  <FormErrorMessage color="red">
                    密碼不能小於六個字
                  </FormErrorMessage>
                )}
              </FormControl>
            </Box>
            {/* <Input variant="outline" placeholder="Outline" w="360px" /> */}
            <Button type="submit" isDisabled={!formIsValid}>
              送出
            </Button>
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
};

export default FormBox;
