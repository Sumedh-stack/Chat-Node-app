import Head from "next/head"
import { useAuthState } from "react-firebase-hooks/auth";
import  styled from "styled-components"
import ChatScreen from "../../components/ChatScreen";
import Sidebar from "../../components/Sidebar";
import { auth, db } from "../../firebase";
import getRecipientEmail from "../../utils/getRecipientEmail";






//{chat,messages}
// chat={chat} messages={messages}
//{getRecipientEmail(chat.users,user)}
function Chat({chat,messages}) {
   console.log(chat)
  //  console.log(messages)
    const [user]=useAuthState(auth);
    return (
        <Container>
            <Head>
                <title>Chat with</title>
            </Head>
            <Sidebar/>
            <ChatContainer>
                <ChatScreen  chat={chat} messages={messages}/>
            </ChatContainer>
       
        </Container>
    )
}

export default Chat




// console.log(ref);
//console.log(messageRes);
//console.log(messages);
//console.log(chatRes);
export async function getServerSideProps(context){

    const ref=db.collection("chats").doc(context.query.id);
    //console.log(ref)

    //Prep the message on server
    const messageRes=await ref.collection("messages")
    .orderBy("timestamp","asc").get();
 
    const messages=messageRes.docs.map(doc=>(
         {
            id:doc.id,
            ...doc.data(),
         }
      )
    )
    messages.map(messages=>(
        {   
            ...messages,
            timestamp:messages.timestamp.toDate().getTime()
        }
     )
    );
 
    const chatRes=await ref.get();

    const chat={
        id:chatRes.id,
        ...chatRes.data()
    } 

 //console.log(chat);
    return {
        
        props:{
            messages:JSON.stringify(messages),
            chat:chat
        }
        
    }
}

































const Container = styled.div`
display:flex;
`;

const ChatContainer=styled.div`
flex:1;
overflow:scroll;
height:100vh;
::-webkit-scrollbar{
    display:none;
}
-ms-overflow-style:none;
scrollbar-width:none;

`