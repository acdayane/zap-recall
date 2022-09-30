import styled from 'styled-components';
import FLASHCARDS from '../flashcards';

import Question from "./Question";

export default function Questions() {

    return (
        <ContainerQuestions>
            {FLASHCARDS.map((f) => (
            <Question
                id={f.id} 
                question={f.question}
                answer={f.answer}
                open={f.open}
                status={f.status}
            />))}
        </ContainerQuestions>
    )
}

const ContainerQuestions = styled.div`
    background-color: pink;
`;