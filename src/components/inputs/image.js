import {
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
  } from "@chakra-ui/react";
  
  export const ImageInput = ({ isValid, value, onChange }) => {
    return (
      <FormControl isInvalid={!isValid}>
        <FormLabel>Imagem</FormLabel>
        <Input
         name="image"
          value={value}
          onChange={onChange}
          placeholder="Link para a imagem"
        />
        {!isValid ? (
          <FormErrorMessage as="p">Adicionar o link da imagem</FormErrorMessage>
        ) : undefined}
      </FormControl>
    );
  };