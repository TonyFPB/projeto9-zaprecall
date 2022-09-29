import styled from "styled-components"
import logo from "../img/logo.png"
import Bottom from "./Bottom"
import Questions from "./Questions"
export default function Container() {
    return (
        <Content>
            <LogoContainer>
                <img src={logo} />
                <h1>ZapRecall</h1>
            </LogoContainer>
            <Questions />
            <Bottom/>
        </Content>
    )
}


const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FB6B6B;;
`

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 42px;
    img{
        width: 52px;
    }
    h1{
        font-size: 36px;
        margin-left: 15px;
        font-family: 'Righteous';
    }
`