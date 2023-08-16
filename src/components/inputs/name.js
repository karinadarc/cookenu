import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";

export const NameInput = ({ isValid, value, onChange }) => {
  return (
    <FormControl isInvalid={!isValid}>
      <FormLabel>Nome</FormLabel>
      <Input
        value={value}
        onChange={onChange}
        placeholder="Nome"
        name="name"
      
      />
      {!isValid ? (
        <FormErrorMessage as="p">Nome deve ter ao menos 2 caracteres</FormErrorMessage>
      ) : undefined}
    </FormControl>
  );
};
