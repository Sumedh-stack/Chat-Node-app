


/**********************************GOOD CODING********************************
 const getRecipientEmail=(users,userLoggedIn)=>
  users?.filter((userToFilter) => userToFilter!==userLoggedIn?.email)[0];
**********************************GOOD CODING*********************************/


/************************************UNDERSTANDING ******************************** */


          //users?.filter(userfilter) => object
          //users?.filter(userfilter)[0] => string
           //  userToFilter!==userLoggedIn?.email =>boolean true/false

//console.log(users?.filter(userfilter));

    function  getRecipientEmail(users,userLoggedIn){
      //  console.log(users?.filter(userfilter));
                return users?.filter(userfilter)[0];

                 function userfilter(userToFilter){
                         return userToFilter!==userLoggedIn?.email;
                 }
    
    }
 /************************************UNDERSTANDING ******************************** */   
    
    export default getRecipientEmail;