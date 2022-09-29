import styled from "styled-components"


export default function Bottom() {
    return (
        <Footer>
            <div>
                <Buttons colors={'#FF3030'}>Nao lembrei</Buttons>
                <Buttons colors={'#FF922E'}>Quase nao lembrei</Buttons>
                <Buttons colors={'#2FBE34'}>Zap!</Buttons>
            </div>
            <p>1/4 CONCLUÍDOS</p>
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