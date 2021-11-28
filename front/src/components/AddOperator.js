import React from 'react';
import Cards from './Cards';
import { Formik, Field, Form } from 'formik';
import Return from './Return';
import { Link } from "react-router-dom";
import '../styles/addoperator.css';
const AddOperator =() => {
  
    return (  
    <div> 
         <Return>Save</Return>
         
        <Formik
      initialValues={{
        valueCode: '',
        
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
       
       
        <div className="form">      
        <Field id="valueCode" className="input" name="valueCode" placeholder="Value" />
     
    </div>
    
      </Form>
    </Formik>
    <br/>
    <Link className="nav-link" to="/Camera">  
    <Cards />
      
    </Link>
    </div> 
    );
}

export default AddOperator;