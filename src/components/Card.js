import styled from "styled-components";

import certo from "../assets/img/icone_certo.png";
import erro from "../assets/img/icone_erro.png";
import quase from "../assets/img/icone_quase.png";

export default function Card(props) {

    const { id, question, answer, open, status } = props.flashcard;

    return (
        <>
            <PerguntaFechada>
                <p>Pergunta 1</p>
                
            </PerguntaFechada>
            <PerguntaAberta>
                <p>{question}</p>
                <img src={certo} alt={certo}/>
                <p>{answer}</p>

            </PerguntaAberta>
        </>
    )
}

const PerguntaFechada = styled.div`
    width: 85%;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

p {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
}
`
const PerguntaAberta = styled.div`
    width: 85%;
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

img {
    position: absolute;
    bottom: 10px;
    right: 10px;
}
`