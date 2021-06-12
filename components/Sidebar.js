import { Avatar, Button, IconButton } from '@material-ui/core'//Search material ui design on google 
import React from 'react'
import styled from 'styled-components'
import * as  EmailValidator from "email-validator"
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import SearchIcon from '@material-ui/icons/Search';
import { auth, db } from '../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import Chat from './Chat';

function Sidebar() {

  const [user]=useAuthState(auth);

  const userChatRef=db.collection('chats').where('users','array-contains',user.email);
  const [chatsSnapshot]=useCollection(userChatRef);


 function createChat(){

   const input =prompt('Enter the email id');
     if(!input){
       return null;
     }

     if(EmailValidator.validate(input) && !chatAlreadyexists(input) &&input!==user.email){
        db.collection("chats").add(
          {
            users:[user.email,input],
          }
          );
     }
    }

function chatAlreadyexists(receipentEmail){
 return( !!chatsSnapshot.docs.find(
    (chat)=>
   
      chat.data().users.find((user)=>
      user===receipentEmail)?.length>0
   
    
  
    ))
}


    //  const chatAlreadyexists=(receipentEmail)=>
    //  !!chatsSnapshot?.docs.find(
    //   (chat)=>
    //   chat.data().users.find((user)=>user===receipentEmail)?.length>0
    //   );
    
    return (
   <div>
      <Container>
         <Header>
           <UserAvatar src={user.photoURL}onClick={()=>auth.signOut()}/>
           <IconContainer>
                <IconButton> 
                   <ChatIcon/>
                </IconButton>
                <IconButton>
                   <MoreVertIcon/>
                 </IconButton>
         </IconContainer>
        </Header>
        <Search>
          <SearchIcon/> 
          <SearchInput placeholder="Search in chats"/>
        </Search>
        <SideBarButton onClick={createChat}>START A NEW CHAT</SideBarButton>

        {chatsSnapshot?.docs.map((chat)=>(

          <Chat key={chat.id} users={chat.data().users} id={chat.id} />
        ))}
      </Container>  
   </div>
    )
}
const Container=styled.div`
flex:0.45;
border-right:1px solid whitesmoke;
height:100vh;
min-width:300px;
max-width:350px;
overflow-y:scroll;
::-webkit-scrollbar{
    display:none;
}
-ms-overflow-style:none;
scrollbar-width:none;
`
const Header=styled.div`

display:flex;
align-items:center;
justify-content:space-between;
padding:20px;
top:0;
height:80px;
position:sticky;
border-bottom:1px solid whitesmoke;
z-index: 1;
`
const UserAvatar=styled(Avatar)`
cursor: pointer;
:hover{
    opacity:0.8;
}

`;
const IconContainer=styled.div`


`;
const SearchInput=styled.input`
flex:1;
border:none;
`
const Search=styled.div`
padding:20px;
display: flex;
border-radius: 2px;

`
const SideBarButton=styled(Button)`
width:100%;

&&&{
  border-top: solid 1px whitesmoke;
  border-bottom: solid 1px whitesmoke;
}

`
export default Sidebar
