import React from 'react'

import Routes from './Routes'
import Footer from './components/Footer'
import './scss/styles.scss'
const devUrl = 'http://localhost:3000'
const prodUrl = 'https://tindev-dev-deploy.herokuapp.com/'
const prod = process.env.NODE_ENV === 'production'
export const url = prod ? prodUrl : devUrl

const App = () => (
  <>
    <Routes />
    <Footer />
  </>
)

export default App
