import {Circle} from "better-react-spinkit"

function Loading() {
    return (
        <center style={{display:"grid",height:'100vh', placeItems:"center"}}>
            <div>

             <img src="http://pngimg.com/uploads/whatsapp/small/whatsapp_PNG21.png"
             alt=""
                 height={200}
                 style={{marginBottom:10}}
             />
              <Circle color="Green" size={60}/>

            </div>
        </center>
    )
}

export default Loading
