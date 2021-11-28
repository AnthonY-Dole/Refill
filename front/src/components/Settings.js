import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus,faTrash } from '@fortawesome/free-solid-svg-icons'
import Return from './Return';
import '../styles/setting.css';
import Cards from './Cards';
const Settings = () => {
    return (
        
        <div>
            <Return>REFILL</Return>
            
                <div className="grid-container-menu">
                    <div className="grid-child-title">
                    <h1>Operators</h1>
                    <p>Manage yout list of operator</p>
                        </div>
                    <div className="grid-child-btn">
                    <Link className="faPlus-iconadd"  to="/CreateOperator">  
                    <FontAwesomeIcon color="#FA4D53" className="plus-icon"  icon={faPlus} size="lg"/>
                    </Link>
                   
                    </div>
                    
                </div>
                
                <Cards>Update/Delete</Cards>
               

                <div className="grid-container-menu">
                    <div className="grid-child-title">
                    <h1>CLear Cache</h1>
                    <p>CLean up cache history, wallet and operator</p>
                        </div>
                    <div className="grid-child-btn">
                    <Link className="faPlus-iconadd"  to="/CreateOperator">  
                    <FontAwesomeIcon color="#FA4D53" className="plus-icon"  icon={faTrash} size="lg"/>
                    </Link>
                   
                    </div>
                    
                </div>
        </div>
     );
}

export default Settings;