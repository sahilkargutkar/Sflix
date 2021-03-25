import React from 'react'
import { JumbotronContainer }from '../container/jumbotron'
import {FooterContainer} from '../container/footer'
import {Feature,OptForm} from '../components';
import { FaqsContainer } from '../container/faqs';
import {HeaderContainer} from '../container/header';


const Home = () => {
    return (
        <>
            <HeaderContainer >
                <Feature>
                <Feature.Title>Unlimited movies,TV shows and more.</Feature.Title>
                <Feature.SubTitle>Watch anywhere.Cancel at any time</Feature.SubTitle>
                <OptForm>
                <OptForm.Input placeholder="Email address"/>
                
                <OptForm.Button>Get Started</OptForm.Button>
                <OptForm.Break />
                <OptForm.Text>Ready to watch? Enter your email to create or restart your
                    membership
                </OptForm.Text>
            </OptForm>
                
                </Feature>
            
            </HeaderContainer>
            <JumbotronContainer  />
            <FaqsContainer />
            <FooterContainer />  
            
        </>
    )
}

export default Home
