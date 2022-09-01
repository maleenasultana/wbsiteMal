import React, {useState} from 'react';

function Form() {
    const handleOnClick=()=>{
        // console.log("to Upper Case" + text)
       let newt= text.toUpperCase()
        setText(newt)

    }
    const handleLoOnClick=()=>{
      // console.log("to Upper Case" + text)
     let newt= text.toLowerCase()
      setText(newt)

  }
    const handleOnChange=(event)=>{
        // console.log("On Change")
        setText(event.target.value)
        event.preventDefault();
    }
    const handleCopy=()=>{
      let text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value)
    }

    // const handleExtraSpaces=()=>{
    //   let newText=text.split(/[ ]+/);
    //   setText(newText.join(""))
    // }
    const reset=()=>{
      setText("");
    }
   


    const [text,setText] = useState();


  return (
    <>
    <div className="container">
       <form>
  <div className="mb-3">
    <label htmlFor="myBox"  className="form-label">Enter Your Text Here ⤵️</label>
    
    <textarea className="form-control" value={text} placeholder='Enter text ' onChange={handleOnChange} id="myBox" rows="5" ></textarea>
  </div>
  
  <button type="submit" onClick={handleOnClick} className="btn btn-primary mx-2">Submit</button>
  <button type="submit" onClick={handleLoOnClick} className="btn btn-primary">change to lower case</button>
  <button type="submit" onClick={handleCopy} className="btn btn-primary mx-2">copy text</button>
  {/* <button type="submit" onClick={handleExtraSpaces} className="btn btn-primary">remove Spaces</button> */}
  <button type="submit" onClick={reset} className="btn btn-primary mx-2">Reset </button>
</form> 
    </div>
    <div className='container my-3'>
      
        <h4> your text summary</h4>
        <p>Total words and characters </p>
       {/* <p>{text?.split(",").length} words and {text.length||""}characters</p>
      <p> {0.008 * text?.split(",").length} minutes to read </p> */}
      <h4>Preview</h4>
      <p>{text}</p>
    </div>
    </>
  )
}

export default Form;