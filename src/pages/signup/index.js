import { useState } from "react";
import { useForm } from "../../hooks";
import logo from "../../assets/cookenu.jpeg";
import { Button } from "@chakra-ui/react";
import { Signup, validateEmail, validateName, validatePassword } from "../../constants";
import { goToFeedPage} from '../../routes/coordinator'
import { useNavigate } from "react-router-dom";
import {
  CenteredPageContainer as SignupPageContainer,
  FormContainer,
  EmailInput,
  PasswordInput,
  NameInput,
} from "../../components";

export const SignupPage = () => {
  const navigate = useNavigate()

  const [form, onChangeInputs, clearInputs] = useForm({
    email: '',
    password: '',
    name:'',
  });

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isNameValid, setIsNameValid] = useState(true)


  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    setIsEmailValid(validateEmail(form.email));
    setIsPasswordValid(validatePassword(form.password));
    setIsNameValid(validateName(form.name))

        
    try {
      const {token} = isNameValid && isEmailValid && isPasswordValid && await Signup ({
        email: form.email,
        password: form.password,
        name: form.name
      })

      localStorage.setItem("cookenu.token",token)
      goToFeedPage(navigate)
    } catch(e){
      console.log(e)
      alert(e.response.data.message)
    }
    
  };

  return (
    <SignupPageContainer>
      <FormContainer>
        <form onSubmit={onSubmit}>
          <img src={logo} alt="Logo da Cookenu" />

          <NameInput
          value={form.name}
          onChange={onChangeInputs}
          isValid={isNameValid}
          />
          <EmailInput
            value={form.email}
            onChange={onChangeInputs}
            isValid={isEmailValid}
          />

          <PasswordInput
            value={form.password}
            onChange={onChangeInputs}
            isValid={isPasswordValid}
          />

          <Button type="submit" variant="form-main">
            Cadastrar
          </Button>
        </form>
      </FormContainer>
    </SignupPageContainer>
  );
};

