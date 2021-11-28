import React from 'react';
import { Link } from "react-router-dom";
import { Formik, Field, Form } from 'formik';
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";


import '../styles/formOperator.css';

const Create_Card = gql`
mutation createCard($input: CardInput!) {
  createCard(input: $input) {
    id
    name
    date
    activationCode
    color
    credit
  }
}
`;


const Update_Card = gql`
mutation updateCard($input: CardInput!,$id:String!) {
	updateCard(input: $input, id :$id) {
	  name
	  date
	  activationCode
	  color
	  credit
	  id
	}
  }
`;


const FormOperator =({children}) => {


	if(children)
	{
        return (
        <div>
            <Mutation mutation={Create_Card}>
  {createCard => (

      <Formik
          initialValues={{
            name: '',
            date: new Date().toLocaleDateString(),
            activationCode: "",
            color:"",
            credit:'0'}}
            
          onSubmit={async (input) => {
            console.log(input);
            input.activationCode = parseInt(input.activationCode,10);
            try {
              const response = await createCard({
                variables: {
                  input
                 
                }
                
              });
              alert(JSON.stringify("Card create", null, 2));
              console.log(response);
			  window.location.reload();
            } catch (err) {
              alert(JSON.stringify("Oups someting went wrong", null, 2));
              console.log(err)
            }
          }}
          >


    {({ handleSubmit }) => ( 

<Form onSubmit={handleSubmit}>
	<div className="grid-container-formcreate">
		<div className="grid-child-input">
			<div className="form">
				<Field  id="name" name="name" className="input" placeholder="Name" />
			</div>
		</div>
		<div className="grid-child-inputbis">
			<div className="form">
				<Field  id="activationCode" type="number"  name="activationCode" className="input" placeholder="Activation code" />
			</div>
		</div>
	</div>
	<div role="group" aria-labelledby="my-radio-group" className="grid-container">
		<label className="orange">
			<Field type="radio" className="color" name="color" value="#F76621"/>
			<div className="button">
				<span></span>
			</div>
		</label>
		<label className="red">
			<Field type="radio"  className="color" name="color" value="#F2555A"/>
			<div className="layer"></div>
			<div className="button">
				<span></span>
			</div>
		</label>
		<label className="blue">
			<Field type="radio"  className="color" name="color" value="#2477B1"/>
			<div className="layer"></div>
			<div className="button">
				<span></span>
			</div>
		</label>
		<label className="teal">
			<Field type="radio" className="color"  name="color" value="#3EE0A8"/>
			<div className="layer"></div>
			<div className="button">
				<span></span>
			</div>
		</label>
		<label className="yellow">
			<Field type="radio" className="color"  name="color" value="#DEAE0E"/>
			<div className="layer"></div>
			<div className="button">
				<span></span>
			</div>
		</label>
		<label className="black">
			<Field type="radio"  className="color" name="color" value="#000000"/>
			<div className="layer"></div>
			<div className="button">
				<span></span>
			</div>
		</label>
		<label className="pink">
			<Field type="radio"  className="color" name="color" value="#BC06DD"/>
			<div className="layer"></div>
			<div className="button">
				<span></span>
			</div>
		</label>
		<div className="grid-item"></div>
		<div className="grid-item"></div>
		<label className="green">
			<Field type="radio"  className="color" name="color" value="#24B12F"/>
			<div className="layer"></div>
			<div className="button">
				<span></span>
			</div>
		</label>
		<label className="purple">
			<Field type="radio"  className="color" name="color" value="#93568A"/>
			<div className="layer"></div>
			<div className="button">
				<span></span>
			</div>
		</label>
		<label className="cyan">
			<Field type="radio"  className="color" name="color" value="#06ABDD"/>
			<div className="layer"></div>
			<div className="button">
				<span></span>
			</div>
		</label>
	</div>
	<div className="grid-child-input">
		<button className="apply-btn" type="submit">Apply</button>
		<Link  className="apply-link" state={{from: 'cards'}} to="/Settings"></Link>
	</div>
</Form> )}
</Formik> 
  )}
</Mutation>


</div>)}
else
{
	return (
		<div>
            <Mutation mutation={Update_Card}>
  {updateCard => (
	  	
      <Formik
          initialValues={{
			  
            name: '',
            date: new Date().toLocaleDateString(),
            activationCode: "",
            color:"",
            credit:'0'}}
            
			
          onSubmit={async (input) => {
            console.log(input);
            input.activationCode = parseInt(input.activationCode,10);
            try {
              const response = await updateCard({
                variables: {
                  input,
                 id:"id card by props"
                }
                
              });
              alert(JSON.stringify("Card Updated", null, 2));
              console.log(response);
			  window.location.reload();
            } catch (err) {
              alert(JSON.stringify("Oups someting went wrong", null, 2));
              console.log(err)
            }
          }}
          >


    {({ handleSubmit }) => ( 

<Form onSubmit={handleSubmit}>
	<div className="grid-container-formcreate">
		<div className="grid-child-input">
			<div className="form">
				<Field  id="name" name="name" className="input" placeholder="Name" />
			</div>
		</div>
		<div className="grid-child-inputbis">
			<div className="form">
				<Field  id="activationCode" type="number"  name="activationCode" className="input" placeholder="Activation code" />
			</div>
		</div>
	</div>
	<div role="group" aria-labelledby="my-radio-group" className="grid-container">
		<label className="orange">
			<Field type="radio" className="color" name="color" value="#F76621"/>
			<div className="button">
				<span></span>
			</div>
		</label>
		<label className="red">
			<Field type="radio"  className="color" name="color" value="#F2555A"/>
			<div className="layer"></div>
			<div className="button">
				<span></span>
			</div>
		</label>
		<label className="blue">
			<Field type="radio"  className="color" name="color" value="#2477B1"/>
			<div className="layer"></div>
			<div className="button">
				<span></span>
			</div>
		</label>
		<label className="teal">
			<Field type="radio" className="color"  name="color" value="#3EE0A8"/>
			<div className="layer"></div>
			<div className="button">
				<span></span>
			</div>
		</label>
		<label className="yellow">
			<Field type="radio" className="color"  name="color" value="#DEAE0E"/>
			<div className="layer"></div>
			<div className="button">
				<span></span>
			</div>
		</label>
		<label className="black">
			<Field type="radio"  className="color" name="color" value="#000000"/>
			<div className="layer"></div>
			<div className="button">
				<span></span>
			</div>
		</label>
		<label className="pink">
			<Field type="radio"  className="color" name="color" value="#BC06DD"/>
			<div className="layer"></div>
			<div className="button">
				<span></span>
			</div>
		</label>
		<div className="grid-item"></div>
		<div className="grid-item"></div>
		<label className="green">
			<Field type="radio"  className="color" name="color" value="#24B12F"/>
			<div className="layer"></div>
			<div className="button">
				<span></span>
			</div>
		</label>
		<label className="purple">
			<Field type="radio"  className="color" name="color" value="#93568A"/>
			<div className="layer"></div>
			<div className="button">
				<span></span>
			</div>
		</label>
		<label className="cyan">
			<Field type="radio"  className="color" name="color" value="#06ABDD"/>
			<div className="layer"></div>
			<div className="button">
				<span></span>
			</div>
		</label>
	</div>
	<div className="grid-child-input">
		<button className="apply-btn" type="submit">Apply</button>
		<Link  className="apply-link" state={{from: 'cards'}} to="/Settings"></Link>
	</div>
</Form> )}
</Formik> 
  )}
</Mutation>


</div>
	)
}
    
}

export default FormOperator;
