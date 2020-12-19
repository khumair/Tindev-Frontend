<<<<<<< HEAD
import React from "react";
import "./scss/main.scss";
import CompanyProfile from "./components/companyProfile";
import CompanyMatchPage from "./components/companyMatchPage";

const App = () => (
  <>
    <CompanyProfile />
    {/* <CompanyMatchPage /> */}
  </>
);
=======
import React from 'react'

import Routes from './Routes'

import './scss/styles.scss'
import Footer from './components/Footer'
>>>>>>> cc0984374fb0b99af135e0ab4ff895026772324b

const App = () => (
	<>
		<Routes />
		<Footer />
	</>
)

export default App
