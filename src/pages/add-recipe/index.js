import { useForm } from "../../hooks";
import { useEffect, useState } from "react";
import {AddRecipe, validateName} from "../../constants";
import {
  CenteredPageContainer as AddRecipePageContainer,
  FormContainer,
  DescriptionTextArea,
  ImageInput,
  TitleInput,
} from "../../components";
import { Button} from "@chakra-ui/react";
import { PageTitleStyled } from "./styled";


export const AddRecipePage = () => {

  const [form, onChangeInputs, clearInputs] = useForm({
    description: "",
    title: "",
    image: "",
  });

  const [isTitleValid, setIsTitleValid] = useState(true);
  const [isUrlValid, setIsUrlValid] = useState(true);


  useEffect(()=>{
    const urlRegex = /\bhttps?:\/\/\S+\.(?:jpg|jpeg|png|gif|bmp)\b/;
    setIsTitleValid(validateName(form.title,4));
    setIsUrlValid(urlRegex.test(form.image)) ;
  },[form])

  const onSubmit = async (e) => {
    e.preventDefault();
    console.info(isUrlValid);
    
    

    try {
      if(isUrlValid && isTitleValid){
        const {message} =  await AddRecipe({
          title: form.title,
          description: form.description,
          imageUrl: form.image,
        });
        alert(message)
      }
        
    } catch (e) {
      // console.log(e);
      alert(e.response.data.message);
    }
  };

  return (
    <AddRecipePageContainer>
      <FormContainer>
        <form onSubmit={onSubmit}>
          <PageTitleStyled>Adicionar nova receita</PageTitleStyled>

          <TitleInput
            value={form.title}
            onChange={onChangeInputs}
            isValid={isTitleValid}
          />
          <DescriptionTextArea
            value={form.description}
            onChange={onChangeInputs}
            isValid={true}
          />
          <ImageInput
            value={form.image}
            onChange={onChangeInputs}
            isValid={isUrlValid}
          />

          <Button type="submit" variant="form-main">
            Cadastrar
          </Button>
        </form>
      </FormContainer>
    </AddRecipePageContainer>
  );
};
