import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, DetailWrapper, Info } from "./styles";

const Recipe = () => {

    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("instructions");

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=911a5cd28eb24228961cc3f267be106b`);
        const detailData = await data.json();
        setDetails(detailData);
    };

    useEffect(() => {
        fetchDetails();
    },[params.name])
    return (

        <DetailWrapper>
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt="" />
            </div>
            <Info>
        <Button className={activeTab === 'instructions' ? 'active' : ''}onClick={() => setActiveTab("instructions")}>Instructions</Button>
        <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab("ingredients")}>Ingredients</Button>
        {activeTab === "ingredients" && (
            <ul>
                {details.extendedIngredients.map(({name, original}) =>
                (
                    <li key={name}>{original}</li>
                ))}
            </ul>
        )}

        {activeTab === "instructions" && (
        <div>
            <p dangerouslySetInnerHTML={{__html: details.summary}}></p>
            <p dangerouslySetInnerHTML={{__html: details.instructions}}></p>
        </div>
        )}
            </Info>
        </DetailWrapper>
    )
};

export default Recipe;