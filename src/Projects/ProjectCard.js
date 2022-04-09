import { useEffect, useState } from "react";
import styled from "styled-components";

const SURFACE_COLOR = "#fff";
const CURVE = 40;

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
    transform: translateY(45%);
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
`;

const CardDescription = styled.a`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 50%;
    padding: 8px 0;
    border-radius: 8px;
    transition: 0.5s;
    text-decoration: none;

    :hover {
        position: absolute;
        height: fit-content;
        width: 85%;
        background-color: ${({ background }) => background};
    }

    :hover ${ThumbDesc} {
        display: block;
    }
`;

const DescriptionContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    margin-top: 16px;
`;

const CardContainer = styled.div`
    position: relative;
    border: 1px solid black;
    border-radius: calc(${CURVE} * 1px);
    overflow: hidden;
    height: 400px;
    width: 300px;
    background-image: url(${({ imgSrc }) => imgSrc});
    background-size: cover;
    background-position: 50% 50%;
    transition: 1s ease ${({ index }) => index * 0.2}s;

    :hover ${CardOverlay} {
        transform: translateY(0);
    }

    ${({ isLoaded }) =>
        isLoaded
            ? `
        opacity: 1;
        transform: translateX(0);
    `
            : `
        opacity: 0;
        transform: translateX(100%);
    `}
`;

function ProjectCard(props) {
    const { index, project } = props;
    const { title, description, img, icons } = project;

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <CardContainer isLoaded={isLoaded} index={index} imgSrc={img}>
            {/* <CardImage src={img} alt={`${title} logo`} /> */}
            <CardOverlay>
                <CardHeader>
                    <CardArc>
                        <path />
                    </CardArc>
                    <h3>{title}</h3>
                    <span>{description}</span>
                </CardHeader>
                <DescriptionContainer>
                    {icons.map((icon, i) => (
                        <CardDescription
                            key={i}
                            href={icon.url}
                            target={"_blank"}
                            background={icon.bg}
                        >
                            <CardThumb background={icon.bg}>
                                {icon.img}
                            </CardThumb>
                            <ThumbDesc>{icon.description}</ThumbDesc>
                        </CardDescription>
                    ))}
                </DescriptionContainer>
            </CardOverlay>
        </CardContainer>
    );
}

export default ProjectCard;
