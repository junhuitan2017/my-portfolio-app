import styled from "styled-components";
import { COLOR_PRIMARY } from "../constants/color";

const StyledPagination = styled.div`
    position: fixed;
    height: 100%;
    width: 20%;
    top: 0;
    left: 80%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    font-style: italic;
    font-weight: 300;
    font-size: 18px;

    &::before {
        position: absolute;
        left: 5px;
        content: "";
        height: 100%;
        width: 1px;
        background-color: rgba(255, 255, 255, 0.2);
    }
`;

const TitleShadow = styled.div`
    position: absolute;
    z-index: -1;
    height: 100%;
    right: 10%;
    transform: rotate(20deg);
    box-shadow: -230px 0 150px 30vw rgba(0,0,0, .7);
`

const TitleTile = styled.div`
    display: flex;
    align-items: center;
`

const TitleBullet = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: ${COLOR_PRIMARY};
    transform: scale(1);
    transition: .2s;

    ${({hide}) => hide && `
        transform: scale(0);
    `}
`

const TitleContent = styled.div`
    width: 50%;
    padding: 16px 50px;
    text-align: left;
    color: ${COLOR_PRIMARY};
    cursor: pointer;
`;

function TimelinePagination(props) {
    const { content, index, onPageClick } = props;
    return (
        <StyledPagination>
            <TitleShadow />
            {content.map(({year}, idx) => (
                <TitleTile key={`page-${year}`}>
                    <TitleBullet hide={index !== idx}/>
                    <TitleContent onClick={() => onPageClick(idx)}>{year}</TitleContent>
                </TitleTile>
            ))}
        </StyledPagination>
    );
}

export default TimelinePagination;
