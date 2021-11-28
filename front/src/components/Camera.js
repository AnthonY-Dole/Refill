import React from 'react';
import Return from './Return';
import { Formik, Field, Form } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import '../styles/camera.css';

const Camera =() => {
    return ( 
        <div>
     <Return>Camera</Return>
     <br/>
     <br/>
    <Formik
      initialValues={{
        scratchCode: '',
        
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
       <Form>
      <div className="grid-container-form">
        
                    <div className="grid-child-input-camera">
                            
                        <Field  id="scratchCode" name="scratchCode" className="inputcamera" placeholder="Scatch code" />
                     
                        </div>
                    <div className="grid-child-button">
                    <Link className="nav-link" to="/">  
                    <button type="submit">
                    
                        <FontAwesomeIcon color="#FA4D53" className="arrow-icon"  icon={faArrowRight} size="lg"/>
                      </button> 
                      </Link>
                    </div>
                </div>
      </Form>
    </Formik>
  </div>
     );
}

export default Camera;