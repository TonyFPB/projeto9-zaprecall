import { useState } from "react"
import styled from "styled-components"
import play from "../img/seta_play.png"
import turn from "../img/seta_virar.png"

export default function Question(props) {
    const { card, cardOpen, setCardOpen, questionsList , setQuestionsList } = props
    //changeStyled tem que passar como props para disabilitar o botao e trocar o icone para o Bottom ver ele tambem 
    //se um cartao estiver como true o outro nao pode abrir
    
    const [changeText, setChangeText] = useState(false)

    const { question, response, answerQ} = card
    const title = `Pergunta ${card.id}`
    function openQuestion() {
        console.log(cardOpen)
        if (!cardOpen.openCard && !answerQ) {
            // setChangeStyled(false)
            const newList = [...questionsList]
            const newElement = {...card}
            newElement.changeStyle = false
            newList[newElement.id-1] = newElement
            const newObj = {...cardOpen}
            newObj.openCard = true
            newObj.card = card
            newObj.changeStyle = false
            setQuestionsList(newList)
            setCardOpen(newObj)
        }
    }

    return (
        (card.changeStyle) ?
            <ClosedQuestion coloredText = {card.colorQ} marked = {answerQ}>
                <p>{title}</p>
                <img onClick={()=>openQuestion()}  src={play} />
            </ClosedQuestion>
            :
            <OpenQuestion>
                <p>{(changeText) ? response : question}</p>
                <img onClick={() => setChangeText(true)} src={(changeText) ? "" : turn} />
            </OpenQuestion>
    )
}

const ClosedQuestion = styled.li`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: ${props => props.coloredText};
        text-decoration:${props => (props.marked)?"line-through":"none"};
    }
`
const OpenQuestion = styled.li`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img{
    position: absolute;
    bottom: 10px;
    right: 10px;
    }

`