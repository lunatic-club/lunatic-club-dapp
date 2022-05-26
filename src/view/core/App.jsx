import React, {useEffect} from 'react'
import {ThemeProvider, createTheme} from '@mui/material/styles'
import Router from './Router'
import Store from './Store'
import {useEagerConnect} from '../hooks/useEagerConnect'
import BgVideo from '../components/BgVideo'
import './app.css'

const theme = createTheme()

export default function App() {
  useEagerConnect()

  useEffect(() => {
    setTimeout(() => {
      const elem = document.querySelector('.fp-watermark')

      if(elem) {
        elem.remove()
      }
    }, 1000)
  })

  return (
    <Store>
      <ThemeProvider theme={theme}>
        <Router/>
        <BgVideo />
      </ThemeProvider>
    </Store>
  )
}
