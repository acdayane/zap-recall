import styled from "styled-components";

import virar from "../assets/img/seta_virar.png";


export default function Card(props) {

    const {flashcards, openQuestion, openAnswer} = props;
    const { id, question, answer, open, status, image } = props.flashcards;

    return (
        <>
            {open === 'close' &&
                <PerguntaFechada>
                    {status === '' &&
                        <p>Pergunta {id}</p>
                    }
                    {status === 'erro' &&
                        <p style={{color: '#FF3030', textDecoration: 'line-through'}}>
                            Pergunta {id}
                        </p>
                    }
                    {status === 'quase' &&
                        <p style={{color: '#FF922E', textDecoration: 'line-through'}}>
                            Pergunta {id}
                        </p>
                    }
                    {status === 'certo' &&
                        <p style={{color: '#2FBE34', textDecoration: 'line-through'}}>
                            Pergunta {id}
                        </p>
                    }
                    <img src={image} alt={image} onClick={()=>openQuestion(id)} data-identifier="flashcard-show-btn"/>
                </PerguntaFechada>
            }
            {open === 'open1' &&
                <PerguntaAberta data-identifier="flashcard-turn-btn" >
                    <p>{question}</p>
                    <img src={virar} alt={virar} onClick={()=>openAnswer(id)} data-identifier="flashcard-turn-btn"/>
                </PerguntaAberta>
            }
            {open === 'open2' &&
                <PerguntaAberta>
                    <p>{answer}</p>
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

p {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
}
img {
    cursor: pointer;
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
    cursor: pointer;
}
`