import React, { useState } from 'react'

export default function TextForm(props) {

    const convertToUC = () => {

        let newText = text.toUpperCase()
        setNewText(newText);
        props.alert('Converted to uppercase', 'success');
    }

    const convertToLC = () => {

        let newText = text.toLowerCase()
        setNewText(newText);
        props.alert('Converted to lowercase', 'success');
    }

    const handleOnChange = (event) => {

        setText(event.target.value);
    };

    const [text, setText]       = useState("");
    const [newText, setNewText] = useState("");

    return (
        <div>
            <div className="container my-3">

                <h1>{props.heading}</h1>

                <div className="mb-3">
                    <label className="form-label">Input</label>
                    <textarea className="form-control" rows="5" value={text} onChange={handleOnChange} placeholder='Enter text here'></textarea>
                    <p><b>Your text summary</b><br />{text.split(" ").filter((e) => {return e.length!==0}).length} words and {text.length} characters</p>    
                </div>

                <div className="my-4">
                    <button className="btn btn-primary mx-1 my-1" onClick={convertToUC}>Convert To Uppercase</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={convertToLC}>Convert To Lowercase</button>
                </div>

                <div className="my-3">
                    <h1>Output</h1>
                    <textarea className="form-control" rows="5" value={newText} readOnly disabled></textarea>
                </div>

            </div>
        </div>
    )
}
