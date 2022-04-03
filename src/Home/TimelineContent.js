import styled from "styled-components";
import { COLOR_PRIMARY } from "../constants/color";

const ContentContainer = styled.div`
    position: absolute;
    top: 0;
    right: 22%;
    height: 100vh;
    width: 25%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: end;
    text-align: end;
    color: white;

    // Animation
    ${({active}) => active ? `
        span, h4, p {
            opacity: 1;
            transform: translateX(0);
        }
        span {
            transition: .4s ease 1.6s;
        }
        h4 {
            transition: .4s ease 1.7s;
        }
        p {
            transition: .4s ease 1.8s;
        }
    ` : `
        span, h4, p {
            opacity: 0;
            transform: translateX(20px);
        }
        span {
            transition: .2s ease .4s;
        }
        h4 {
            transition: .2s ease .5s;
        }
        p {
            transition: .2s ease .6s;
        }
    `}
`;

const YearContent = styled.span`
    font-style: italic;
    font-size: 42px;
    color: ${COLOR_PRIMARY};
    font-weight: 300;
`
const TitleContent = styled.h4`
    width: 80%;
    font-weight: 800;
    font-size: 32px;
    margin: 0;
`
const SubtitleContent = styled.p`
    line-height: 1.5;
`

function TimelineContent(props) {
    const { content, active } = props;

    return (
        <ContentContainer active={active}>
            <YearContent>{content.year}</YearContent>
            <TitleContent>{content.title}</TitleContent>
            <SubtitleContent>{content.subtitle}</SubtitleContent>
        </ContentContainer>
    );
}

export default TimelineContent;
