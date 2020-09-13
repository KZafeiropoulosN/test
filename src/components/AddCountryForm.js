import React, { Fragment, useState } from 'react'
import { addCountry } from '../api_helpers'
import Button from "@material-ui/core/Button";

const AddCountryForm = (props) => {
	const initialState = { }
	const [ country, setCountry ] = useState(initialState)
	const handleInputChange = e => {
		try{
		const { name, value } = e.target
		setCountry({ ...country, [name]: value })
		}catch(err) {
			console.log(err);
			alert("Error");
		}
	}
	const handleOnSubmit = e => {
		e.preventDefault()
		try{
			if (!country.name || !country.capital) {
				alert("Invalid Input");
			}
			else {
				addCountry(country)
        setCountry(initialState)
        props.ifDataChanged()
				window.location="/country"
			}
		}catch (err) {
			console.log(err);
		}
	}
	return (
		<Fragment>
		<form
			onSubmit={handleOnSubmit}	
		>
			<label className="text-center mt-5" for="countries">Countries</label>
			<input type="text" 
			name="name" 
			className="form-control" 
			value={country.name} 
			onChange={handleInputChange} />
			
				<label for="capitals">Capitals</label>
				<input type="text" name="capital" value={country.capital} onChange={handleInputChange} />
			
			<p>
				<Button className="btn btn-success">Add</Button>
			</p>
		</form>
		</Fragment>
	)
}
export default AddCountryForm;