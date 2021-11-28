import React, {useState}  from 'react';
import '../styles/cards.css';
import { useQuery,useMutation } from "react-apollo";
import { gql } from "apollo-boost";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'

const Card_Query = gql`
query getCards {
    cards { 
      name
      date
      activationCode
      color
      credit
      id
    }
  }
  `;

  const Card_Delete = gql`
  mutation deleteCard($id: String!) {
    deleteCard(id: $id) {
      id
    
    }
  }
  
`;




const Cards =({children}) => {


    const { data, loading, error } = useQuery(Card_Query);
    const [deleteCard] = useMutation(Card_Delete);
        if (loading) return "Loading data please wait...";
        if (error) return <pre>{error.message}</pre>
        if (!data) return <h3>Sorry,you don't have a card &#128533;</h3>

      
      

        if(children)
        {
          return(
            <div className="container">
                  
            
            {
                
            data.cards.map((card,i) => (
               <div className="content" style={{color: card.color, border: "3px solid"}}  key={i}>
                 <div className="grid-container-data">
                    <div className="grid-child-titledata">
                      <h1 className="title-card" > {card.name}</h1>
                    </div>
                    <div className="grid-child-icon-update">
                    <Link state={{ myId: 'test' }} to="/UpdateOperator">
                    <FontAwesomeIcon color="#FA4D53" className="edit-icon"  icon={faEdit} size="lg"/>
                    </Link>  
                      
                    </div>
                    <div className="grid-child-icon-delete">
                    <button onClick={() => {
                      console.log(card.id);
                       deleteCard({ variables: { id: card.id }
                        
                     });
                     window.location.reload();
    }}>
                      <FontAwesomeIcon color="#FA4D53" className="edit-icon"  icon={faTrash} size="lg"/>
                      </button>
                     
                      

                    </div>
                    </div>
                <br/>
            </div>
            )
            )}  
        </div>
          )
        }
        else{
        return (

        
       
        <div className="container">
                  
            
            {
                
            data.cards.map((card,i) => (
               <div className="content" style={{color: card.color, border: "3px solid"}}  key={i}>
               <h1 className="title-card" > {card.name}</h1>
             <h3 className="date-card"   >{card.date}</h3>
             <h3 className="date-card"   >{card.date}</h3>
             <br/>
           </div>
            )
            )}  
        </div>
        
        )
      }
}
 
export default Cards;