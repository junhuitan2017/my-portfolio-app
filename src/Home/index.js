import { useState } from "react";
import styled from "styled-components";
import TimelineBackground from "./TimelineBackground";
import TimelinePagination from "./TimelinePagination";
import useWindowDimension from "../hooks/useWindowDimension";
import { TIMELINE_CONTENT } from "../constants/contents";
import TimelineContent from "./TimelineContent";

const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
`;
const SwipeContainer = styled.div`
    display: flex;
    flex-flow: column;
    transform: translateY(${({ breakpoint }) => breakpoint * -1}px);
    transition: 2s cubic-bezier(0.68, -0.4, 0.27, 1.34) 0.2s;
`;

function Home(props) {
    const [slideNum, setSlideNum] = useState(0);
    const [breakpoint, setBreakpoint] = useState(0);

    const { height } = useWindowDimension();

    function handleWheel(e) {
        handleMovement(e.deltaY);
    }

    function handleMovement(delta) {
        const maxLength = TIMELINE_CONTENT.length - 1;
        const newSlideNum = Math.max(
            0,
            Math.min(slideNum + (delta > 0 ? 1 : -1), maxLength)
        );

        setSlideNum(newSlideNum);
        setBreakpoint(newSlideNum * height);
    }

    function handlePageClick(index) {
        setSlideNum(index);
        setBreakpoint(index * height);
    }

    return (
        <MainContainer onWheel={handleWheel}>
            <SwipeContainer breakpoint={breakpoint}>
                {TIMELINE_CONTENT.map(({ year, background }) => (
                    <TimelineBackground key={`bg-${year}`} background={background} />
                ))}
            </SwipeContainer>
            <TimelinePagination content={TIMELINE_CONTENT} index={slideNum} onPageClick={handlePageClick} />
            {TIMELINE_CONTENT.map((content, idx) => (
                <TimelineContent
                    key={`content-${content.year}`}
                    content={content}
                    active={idx === slideNum}
                />
            ))}
        </MainContainer>
    );
}

export default Home;
