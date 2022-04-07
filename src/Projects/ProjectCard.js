import styled from "styled-components";
import { ICONS } from "../constants/contents";

const SURFACE_COLOR = "#fff";
const CURVE = 40;
const DISCORD_URL =
    "https://discord.com/api/oauth2/authorize?client_id=961136076439834635&permissions=0&scope=applications.commands%20bot";

const CardImage = styled.img`
    width: 100%;
    height: auto;
`;

const CardOverlay = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: grid;
    grid-template-rows: 50% 50%;
    height: 50%;
    border-radius: calc(${CURVE} * 1px) calc(${CURVE} * 1px) 0 0;
    background-color: ${SURFACE_COLOR};
    transform: translateY(50%);
    transition: 0.2s ease-in-out;
`;

const CardArc = styled.svg`
    width: 80px;
    height: 80px;
    position: absolute;
    bottom: 100%;
    right: 0;
    z-index: 1;

    path {
        fill: ${SURFACE_COLOR};
        d: path("M 40 80 c 22 0 40 -22 40 -40 v 40 Z");
    }
`;

const CardHeader = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 0 2em 2em;
    border-radius: calc(${CURVE} * 1px) 0 0 0;
    background-color: ${SURFACE_COLOR};
    text-align: center;
`;

const CardThumb = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${({ background }) => background};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ThumbDesc = styled.div`
    display: none;
    width: 50%;
    color: white;
    font-weight: bold;
`

const CardDescription = styled.a`
    display: flex;
    justify-content: space-evenly;
    height: 50%;
    width: 85%;
    padding: 4px 0;
    margin: auto;
    border-radius: 8px;
    transition: .5s;
    text-decoration: none;

    :hover {
        background-color: ${({ background }) => background};
    }

    :hover ${ThumbDesc} {
        display: block;
    }
`;

const CardContainer = styled.div`
    position: relative;
    border: 1px solid black;
    border-radius: calc(${CURVE} * 1px);
    overflow: hidden;
    height: 100%;
    max-width: 300px;

    :hover ${CardOverlay} {
        transform: translateY(0);
    }
`;

function ProjectCard(props) {
    return (
        <CardContainer>
            <CardImage src={ICONS.NOTHANKSLOGO} alt={"No thanks logo"} />
            <CardOverlay>
                <CardHeader>
                    <CardArc>
                        <path />
                    </CardArc>
                    <h3>No Thanks!</h3>
                    <span>
                        A mini project to recreate the card game "No Thanks!"
                    </span>
                </CardHeader>
                <CardDescription href={DISCORD_URL} target={"_blank"} background={"#5663F7"}>
                    <CardThumb background={"#5663F7"}>
                        <img
                            src={ICONS.DISCORD_WHITE}
                            alt={"Discord"}
                            width={"70%"}
                        />
                    </CardThumb>
                    <ThumbDesc>Click to add bot to your discord server!</ThumbDesc>
                </CardDescription>
            </CardOverlay>
        </CardContainer>
    );
}

export default ProjectCard;
