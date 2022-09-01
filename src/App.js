// Word count App
import './App.css';
import Navbar from './components/Navbar';

import Form from './components/Form';
import About from './components/About';
import React, {useState} from "react";
import{Routes,Route,Link} from "react-router-dom";
import Alert from './components/Alert';

function App() {


  const [mode,setMode] = useState("light");
  const [alert,setAlert]=useState("null");

  const showAlert =(message, type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(()=>{
       setAlert();
    },2000);

    }
  

  const toggleMode=()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor ="#042743";
      // showAlert("Dark mode is Enabled");
    }
    else{
      setMode("light")
      document.body.style.backgroundColor ="white";
      // showAlert("Light mode is Enabled");
    }
    
  }

  return (
    <div>
      <Navbar mode={mode} toggleMode={toggleMode}/>
    <Alert alert="This is alert!"/>
    <Routes>
      
      
      
       <Route path="/"
       element={ <Form mode={mode}/>} 
        /> 
      <Route path="/about" element={ <About />}/>

    </Routes>
      
    </div>
  );
}

export default App;
