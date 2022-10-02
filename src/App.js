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
    
        
    const [open, setOpen] = useState('close');

    const [image, setImage] = useState('');

   
    function openQuestion (id) {  

        let filtered = FLASHCARDS.filter((card) => (card.open === 'close'))

        if (filtered.length === FLASHCARDS.length && FLASHCARDS[id-1].status === ''){
            FLASHCARDS[id-1].open = 'open1';
            setOpen('open1');  
        }        
    }


    function openAnswer(id) {
        
        FLASHCARDS[id-1].open = 'open2';
        setOpen('open2');
      
    }     

   
    function classify (buttonText) {
               
        let filtered = FLASHCARDS.filter((card) => (card.open === 'open2'))             

        if (buttonText === 'erro'){
            FLASHCARDS[filtered[0].id-1].status = 'erro';
            FLASHCARDS[filtered[0].id-1].image = erro;
            setOpen(erro)          
        }

        if (buttonText === 'quase'){
            FLASHCARDS[filtered[0].id-1].status = 'quase';
            FLASHCARDS[filtered[0].id-1].image = quase;
            setImage(quase)
        }

        if (buttonText === 'certo') {
            FLASHCARDS[filtered[0].id-1].status = 'certo';
            FLASHCARDS[filtered[0].id-1].image = certo;
            setImage(certo)
        }

        FLASHCARDS[filtered[0].id-1].open = 'close';
        setOpen('close');

    }
    

    return (
        <div className="root">
            <Container>
                <Title />
                <CardsList
                    flashcards={FLASHCARDS}
                    openQuestion={openQuestion}
                    openAnswer={openAnswer}                   
                />
                <Footer
                    flashcards={FLASHCARDS}                   
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