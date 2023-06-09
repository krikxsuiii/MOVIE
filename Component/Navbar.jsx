import React from 'react'

const Navbar = () => {
  return (
    <div>
      <Box sx={{flexgrow:1}}>
        <AppBar position ="static">
            <Toolbar>
                <IconButton
                size='large'
                edge='start'
                color='inherit'
                aria label='menu'
                sx={{mp:2}}
                >
                </IconButton>
                    <Typography variant="h6" component="div" sx={{flexgrow:1}}>HOME</Typography><br></br>
                    <Button color='inherit' variant='contained' ><Link to="/" style={{color:'white'}}>View</Link></Button>
                    <Button color='inherit' variant='contained'><Link to="/addstud"style={{color:'white'}}>Add</Link></Button>
                    </Toolbar>
                    </AppBar>
                    </Box>
    </div>

  )
}

export default Navbar
