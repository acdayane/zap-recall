import React, { useState } from "react";
import {GlobalStyle} from './GlobalStyle';
import styled from 'styled-components';

import FLASHCARDS from './flashcards';
import Title from "./components/Title";
import CardsList from "./components/CardsList";
import Footer from "./components/Footer";

import certo from "./assets/img/icone_certo.png";
import erro from "./assets/img/icone_erro.png";
import quase from "./assets/img/icone_quase.png";

export default function App() {

    const arrStatus = ["", erro, quase, certo];
    
    const [refresh, setRefresh] = useState('close');

    function openQuestion (id) {  
        let filtered = FLASHCARDS.filter((card) => (card.open === 'close'))
            if (filtered.length === FLASHCARDS.length){
            FLASHCARDS[id-1].open = 'open1';
            setRefresh('open1');  
        }        
    }

    function openAnswer(id) {
        FLASHCARDS[id-1].open = 'open2';
        setRefresh('open2');
    }

    function classify (id) {
        FLASHCARDS[id-1].open = 'close';
        FLASHCARDS[id-1].status = 3;
        setRefresh('close');
    }

    return (
        <div className="root">
            <Container>
                <Title />
                <CardsList
                    flashcards={FLASHCARDS}
                    arrStatus={arrStatus}
                    openQuestion={openQuestion}
                    openAnswer={openAnswer}
                    classify={classify}
                />
                <Footer
                    flashcards={FLASHCARDS}                   
                    arrStatus={arrStatus}
                    openQuestion={openQuestion}
                    openAnswer={openAnswer}
                    classify={classify}
                />
            </Container>
            <GlobalStyle/>
        </div>
    )
}

const Container = styled.div`
    background-color: #FB6B6B;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 150px;
`;