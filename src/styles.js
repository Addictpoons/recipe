import styled from "styled-components";
import { Link } from "react-router-dom"

export const Logo = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 400;
    font-family: 'Lobster Two', cursive;
`;

export const Nav = styled.div`
    padding: 2rem 5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    svg {
        font-size: 2rem;
    }
`;