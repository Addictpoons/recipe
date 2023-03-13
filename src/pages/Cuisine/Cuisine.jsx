import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { Card, Grid } from "./styles";

const Cuisine = () => {

    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=911a5cd28eb24228961cc3f267be106b&cuisine=${name}`);
        const recipes = await data.json();
        setCuisine(recipes.results);
    };

    useEffect(() => {
        getCuisine(params.type) // correr outra x pelos links(ita,ame,jap..)
        console.log(params.type);
    },[params.type]);

    return(
        <Grid>
            {cuisine.map((item) => {
                return(
                    <Card key={item.id}>
                        <Link to={`/recipe/${item.id}`}>
                        <img src={item.image} alt ="" />
                        <h4>{item.title}</h4>
                        </Link>
                    </Card>
                )
            })};
        </Grid>
    )
};

export default Cuisine;