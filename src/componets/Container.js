import styled from "styled-components"
import zapQuestions from "./zapQuestions"
import logo from "../img/logo.png"
import Bottom from "./Bottom"
import Questions from "./Questions"
import { useState } from "react"

export default function Container() {
    const [questionsList, setQuestionsList] = useState(zapQuestions)
    const [cardOpen, setCardOpen] = useState({ openCard: false, card: '' })

    return (
        <Content>
            <LogoContainer>
                <img src={logo} />
                <h1>ZapRecall</h1>
            </LogoContainer>
            <Questions questionsList={questionsList} cardOpen={cardOpen} setCardOpen={setCardOpen} setQuestionsList={setQuestionsList} />
            <Bottom questionsList={questionsList} setQuestionsList={setQuestionsList} cardOpen={cardOpen} setCardOpen={setCardOpen} />
        </Content>
    )
}


const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FB6B6B;
    margin-bottom: 110px;
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