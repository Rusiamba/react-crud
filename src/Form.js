import {useState} from "react";

function Form({addNewNote}) {
    const [value, setValue] = useState('')
    const hundleSubmit = (e) => {
        e.preventDefault();
        addNewNote(value);
    }
    return (
        <form className='form' onSubmit={hundleSubmit}>
            <label className='label'>
                New Note
            </label>
            <textarea className='textarea'  value={value} onChange={(e) => setValue(e.target.value)} />
            <input className='button' type="submit" value="&#10148;" />
        </form>
    );
}

export default Form;
