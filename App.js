
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
// import {usestate} from 'react'
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";

function App() {

  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = 'rgb(32 136 210)'
      showalert('Dark mode has been enabled', 'success')
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showalert('light mode has been enabled', 'success')
    }
  }


  return (
    <>
      {/* <Router>
        <Navbar title='gauravbar' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3" >


          <Routes>

            <Route exact path="/" element={<Textarea showalert={showalert} mode={mode} heading=' Enter the text to analyise' />} />
            <Route exact path="/about" element={<About />} />
          </Routes>


        </div>
      </Router> */}
       <Navbar title='gauravbar' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3" >
        <Textarea showalert={showalert} mode={mode} heading=' Enter the text to analyise' />
        </div>

    </>
  );
}

export default App;
