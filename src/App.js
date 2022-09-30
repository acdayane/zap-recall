import styled from 'styled-components';
import {GlobalStyle} from './GlobalStyle';

import Title from "./components/Title";
import Questions from "./components/Questions";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div className="root">
            <Container>
                <Title />
                <Questions />
                <Footer />
            </Container>
            <GlobalStyle/>
        </div>
    )
}

const Container = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`;