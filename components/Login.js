import { Button } from '@material-ui/core'
import styled from 'styled-components'
import Head from 'next/head'
import { auth, provider } from '../firebase'

function Login() {


    function signIn(){
     auth.signInWithPopup(provider).catch(alert)//will show error as alert message
    }
    return (
    
            <Container>
            <Head>
                <title>  Login  </title>
            </Head>
               <LoginContainer>
                 <Logo src="http://pngimg.com/uploads/whatsapp/small/whatsapp_PNG21.png" />
                 <Button varient ="outlined" onClick={signIn}>Sign In With Google</Button>
               </LoginContainer>
            </Container>
        
    )
}
const Container=styled.div`
display: grid;
place-items: center;
height:100vh;
/*  100% of actual visible screen */
background-color: whitesmoke;

`;
const LoginContainer=styled.div`
border-radius: 5px;
background-color:white;
padding:100px;
box-shadow:0px 4px 14px -3px rgba(0,0,0,0.7);
display:flex;
flex-direction:column;



`;
const Logo=styled.img`
height: 200px;
width: 200px;
margin-bottom: 50px;
`;
export default Login
