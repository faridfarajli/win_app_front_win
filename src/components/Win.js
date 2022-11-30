import React,  {  useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';  
import {Button, Container, Paper, Checkbox, FormControlLabel,NativeSelect,DropdownList } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function Contestants() {
    const paperStyle={padding: '50px 20px', width:600,margin:"20px auto" }
    const[name,setName]=useState('')
    const[age,setAge]=useState('')
    const[email,setEmail]=useState('')
    const[category,setCategory]=useState('')
    // const[one,setCategory]=useState('')
    // const[two,setCategory]=useState('')
    // const[three,setCategory]=useState('')
    // const[four,setCategory]=useState('')

    const[select,setSelected] = useState('')
    const currencies = [
      
      'FrontEnd',
       'BackEnd'

      
    ];

    
        const handleClick=(e)=>{
      e.preventDefault()
      const Contestants ={name,age,email,
      category}
      console.log(Contestants)
      fetch("http://localhost:8080/learn/new",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(Contestants)
      }).then(()=>{
        console.log("Succsesfully")
      })
    }
    

 // const [currency, setCurrency] = React.useState('One');

  const classes = useStyles();


  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
          <h1>Bosluqlar; doldurun</h1>
    <form className={classes.root} noValidate autoComplete="off">

        
        <TextField
          required
          id="outlined-required"
          label="Adınız"
          value={name}
          onChange={(e)=> setName(e.target.value)} 
          
        />
  
       
  
        <TextField
          id="standard-number"
          label="Yasiniz"
          type="number"
          value={age}
          onChange={(e)=> setAge(e.target.value)} 
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
         <TextField
          id="standard-email"
          label="E-mail"
          type="E-mail"
          value={email}
          onChange={(e)=> setEmail(e.target.value)} 
        
    />

         <TextField
          id="standard"
          label="İstənilən Kurs"
          type="İstənilən Kurs"
          value={category}
          onChange={(e)=> setCategory(e.target.value)} 
        
    />



        <TextField
          disabled
          id="standard-disabled"
          label="Katekoriya"  
          defaultValue="İnformasiya Texnologiyaları"
          variant="standard"
        />
    

      <Button variant="contained" color="red" onClick={handleClick} fullWidth>
        Klik'yin'
      </Button> 
      


    </form>
    </Paper>
    </Container> 
  );
}
