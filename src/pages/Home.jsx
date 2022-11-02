import { Box } from '@mui/material'
import React from 'react'
import { Exercise, HeroBanner, SearchExercise } from '../components'

const Home = () => {
  return (
    <Box>
      <HeroBanner/>
      <SearchExercise/>
      <Exercise/>
    </Box>
  )
}

export default Home