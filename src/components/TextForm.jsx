import React,{useState} from 'react';

export default function TextForm(props) {

    const [text,setText] = useState("Enter the text here");

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }

    const handleReClick = ()=>{
        let newText = text.split('').reverse().join('');
        setText(newText);
        props.showAlert("Input is reversed","success");
    }
    
    const handleCopyClick = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard","success");
    }

    const handleClClick = ()=>{
        setText("");
        props.showAlert("Text Cleared!","success");
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handelOnchange = (event)=>{
        setText(event.target.value);
    }
    return (
        <>
            <div className='container' style={{color: props.mode==='light'?'black':'white'}} >
            <h1 className='mb-4' >{props.heading}</h1>
                <div className="mb-3" background={props.mode}>
                {/* <label for="mybox" class="form-label">Example textarea</label> */}
                <textarea className="form-control" value={text} onChange={handelOnchange} style={{backgroundColor: props.mode==='light'?'white':'#13466e',color: props.mode==='light'?'black':'white'}} id="myBox" bg={props.mode} rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleReClick}>Reverse Word</button>
                <button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={handleCopyClick}>Copy to Clipboard</button>
                <button disabled={text.length===0} className="btn btn-danger mx-2 my-2" onClick={handleClClick}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Space</button>

            </div>
            <div style={{color: props.mode==='light'?'black':'white'}}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to Preview"}</p>
            </div>
        </>
  )
}
