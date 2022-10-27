



import {  useState } from "react";
function App() {
  const [task, setTask] = useState({
    value: "",
    value2: "",
    value3:"",
    
  });
  const [resultado, setResultado] = useState(null);
   
 const  handleChange = (e)=> {
    
  setTask({ ...task, [e.target.name]: e.target.value });
  }

const  handleSubmit = (e) =>
 {
  e.preventDefault();
  let x = parseFloat(task.value3)
  let x2=0
    if( task.value == "MXN"){
     if( task.value2 == "USD"){
      x2=0.050

    }
    else if( task.value2 == "EUR"){
      x2=0.051
    }
    else if( task.value2 == "BTC"){
      x2= 0.0000026
    }
    else if( task.value2 == "DOGE"){
      x2=  0.85
    }

  }
  else if( task.value == "USD"){
    if( task.value2 == "MXN"){
      x2= 19.93
    }
    else if( task.value2 == "EUR"){
      x2= 1.01 
    }
    else if( task.value2 == "BTC"){
      x2= 0.000052
    }
    else if( task.value2 == "DOGE"){
      x2= 16.92
    }
  }
  else if( task.value == "EUR"){
    if( task.value2 == "USD"){
      x2=0.99
    }
    else if( task.value2 == "MXN"){
      x2=19.67 
    }
    else if( task.value2 == "BTC"){
      x2= 0.000051
    }
    else if( task.value2 == "DOGE"){
      x2= 16.70
    }

  }
  else if( task.value == "BTC"){
    if( task.value2 == "USD"){
      x2= 19329.80
    }
    else if( task.value2 == "EUR"){
      x2= 19580.22
    }
    else if( task.value2 == "MXN"){
      x2= 385282.54
    }
    else if( task.value2 == "DOGE"){
      x2=327142.37
    }
    
  }
  else if( task.value == "DOGE"){
    if( task.value2 == "USD"){
      x2= 0.059
    }
    else if( task.value2 == "EUR"){
      x2=   0.060
    }
    else if( task.value2 == "BTC"){
      x2= 0.0000031
    }
    else if( task.value2 == "mxn"){
      x2= 1.18
    }
  }
  let x3 = x*x2
    setResultado(x3)
  
  }
  return (
    <div className="App">
          <h1>Calculadora react</h1>
       
        <form onSubmit={handleSubmit}>
        <label>
          Divisa 1:
          <select name="value" onChange={handleChange}>
            <option value="USD">USD</option>
            <option value="MXN" selected>MXN</option>
            <option value="EUR">EUR</option>
            <option value="BTC">BTC</option>
            <option value="DOGE">DOGE</option>
          </select>
        </label>
        <br></br>
       
        <label>
          Divisa 2:
          <select name="value2" onChange={handleChange}>
            <option value="USD">USD</option>
            <option value="MXN" selected>MXN</option>
            <option value="EUR">EUR</option>
            <option value="BTC">BTC</option>
            <option value="DOGE">DOGE</option>
          </select>
        </label>
        <br></br>
        <label>
         Cantidad:
          <input type="text"  name="value3" value={task.value3} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
   
        <br></br>
      {
         resultado != null ?(<><p>El cambio de divisa resulta en {resultado}</p></>):(<></>)
       }
        </div>
        
  );
}

export default App;
