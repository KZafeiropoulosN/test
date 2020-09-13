import React, { Fragment } from 'react';
import EditCountryForm from './EditCountryForm';
import AddCountryForm from './AddCountryForm';

const PageAdd = (props) => {
  return (
    <div className="flex-row">
      <div className="flex-large classleft">
        {props.edit ? (
          <Fragment>
            <h2>Edit</h2>
            <EditCountryForm
              setEdit={props.setEdit}
              curCountry={props.curCountry}
            />
          </Fragment>
        ) : (
        <Fragment>
          <h2>Fill the brackets</h2>
          <AddCountryForm ifDataChanged={props.ifDataChanged} />
        </Fragment>
        )}
      </div>
    </div>
  )
}

export default PageAdd;