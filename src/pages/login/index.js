import { useForm } from "../../hooks";
import { useState } from "react";
import logo from '../../assets/cookenu.jpeg'
import { Button,} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Login } from "../../constants";
import { goToFeedPage, goToSignupPage } from '../../routes/coordinator'
import { validateEmail, validatePassword } from "../../constants";
import { CenteredPageContainer as LoginPageContainer, FormContainer, EmailInput, PasswordInput } from "../../components";


export const LoginPage = () => {
  const navigate = useNavigate()
  const [form, onChangeInputs, clearInputs] = useForm({
    email: "",
    password: "",
  });

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    setIsEmailValid(validateEmail(form.email));
    setIsPasswordValid(validatePassword(form.password));
    
    try {
      const {token} = isEmailValid && isPasswordValid && await Login({
        email: form.email,
        password: form.password
      })

      localStorage.setItem("cookenu.token",token)
      goToFeedPage(navigate)
    } catch(e){
      console.error(e.response.data)
      alert(e.response.data.message)
    }
    
  };

  

  return (
    <LoginPageContainer>
      <FormContainer>
        <form onSubmit={onSubmit}>
            <img src={logo} alt="Logo da Cookenu"/>
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
            Enviar
          </Button>
          <Button onClick={() => goToSignupPage(navigate)} type="button" variant="form-secondary">
            Não possui conta? Cadastrar
          </Button>
        </form>
      </FormContainer>
    </LoginPageContainer>
  );
};
