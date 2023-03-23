import React from 'react'

const movies = () => {
        var [Update, setUpdate] = useState(false)
        var[singlevalues,setsingvalues]=useState([])
        var[movie,setmovies] = useState([])
        useEffect(() => {
            axios.get("http://localhost:3005/students")
                .then(response => {
                    console.log(response.data);
                    setmovie(movies=response.data);
                })
                .catch(err => console.log(err))
        },[])
        const deletemovie=(id)=>{
            console.log("delete clicked"+id)
            axios.delete("http://localhost:3005/studentsi/"+id)
                .then("deleted")
                window.location.reload(false)
        }
        const updatevalue =(value)=>{
            setsingvalues(value);
            setUpdate(true);
        }
    
        var finaljsx=<TableContainer>
            
        
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>MOVIENAME</TableCell>
                    <TableCell>DIRECTOR</TableCell>
                    <TableCell>LANGUAGE</TableCell>
                    <TableCell>GENERE</TableCell>
                    <TableCell>RELEASE DATE</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {movies.map((value, index) => {
                    return <TableRow>
                        <TableCell>{value.moviename}</TableCell>
                        <TableCell>{value.director}</TableCell>
                        <TableCell>{value.language}</TableCell>
                        <Tablecell>{value.genere}</Tablecell>
                        <Tablecell>{Value.releaseyear}</Tablecell>
                        <TableCell>
                            <Button onClick={()=>deletemovie(value.id)}>Delete</Button>
                        </TableCell>
                        <TableCell>
                            <Button color='success'
                            onClick={()=>updatevalue(value)}>Update</Button>
                        </TableCell>
                    </TableRow>
                })}
            </TableBody>
          </Table>
           </TableContainer>
            if(Update)
            finaljsx=<movies data={singlevalues} method="put"/>
        return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            {finaljsx}
        </div>
        )
    }

export default movies
