import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{bgcolor:'#152A31',pt:5, }}>
        <Grid container sx={{display:'flex' , justifyContent:'center', alignItems:'center', gap:10}}>
            <Grid item lg={4}>
                <Box sx={{bgcolor:'linear-gradient(180deg, #152A31 0%, #000000 102.48%)', p:5}}>
                    <Box sx={{width:'90%', display:'flex', justifyContent:'start', alignItems:'center', color:'#fff',mb:2}}>
                        <img src="mail-plus.png" alt="" style={{width:'25px'}}/>
                        We’d love to hear from you
                    </Box>
                    <Box sx={{width:'90%',mb:5}}>
                        <img src="GET IN TOUCH.png" alt="" />
                    </Box>
                    <input type="text" style={{border:'none',padding:'10px', width:'90%', fontSize:'20px',borderRadius:'8px', margin:'15px 0'}}  placeholder='Business Related'/>
                    <input type="text" style={{border:'none',padding:'10px', width:'90%', fontSize:'20px',borderRadius:'8px', margin:'15px 0'}}  placeholder='Driver Related'/>
                </Box>
            </Grid>
            <Grid item lg={5}>
                <Box sx={{color:'#fff', display:'flex',justifyContent:'center',gap:10}}>
                    <div style={{display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center',gap:5}}>Home 
                    <span style={{fontSize:'5px', minWidth:'60px', backgroundColor:'#07DD92', color:'#07DD92'}}></span>
                    </div>
                    <div style={{display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center',gap:5}}>Business <br/>
                    <span style={{height:'5px', width:'60px', backgroundColor:'#C2D0D6'}}></span></div>
                    <div  style={{display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center',gap:5}}>Driver <br/>
                    <span style={{height:'5px', width:'60px', backgroundColor:'#C2D0D6'}}></span></div>
                    <div style={{display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center',gap:5}}>Vehicle  <br/>
                    <span style={{height:'5px', width:'60px', backgroundColor:'#C2D0D6'}}></span></div>
                    <div  style={{display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center',gap:5}}>About us  <br/>
                    <span style={{height:'5px', width:'60px', backgroundColor:'#C2D0D6'}}></span></div>
                </Box>
                <Box sx={{p:5}}>
                    <Box sx={{color:'#fff', fontSize:16, my:3}}>Located in</Box>
                    <Box sx={{display:'flex', gap:10}}>
                    <Typography sx={{color:'#fff'}}>Lorem ipsum dolor sit <br /> amet, consectetur <br /> adipiscing elit. Nulla <br /> sollicitudin, eros id <br />tincidunt feugiat, sem <br /> magna tristique nunc,<br /> viverra vehic</Typography><Typography sx={{color:'#fff'}}>Lorem ipsum dolor sit <br /> amet, consectetur <br /> adipiscing elit. Nulla <br /> sollicitudin, eros id <br />tincidunt feugiat, sem <br /> magna tristique nunc,<br /> viverra vehic</Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Footer
