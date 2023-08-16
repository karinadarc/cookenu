import { Button } from '@chakra-ui/react'
import { HeaderStyled } from "./styled"
import {useNavigate } from 'react-router-dom'
import { goToFeedPage, goToLoginPage } from '../../routes/coordinator'

export const Header = () =>{
    const navigate = useNavigate()
    return(
        <HeaderStyled>
            <Button onClick={() => goToFeedPage(navigate)} variant='header' >Cookenu</Button>
            <Button onClick={() => goToLoginPage(navigate)} variant='header'>Login</Button>
        </HeaderStyled>
    )
}