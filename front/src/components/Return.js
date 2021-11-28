import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import '../styles/return.css';

const Return = ({children}) =>{
    return ( 
            <div className="grid-container-navbar">
                 <div className="grid-child-return">
                    <Link className="faArrow-iconarrow"  to="/">  
                        <FontAwesomeIcon color="#FA4D53" className="arrow-icon"  icon={faArrowLeft} size="lg"/>
                    </Link>
                 </div>
                <div className="grid-child-Title">
                    <h1>{children}</h1>
                </div>
               
    </div> );
}

export default Return;