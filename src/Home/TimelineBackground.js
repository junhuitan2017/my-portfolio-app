import styled from "styled-components";

const BackgroundContainer = styled.div`
    height: 100vh;
    overflow: hidden;
`;

function TimelineBackground(props) {
    const { background } = props;

    return (
        <BackgroundContainer>
            <img src={background} alt="bg" height={"100%"}/>
        </BackgroundContainer>
    );
}

export default TimelineBackground;
