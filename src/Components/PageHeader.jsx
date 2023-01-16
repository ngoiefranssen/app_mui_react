import { Card, Paper, Typography } from '@mui/material'
import { spacing } from '@mui/system'
import React from 'react'


const PageHeader = (props) => {
  
  // const classes = useStyles()
  const { title, subtitle, icon} = props

  return (
    <Paper elevation={0} square sx={{ backgroundColor:'#fdfdff' }}>
    <div sx={{ padding: spacing(4), display:'flex', marginButtom:spacing(3)}}>
        <Card sx={{
                    display:'inline-block',
                    padding:spacing(2),
                    color:'#3c44b1'
                }}>
            {icon}
        </Card>
        <div sx={{
                    paddingLeft:spacing(4),
                    '& .MuiTypography-subtitle2': {
                    opacity: '0.6',
                    },
                }}
        >
            <Typography variant='h6' component='div'>
                {title}
            </Typography>
            <Typography variant='subtitle2' component='div'>
                {subtitle}
            </Typography>
        </div>
    </div>
</Paper>
  )
}

export default PageHeader