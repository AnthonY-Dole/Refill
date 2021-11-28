import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import { faCog,faBolt,faPlus } from '@fortawesome/free-solid-svg-icons'
import Cards from './Cards';
import '../styles/wallet.css';
import CreditInfo from './CreditInfo';





class Wallet extends React.Component {

    render() {

        
        return( 
            
        <div>
            <div className="navbar">
                <h1 className="title">REFILL</h1>
                <h2 className="title2">My Wallet</h2>
                <h3 className="credit">0dt</h3>
                <Link className="nav-link"  to="/Settings">  
                <FontAwesomeIcon className="settings-icon" icon={faCog} size="lg"/>
                </Link>
            </div>


            <CreditInfo/>
                <h1 style={{margin: "20px"}}>3 Cards</h1>
                <Cards />
            
           

                <div className="grid-container-element">
                    <div className="grid-child-element">
                    
                    <Link className="gofast-bolt" to="/AddOperator">  
                    <FontAwesomeIcon color="#FA4D53" className="bolt-icon" icon={faBolt} size="lg"/>
                    </Link>  
                   
                        </div>
                    <div className="grid-child-element2">
                    <Link className="gofast-plus" state={{from: 'cards'}} to="/AddOperator">
                    <FontAwesomeIcon color="#FA4D53" className="plus-icon" icon={faPlus} size="lg"/>
                    </Link>  
                    </div>
                </div>


                </div>
                
      
        );
    }
}
 
export default Wallet;