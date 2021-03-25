import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
import { HeaderContainer } from '../container/header';
import { FooterContainer } from '../container/footer';
import * as ROUTES from '../constants/routes';

const Signup = () => {
    
    const history = useHistory();
    const {firebase} = useContext(FirebaseContext);

    const [firstName,setFirstName]= useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
   
    const isInvalid = firstName ==='' || password === '' || emailAddress === '';

    const handleSignup =(event) =>{
        event.preventDefault();

        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress,password)
            .then((result) =>result.user
                .updateProfile({
                    displayName:firstName,
                    photoURL:Math.floor(Math.random() * 5) + 1,
                }).then(() =>{
                    history.push(ROUTES.BROWSE);
                })
            )
            .catch((error) =>{
                setFirstName('');
                setEmailAddress('');
                setFirstName('');
                setError(error.message);
            }
            )
    }

  return (
      <>
       <HeaderContainer>
           <Form>
           <Form.Title>Sign Up</Form.Title>    
           {error && <Form.Error>{error}</Form.Error>}
           
            <Form.Base onSubmit={handleSignup} method='POST'>
            <Form.Input placeholder="First Name"
             value={firstName}
             onChange={({target}) =>setFirstName(target.value)}   />
            
            <Form.Input placeholder="Email address" 
             value={emailAddress}
             onChange={({target}) =>setEmailAddress(target.value)}/>

            <Form.Input type="password" 
             value={password}
             onChange={({target}) =>setPassword(target.value)}
             autoComplete="off" placeholder="Password"/>
            
            <Form.Submit disabled={isInvalid} type="submit">
                Sign Up
            </Form.Submit>
            
            </Form.Base>
            
            <Form.Text>
            Already a user? <Form.Link to="/signin">Sign in Now</Form.Link>
            </Form.Text>
            <Form.TextSmall>
                This page is protected by Google reCAPTCHA to ensure you're not a bot.
                Learn more. 
            </Form.TextSmall>
            </Form>
       </HeaderContainer>
       <FooterContainer />
       </>
    )
}

export default Signup
