import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const ProjectWrapper = styled.div`
    padding-top: 80px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
`

function Projects() {
    return (
        <ProjectWrapper>
            <ProjectCard />
        </ProjectWrapper>
    )
}

export default Projects;