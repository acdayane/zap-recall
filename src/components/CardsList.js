import Card from "./Card"

export default function CardsList(props) {

const {flashcards, arrStatus, openQuestion, openAnswer, classify} = props

    return (
        <>
           {flashcards.map((card) => <Card key={card.id} flashcards={card} arrStatus={arrStatus}
           openQuestion={openQuestion} openAnswer={openAnswer} classify={classify}/>)}
        </>
    )
}
