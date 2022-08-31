import React, {useState} from 'react';

function Form() {
    const handleOnClick=()=>{
        // console.log("to Upper Case" + text)
       let newt= text.toUpperCase()
        setText(newt)

    }
    const handleOnChange=(event)=>{
        // console.log("On Change")
        setText(event.target.value)
        event.preventDefault();
    }


    const [text,setText] = useState();


  return (
    <div className="container">
       <form>
  <div className="mb-3">
    <label htmlFor="myBox"  className="form-label">Enter Your Text Here ⤵️</label>
    
    <textarea className="form-control" value={text} placeholder='Enter text ' onChange={handleOnChange} id="myBox" rows="5" ></textarea>
  </div>
  
  <button type="submit" onClick={handleOnClick} className="btn btn-primary">Submit</button>
</form> 
    </div>
  )
}

export default Form;