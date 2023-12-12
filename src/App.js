import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [Principle,setprinciple]= useState(0);
  const [interest,setinterest]=useState(0);
  const [year,setyear]=useState(0);
  const [result,setResult]=useState(0);
  const [isprinciple,setisprinciple]=useState(true)
  const[isinterest,setisInterest]=useState(true)
  const[isyear,setisyear]=useState(true)

  const calculateInterest= (e)=>{
 e. preventDefault();
 
  const result =(Principle * interest * year) /100;
  setResult(result)
  }
  const handleReset =()=>{
    setprinciple(0);
    setinterest(0);
    setyear(0);
    setResult(0);
  }
  const validate =(e)=>{
  const {name,value}=e.target;
     //console.log(name,value);
    if(name==='principlevalue'){
      setprinciple(value);
      let res = (!!value.match(/^[0-9]+$/));
      if(res ==true){
        setisprinciple(true)
      }
      else{
        setisprinciple(false)
      }
      //console.log(res);
    }
  
      else if(name ==='interestfield'){
      setinterest(value)
      let res = (!!value.match(/^[0-9]+$/));
      if(res === true){
       setisInterest(true)

  }
  else {
    setisInterest(false)
  }

  }
  else {
    setyear(value);
    let res = (!!value.match(/^[0-9]+$/));
    if(res === true){
      setisyear(true)

    }
    else{
      setisyear(false)
    }
    
  }
  }

  // console.log("=======principle Amound",Principle);
  return (
    
      <>
      <div className='d-flex justify-content-center align-items-center w-100 mt-5' style={{height:"90vh"}}>
      <div className='bg-light p-5 rounded' style={{width:"500px"}}>
      <h1>Simple Interest</h1>
      <p>calculate your simple interest easily</p>
      <div style={{height:"150px"}} className=' flex-column bg-warning mt-5 rounded d-flex justify-content-center align-items-center w-100 mt-5'>
        <h2>&#8377;{result}</h2>
        <p>Total simple interest</p>
      </div>
      <form  className='mt-3' onSubmit={calculateInterest}>

      <TextField  className='w-100' id="outlined-basic" label=" &#8377;Principle Amound" variant="outlined" 
    
       name='principlevalue'
       value={Principle}
       onChange={(e)=>validate(e)}/>
       {
        !isprinciple &&
        <div>
          <p className="text-danger">Invalid input</p>
        </div>
       }

      <TextField  className='w-100 mt-2' id="outlined-basic" label="Rate Of Interest(p.a) %" variant="outlined" 
     
      name='interestfield'
      value={interest}
      onChange={(e)=>validate(e)}/>


      {
        !isinterest &&
        <div>
          <p className="text-danger">Invalid input</p>
        </div>
       }

       <TextField  className='w-100 mt-2' id="outlined-basic" label="Year(yr)" variant="outlined" 
       name='totalyear'
       value={year}
       onChange={(e)=>validate(e)}/>
      
        {
        !isyear &&
        <div>
          <p className="text-danger">Invalid input</p>
        </div>
       }

      <Stack direction="row" spacing={2} className='mt-3'>
      <Button  disabled={isprinciple && isinterest && isyear?false:true}  variant="contained" className='bt-success ' style={{height:"50px",width:"200px"}} type='submit'>Calculate</Button>
      <Button variant="contained" style={{height:"50px",width:"200px",color:"blue"}} className='bg-light' onClick={handleReset}>Reset</Button>
      </Stack>
    </form>
      </div>
      </div>
</>
   
  );
}



export default App;
