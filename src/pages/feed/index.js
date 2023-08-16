import { FeedContainerStyled, RecipeCardStyled } from "./styled"
import {goToAddRecipePage, goToRecipeDetailPage  } from '../../routes/coordinator'
import { useEffect, useState } from "react"
import { ListRecipes } from "../../constants"
import { useNavigate} from "react-router-dom"
import { Button} from "@chakra-ui/react";


export const FeedPage = () =>{
    const navigate = useNavigate()
    const [recipes, setRecipes] = useState([])

    useEffect(()=>{
        ListRecipes()
        .then(data =>{
            // console.log(data)
            setRecipes(data)
        })
        .catch((e)=>{
            console.log(e)
        })
        
    },[])

    const onClickCard = (id) =>{
        // console.log(id)
        goToRecipeDetailPage(navigate,id)
    }

    const onClickAddButton = () =>{
        goToAddRecipePage(navigate)
    }
    return(
        <FeedContainerStyled>
                {recipes.slice(65,71).map((recipe,i)=> (
                    <RecipeCardStyled key={i} onClick={()=> onClickCard(recipe.id)}>
                        <img src={recipe.imageUrl}/>
                        <h3>{recipe.title}</h3>
                    </RecipeCardStyled>
                ))}
                <Button onClick={()=> onClickAddButton()} 
                 variant="add-recipe">+</Button>
        </FeedContainerStyled>
    )
}