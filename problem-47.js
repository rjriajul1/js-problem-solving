// problem
// email e akta notification message phata ta hobe 

function sendNotification(email){

    if(!email.includes('@')){
        return "Invalide email";
    }
 
    let splitedEmail = email.split('@');
    let userName = splitedEmail[0];
    let domain = splitedEmail[1];
    let newString = userName + " sent you an email from " + domain;
    return newString;
  

}

const result =sendNotification("rakib.ph@gmail.com");
console.log(result);