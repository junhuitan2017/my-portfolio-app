import styled from "styled-components";
import { PROJECT_CONTENT } from "../constants/contents";
import ProjectCard from "./ProjectCard";

const ProjectWrapper = styled.div`
    padding: 80px 40px 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: start;
    gap: 40px;
`

function Projects() {
    return (
        <ProjectWrapper>
            {PROJECT_CONTENT.map((project, idx) => <ProjectCard key={`${project.title}`} index={idx} project={project}/>)}
        </ProjectWrapper>
    )
}

export default Projects;