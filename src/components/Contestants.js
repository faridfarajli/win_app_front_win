import React,  {  useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';  
import {Button, Container, Paper, Checkbox, FormControlLabel } from '@material-ui/core';
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
    const[surname,setSurname]=useState('')
    const[age,setAge]=useState('')
    const[email,setEmail]=useState('')
    const[job,setJob]=useState('')
    const[gender,setGender]=useState('')
    const[country,setCountry]=useState('')
    const[yn,setYtName]=useState('')
    const[yu,setYtURL]=useState('')
    const[yc,setYtCategory]=useState('')
    const[ysv,setYtSubcribe]=useState('')
    const[yvv,setYtVideo]=useState('')
    const[date,setDate]=useState('')
    const[checkeda,setCheckedA]=useState('')
    const[checkedb,setCheckedB]=useState('')
    const[checkedc,setCheckedC]=useState('')
    const[select,setSelected] = useState('')
    
        const handleClick=(e)=>{
      e.preventDefault()
      const Contestants ={name,surname,age,email,
      job,gender,country,yn, yu,yc,ysv,yvv,date,checkeda,checkedb,checkedc}
      console.log(Contestants)
      fetch("http://localhost:8080/contestants/new",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(Contestants)
      }).then(()=>{
        console.log("Succsesfully")
      })
    }


    
  const classes = useStyles();


  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
          <h1>Bilgilerinizi giriniz</h1>
    <form className={classes.root} noValidate autoComplete="off">
  
     

      <TextField id="outlined-basic" label="Adınız" variant="outlined" fullWidth 
      value={name}
      onChange={(e)=> setName(e.target.value)}
      />
    
      <TextField id="outlined-basic" label="Soyadınız" variant="outlined" fullWidth
      value={surname}
      onChange={(e)=> setSurname(e.target.value)}
      />
       <TextField id="outlined-basic" label="Yaşınız" variant="outlined" fullWidth
      value={age}
      onChange={(e)=> setAge(e.target.value)}
      />
      <TextField id="outlined-basic" label="Email" variant="outlined"fullWidth 
      value={email}
      onChange={(e)=> setEmail(e.target.value)}
      />
      <TextField id="outlined-basic" label="Mesleğiniz" variant="outlined" fullWidth
      value={job}
      onChange={(e)=> setJob(e.target.value)}
      />
      <TextField id="outlined-basic" label="Cinsiyetiniz" variant="outlined"fullWidth
      value={gender}
      onChange={(e)=> setGender(e.target.value)}
      />
      <TextField id="outlined-basic" label="Ülkeniz" variant="outlined" fullWidth 
      value={country} 
      onChange={(e)=> setCountry(e.target.value)}
      />
      <TextField id="outlined-basic" label="Kanaldaki video sayınız" variant="outlined" fullWidth
      value={yvv}
      onChange={(e)=> setYtVideo(e.target.value)}
      />
      <TextField id="outlined-basic" label="Kanalınızın adı" variant="outlined" fullWidth
      value={yn}
      onChange={(e)=> setYtName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Kanalınızın URL linki" variant="outlined"fullWidth
       value={yu}
       onChange={(e)=> setYtURL(e.target.value)}
       />
      <TextField id="outlined-basic" label="Kanal kategoriniz" variant="outlined" fullWidth
       value={yc}
       onChange={(e)=> setYtCategory(e.target.value)}
         />
  
      <TextField id="outlined-basic" label="Kanal abone sayınız" variant="outlined" fullWidth
      value={ysv}
      onChange={(e)=> setYtSubcribe(e.target.value)}
      />
       <TextField id="outlined-basic" label="Lütfen bu günün tarihini yazınız (örnek:2022-12-31)" variant="outlined" fullWidth
      value={date}
      onChange={(e)=> setDate(e.target.value)}
      />

      <FormControlLabel value={true} onChange={(e)=> setCheckedA(e.target.value)}
       control={<Checkbox color="primary" />}  label="Youtube'daki ücretsiz eğtimlerin hepsini izledim"labelPlacement="end" />
      <FormControlLabel value={true} onChange={(e)=> setCheckedB(e.target.value)} 
      control={<Checkbox color="primary" />}  label="Udemy'de olan  eğtiminizi satın aldım"labelPlacement="end" />
      <FormControlLabel value={true} onChange={(e)=> setCheckedC(e.target.value)} 
      control={<Checkbox color="primary" />}  label="Hicbir eğtiminizi satın almadım ve izlemedim"labelPlacement="end" />

      <Button variant="contained" color="secondary" onClick={handleClick}>
        Bilgilerinizi Onaylayınız
      </Button>
      


    </form>
    </Paper>
    </Container> 
  );
}
