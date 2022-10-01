import styled from "styled-components";

import play from "../assets/img/seta_play.png";
import virar from "../assets/img/seta_virar.png";

export default function Card(props) {

    const {flashcards, arrStatus, openQuestion, openAnswer, classify} = props;
    const { id, question, answer, open, status } = props.flashcards;

    return (
        <>
            {open === 'close' &&
                <PerguntaFechada onClick={()=>openQuestion(id)}>
                    <p>Pergunta {id}</p>
                    <img src={play} alt={play} />
                </PerguntaFechada>
            }
            {open === 'open1' &&
                <PerguntaAberta onClick={()=>openAnswer(id)}>
                    <p>{question}</p>
                    <img src={virar} alt={virar} />
                </PerguntaAberta>
            }
            {open === 'open2' &&
                <PerguntaAberta onClick={()=>classify(id)}>
                    <p>{answer}</p>
                    <img src={arrStatus[0]} alt={arrStatus[0]}/>
                </PerguntaAberta>
            }
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
    cursor: pointer;

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
    cursor: pointer;
 
img {
    position: absolute;
    bottom: 10px;
    right: 10px;
}
`