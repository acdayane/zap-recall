import styled from 'styled-components';

export default function Footer(props) {

    const {flashcards} = props
  
    return (
        <ContainerFooter>
            <ContainerButtons>
                <button style={{backgroundColor:"#FF3030"}}>Não lembrei</button>
                <button style={{backgroundColor:"#FF922E"}}>Quase não lembrei</button>
                <button style={{backgroundColor:"#2FBE34"}}>Zap!</button>
            </ContainerButtons>
                <h1>0/{flashcards.length} CONCLUÍDOS</h1>
        </ContainerFooter>
    )
}

const ContainerFooter = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-family: 'Recursive', sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 8px;

h1 {
    margin: 10px;
`;

const ContainerButtons = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    margin: 7px;

button {
    width: 30%;
    height: 40px;
    font-family: 'Recursive', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    border-radius: 5px;   
    padding:5px;
    cursor: pointer;
}
`
