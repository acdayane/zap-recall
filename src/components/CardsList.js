import FLASHCARDS from '../flashcards';

import Card from "./Card";

export default function CardsList() {

    return (
        <>
            {FLASHCARDS.map((f) => <Card key={f.id} flashcard={f}/>)}
        </>
    )
}
