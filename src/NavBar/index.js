import styled from "styled-components";

const NavContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 10%;
    width: 100%;
    background: lightcoral;
    z-index: 2;
    text-align: center;
`

function NavBar(props) {
    return (
        <NavContainer>
            <h1>RESERVED FOR NAVIGATION HEADER</h1>
        </NavContainer>
    )
}

export default NavBar;