import { useEffect, useState } from "react";
import { Card, Gradient, Wrapper } from "./styles";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css"
import { Link } from "react-router-dom";

const Veggie = () => {

    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        getVeggie();
    }, []);

    const getVeggie = async () => {

        const check = localStorage.getItem('veggie');

        if(check){
            setVeggie(JSON.parse(check));
        }else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=911a5cd28eb24228961cc3f267be106b&number=9&tags=vegetarian`);
            const data = await api.json();

            localStorage.setItem('veggie', JSON.stringify(data.recipes)); // so guarda string em ls
            setVeggie(data.recipes);
            console.log(data.recipes);
        }
    }

    return (
        <div>
                    <Wrapper>
                        <h3>Vegetarian Picks</h3>

                        <Splide options={{
                            perPage: 3,
                            arrows: false,
                            pagination: false,
                            drag: 'free',
                            gap: '5rem',
                        }}>
                        {veggie.map((recipe) => {
                            return(
                                <SplideSlide key={recipe.id}>
                                <Card>
                                <Link to={`/recipe/${recipe.id}`}>
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt={recipe.title} />
                                    <Gradient />
                                    </Link>
                                </Card>
                                </SplideSlide>
                            );
                        })}
                        </Splide>
                    </Wrapper>
        </div>
    )
};

export default Veggie;