import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { useState } from "react";

export const PasswordInput = ({ isValid, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const onCliqueShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <FormControl isInvalid={!isValid}>
      <FormLabel>Senha</FormLabel>
      <InputGroup size="md">
        <Input
          name="password"
          value={value}
          onChange={onChange}
          pr="4.5rem"
          type={showPassword ? "text" : "password"}
          placeholder="Senha com no mínimo 6 caracteres"
        />
        <InputRightElement width="4.5rem">
          <IconButton
            icon={showPassword ? <FaEyeSlash/> :  <FaEye />}
            h="1.75rem"
            size="sm"
            onClick={onCliqueShowPassword}
          />
        </InputRightElement>
      </InputGroup>
      {!isValid ? (
        <FormErrorMessage as="p">
          A senha deve conter ao menos 6 caracteres
        </FormErrorMessage>
      ) : undefined}
    </FormControl>
  );
};
