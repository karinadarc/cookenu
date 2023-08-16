import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";

export const EmailInput = ({ isValid, value, onChange }) => {
  return (
    <FormControl isInvalid={!isValid}>
      <FormLabel>Email</FormLabel>
      <Input
        // type='email'
        value={value}
        onChange={onChange}
        placeholder="email"
        name="email"
      />
      {!isValid ? (
        <FormErrorMessage as="p">E-mail inválido</FormErrorMessage>
      ) : undefined}
    </FormControl>
  );
};
