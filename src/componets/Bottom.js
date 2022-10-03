import { useState } from "react";
import styled from "styled-components"


export default function Bottom(props) {
    const {questionsList,setQuestionsList,cardOpen,setCardOpen, changeText, setChangeText} = props
    const [numbers, setNumbers] = useState(0)
    
    function semNome(qualquer){
        if(cardOpen.openCard && !changeText){
            questionsList.forEach((element, index)=> {
                if(element.id === cardOpen.card.id){
                    const newQuestions = [...questionsList]
                    const newCard = {...cardOpen.card}
                    newCard.colorQ = qualquer
                    newCard.answerQ = true
                    newCard.changeStyle = true
                    newQuestions[index] = newCard
                    setNumbers(numbers+1)
                    setChangeText(true)
                    setQuestionsList(newQuestions)
                    setCardOpen({openCard:false,card:''})
                }
            });
        }
    }

    return (
        <Footer>
            <div>
                <Buttons data-identifier="forgot-btn" colors={'#FF3030'} onClick ={()=>semNome('#FF3030')}>Nao lembrei</Buttons>
                <Buttons data-identifier="almost-forgot-btn" colors={'#FF922E'} onClick ={()=>semNome('#FF922E')}>Quase nao lembrei</Buttons>
                <Buttons data-identifier="zap-btn" colors={'#2FBE34'} onClick ={()=>semNome('#2FBE34')}>Zap!</Buttons>
            </div>
            <p data-identifier="flashcard-counter">{numbers}/8 CONCLUÍDOS</p>
        </Footer>
    )
}

const Footer = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
    div{
        display: flex;
        width: 80%;
        justify-content: space-between;
        margin: 20px;
    }
`
const Buttons = styled.button`
    width: 90px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background:${props => props.colors};
    border-radius: 5px;
    border: 1px solid ${props => props.colors};
    padding:5px;
`