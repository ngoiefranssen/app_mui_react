import { AppBar, Box, Grid, InputBase, Toolbar } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

const Header = () => {
  return (
    <Box position='static'>
        <AppBar sx={{ backgroundColor: '#f8f7fa', transform:'translateZ(0)'}}>
            <Toolbar>
                <Grid container>
                    <Grid item sm={6}></Grid>
                    <Grid item sx={{ display: 'flex', justifyContent: 'center' }} sm={6}>
                        <InputBase
                            sx={{
                                opacity: 0.6,
                                padding: '0px 0px 8px',
                                fontSize: '1rem'
                            }}
                            placeholder='Seach topics.......'
                            startAdornment={<SearchIcon fontSize='small' />}
                        />
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    </Box>
    
  )
}

export default Header
