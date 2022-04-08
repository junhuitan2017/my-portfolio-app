import styled from "styled-components";

const BackgroundContainer = styled.div`
    height: 100vh;
    overflow: hidden;

    img {
        min-width: 100%;
        min-height: 100%;
    }
`;

function TimelineBackground(props) {
    const { background } = props;

    return (
        <BackgroundContainer>
            <img src={background} alt="bg"/>
        </BackgroundContainer>
    );
}

export default TimelineBackground;
