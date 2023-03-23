import React from 'react'

const Addm = () => {
    var[movie,setmovie]=useState({
         movienmame:"",
         Director:"",
         language:"",
         Genere:"",
         Release:"",
    })
    const handler =(e) => {
        const{name,value}= e.target 
        setmovie({...movie,[name]:value})
    }
    const savedata = (e) => {
        axios.post("http://localhost:3005/show",movie)
        .then(response=>{
            alert("Added")
        })
        .Catch(err=>{
            alert("failed")
        })
    
    
    }
    }
  return (
    <div>
        <TypographY variant='h3'>Add movies</TypographY><br></br>
        <Textfield name='moviename' variant='standard'
        label='moviename' onChange='handler'
        value={movie.moviename}/>
        <br></br>
        <br></br>
        <Textfield name='director' variant='standard'
        label='director' onChange='handler'
        value={movie.director}/>
        <br></br>
        <br></br>
        <Textfield name='language' variant='standard'
        label='language' onChange='handler'
        value={movie.language}/>
        <br></br>
        <br></br>
        <Textfield name='genere' variant='standard'
        label='genere' onChange='handler'
        value={movie.genere}/>
        <br></br>
        <br></br>
        <Textfield name='release year' variant='standard'
        label='release year' onChange='handler'
        value={movie.releaseyear}/>
        <br></br>
        <br></br>
        <Button variant='contained' onClick={savedata}>SUBMIT</Button>
    </div>
  )
  
export default Addm
