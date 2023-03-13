import { useEffect, useState } from "react";
import { Card, Gradient, Wrapper } from "../Veggie/styles";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css"
import { Link } from "react-router-dom"

const Popular = () => {

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {

        const check = localStorage.getItem('popular');

        if(check){
            setPopular(JSON.parse(check));
        }else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=911a5cd28eb24228961cc3f267be106b&number=9`);
            const data = await api.json();

            localStorage.setItem('popular', JSON.stringify(data.recipes)); // so guarda string em ls
            setPopular(data.recipes);
            console.log(data.recipes);
        }

    }

    return (
        <div>
                    <Wrapper>
                        <h3>Popular Pircks</h3>

                        <Splide options={{
                            perPage: 4,
                            arrows: false,
                            pagination: false,
                            drag: 'free',
                            gap: '5rem',
                        }}>
                        {popular.map((recipe) => {
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
}

export default Popular;