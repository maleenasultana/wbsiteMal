import React, {useState} from 'react';

function Form() {
    const handleOnClick=()=>{
        console.log("to Upper Case" + text)
       let newt= text.toUpperCase()
        setText(newt)

    }
    const handleLoOnClick=()=>{
      console.log("to Upper Case" + text)
     let newt= text.toLowerCase()
      setText(newt)

  }
    const handleOnChange=(event)=>{
        console.log("On Change")
        setText(event.target.value)
        event.preventDefault();
    }
    const handleCopy=(event)=>{
      let text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(event.text.value)
    }

    const handleExtraSpaces = () => {
      let newText=text.split(/[]+/);
      setText(newText.join(""));
      
  }
    const reset= ()=>{ 
      let newText = '';
      setText(newText);
     
  }
   


    const [text,setText] = useState([]);


  return (
    <>
    <div className="container">
       <form>
  <div className="mb-3">
    <label htmlFor="myBox"  className="form-label">Enter Your Text Here ⤵️</label>
    
    <textarea className="form-control"
     onChange={handleOnChange} id="myBox" rows="5" ></textarea>
  </div>
  
  <button type="button" onClick={handleOnClick} className="btn btn-primary mx-2">CONVERT TO UPPER CASE</button>
  <button type="button" onClick={handleLoOnClick} className="btn btn-primary">convert to lower case</button>
  <button type="button" onClick={handleCopy} className="btn btn-primary mx-2">copy text</button>
  <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces }>Remove Extra Spaces</button>
  <button type="reset" onClick={reset} className="btn btn-primary mx-2">Reset </button>
</form> 
    </div>
    <div className='container my-3'>
      
        <h6> your text summary</h6>
        <p>Total words  {text.toString().length} and {text.toString().split("").length}  characters </p>
       {/* <p>{toString(text).split("").length} words and {toString(text).length}characters</p> */}
      {/* <p> {0.008 * toString(text).split("").length} minutes to read </p> */}
      <h6>Preview</h6>
      <p>{text}</p>
    </div>
    </>
  )
}

export default Form;