import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ExerciseCard = ({exercise}) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt="" loading='lazy' />
        <Stack direction='row'>
            <Button 
                sx={{ml: '21px', color: '#fff', 
                background: '#ffa9a9',fontWeight: 'bold', fontSize: '14px', 
                borderRadius: '20px',textTransform: 'capitalize' }}>
                    {exercise.bodyPart}
            </Button>
            <Button 
                sx={{ml: '21px', color: '#fff', 
                background: '#fcc757',fontWeight: 'bold', fontSize: '14px', 
                borderRadius: '20px',textTransform: 'capitalize' }}>
                    {exercise.target}
            </Button>
        </Stack>
        <Typography 
            ml='21px'
            color='#000'
            fontWeight='bold'
            mt='11px'
            textTransform= 'capitalize'>
                {exercise.name}
        </Typography>
    </Link>
  )
}

export default ExerciseCard