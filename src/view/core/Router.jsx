import React from 'react'
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import Grid from '@mui/material/Grid'
import Home from '../home'
import styles from './styles'

const Router = props => {
  const classes = styles()

  return (
    <div className={classes.root}>
      <BrowserRouter>
        <Grid
          container
          justify='space-between'
          direction='column'
          className={classes.pageContainer}
        >
          <div className={classes.bodyContainer}>
            <Routes>
              <Route exact strict path='/' element={<Home />} />
            </Routes>
          </div>
        </Grid>
      </BrowserRouter>
    </div>
  )
}

export default Router
