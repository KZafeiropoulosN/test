import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./header"
//components 

import PageAdd from './components/PageAdd';
import PageHome from './components/PageHome';
import PageCountry from './components/PageCountry';

import './App.css'
import { getApiData } from './api_helpers';

const App = () => {

	// Data
	const [countriesData,setCountriesData] = useState([]);	
	const initialState = { id: null, name: '', capital: '' }

	// Setting state
	const [ countries, setCountries ] = useState(countriesData)
	const [ curCountry, setCurCountry ] = useState(initialState)
  const [ edit, setEdit ] = useState(false)
  
	useEffect(()=>{
    let data = getApiData();
    console.log(data)
    setCountriesData(data);
    setCountries(data);
	},[])
	const editRow = async (country) => {
		setEdit(true)
    setCurCountry(country)
  }
  
  const ifDataChanged = () => {
    let data = getApiData();
    setCountriesData(data);
    setCountries(data);
  }

	return (
	<Router>
		<Header />
    <Route exact path="/add" render={
      (props) => (<PageAdd {...props} curCountry={curCountry} edit={edit} setEdit={setEdit} ifDataChanged={ifDataChanged}/>)} 
    />
    <Route exact path="/country" render={
      (props) => (<PageCountry {...props} countries={countries} editRow={editRow} ifDataChanged={ifDataChanged} />)}
    />
    <Route exact path="/" component={PageHome} />
	</Router>
	)
}
export default App	