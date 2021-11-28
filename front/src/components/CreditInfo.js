import React from 'react';
import { useQuery } from "react-apollo";
import { gql } from "apollo-boost";
import '../styles/creditInfo.css';

const CreditCard_Query = gql`
query getCards {
    cards { 
      credit
      color
    }
  }
  `;

const CreditInfo =({credit}) => {
    const { data, loading, error } = useQuery(CreditCard_Query);

        if (loading) return "Loading data please wait...";
        if (error) return <pre>{error.message}</pre>

        const mystyle = {
            color: "white",
           
          };

        return (

          
       
        <div className="container"> 
           {
            
            data.cards.map((card,i) => (
               
                <div className="btnGroup" key={i}>
            <div className="grid-child-btncredit">
                <div href="#" className="round-button" style={{color: card.color, border: "3px solid"}}>
                <font color={card.color}>{card.credit}dt</font>
                </div>
                <br/>
            </div>
           
                    
        </div>
             

            )
            )}
         
            
        </div>
        
        )
}
 
export default CreditInfo;