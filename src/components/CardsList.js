import Card from "./Card"

export default function CardsList(props) {

const {flashcards, openQuestion, openAnswer} = props

    return (
        <>
           {flashcards.map((card) => <Card key={card.id} flashcards={card}
           openQuestion={openQuestion} openAnswer={openAnswer}/>)}
        </>
    )
}
