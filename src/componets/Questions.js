import styled from "styled-components"
import Question from "./Question"

export default function Questions(props) {
    const {questionsList, setQuestionsList ,cardOpen,setCardOpen} = props
    console.log(questionsList)
    return (
        <Content>
            {questionsList.map((element) => <Question key={element.id} card={element} questionsList = {questionsList} setQuestionsList={setQuestionsList} cardOpen={cardOpen} setCardOpen={setCardOpen}></Question>)}
        </Content>
    )
}
const Content = styled.ul` 
    display: flex;
    flex-direction: column;
`