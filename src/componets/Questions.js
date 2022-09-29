import styled from "styled-components"
import Question from "./Question"

export default function Questions() {
    const zapQuestions = [
        { question: 'O que é JSX?', response: 'Uma extensão de linguagem do JavaScript' },
        { question: 'O React é __', response: 'uma biblioteca JavaScript para construção de interfaces' },
        {question:'Componentes devem iniciar com __',response:'letra maiúscula'},
        {question:'Podemos colocar __ dentro do JSX',response:'expressões'},
        {question:'O ReactDOM nos ajuda __',response:'interagindo com a DOM para colocar componentes React na mesma'},
        {question:'Usamos o npm para __ ',response:'gerenciar os pacotes necessários e suas dependências'},
        {question:'Usamos props para __',response:'passar diferentes informações para componentes '},
        {question:'Usamos estado (state) para __ ',response:'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'}
    ]



    return (
        <Content>
            {zapQuestions.map((element, index) => <Question key={index} card={element} index={index+1}></Question>)}
        </Content>
    )
}
const Content = styled.ul` 
    display: flex;
    flex-direction: column;
`