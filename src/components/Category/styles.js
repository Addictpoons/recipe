import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

export const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-contnt: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);

    h4{
        color: white;
        font-size: 0.8rem;
        padding-top: 10px;
    }
    svg{
        color: white;
        margin-top: 20px;
        font-size: 1.5rem;
    }
    &.active{
        background: linear-gradient(to right, #f27121, #e94057);

        svg{
            color: white;
        }

        h4{ 
            color: white;
        }
    }
`;