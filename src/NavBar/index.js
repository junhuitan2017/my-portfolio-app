import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ICONS } from "../constants/contents";

const NavContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    display: grid;
    grid-template-columns: 30% auto 30%;
    grid-column-gap: 5%;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    transition: 1s;

    ${({ isOpen }) =>
        isOpen
            ? `
        width: 100%;
    `
            : `
        width: 0%;
        margin-left: 50%;
    `}
`;

const SocialContainer = styled.div`
    justify-self: end;
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 30px;
`;

const LinkContainer = styled.div`
    justify-self: start;
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 30px;
`;

const HomeNavLink = styled(NavLink)`
    width: fit-content;
    font-size: 20px;
    text-decoration: none;
    color: white;
    border-bottom: 2px solid transparent;
    :hover {
        border-bottom: 2px solid white;
    }
`;

function NavBar(props) {
    const [barOpen, setBarOpen] = useState(false);

    useEffect(() => {
        setBarOpen(true);
    }, []);

    return (
        <NavContainer isOpen={barOpen}>
            <SocialContainer>
                <a
                    href="https://www.instagram.com/mrjunhuii/"
                    target={"_blank"}
                    rel="noreferrer"
                >
                    <img
                        src={ICONS.INSTAGRAM}
                        alt={"Instagram Icon"}
                        width={36}
                    />
                </a>
                <a
                    href="https://www.linkedin.com/in/jun-hui-tan-034239163/"
                    target={"_blank"}
                    rel="noreferrer"
                >
                    <img
                        src={ICONS.LINKEDIN}
                        alt={"LinkedIn Icon"}
                        width={36}
                    />
                </a>
            </SocialContainer>
            <h1>MrJunHuii</h1>
            <LinkContainer>
                <HomeNavLink to={"/my-portfolio-app"}>Home</HomeNavLink>
                <HomeNavLink to={"/my-portfolio-app/projects"}>
                    Games
                </HomeNavLink>
            </LinkContainer>
        </NavContainer>
    );
}

export default NavBar;
