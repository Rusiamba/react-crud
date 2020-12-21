function Card({text, deleteNote, id}) {
    return (
        <div className="card">
            <div className='card__delete' onClick={() => deleteNote(id)}>&#9746;</div>
            <div className='card__text'>{text}</div>
        </div>
    );
}

export default Card;
