 


function signin(){
    var email=document.getElementById("signin_email").value;
    var password=document.getElementById("signin_password").value;
    var button=document.getElementById("alert").classList;
    var close_button=document.getElementById("close_btn");

    function hide(){
      button.remove("show")
      button.add("hide")
    }
     close_button.onclick=hide
  
   
    var name="Good to See You Again!"
  
   if(!email || !password){
    document.getElementById("alert_message").innerHTML = "No credentials can be Left Empty";
     button.remove("hide")
     button.add("show")
     setTimeout(hide,200);
     
   }else{

    
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then( ()=> {
     
     
        location.replace("home.html");
        localStorage.setItem("name",name);
  
      })
      .catch((error) => {
        document.getElementById("alert_message").innerHTML = "Check Your Email And password";
        button.remove("hide")
        button.add("show")
        setTimeout(hide,200);
      });
    
    }


}
function signup(){
  var email=document.getElementById("signup_email").value;
  var password=document.getElementById("signup_password").value;
  var name=document.getElementById("signup_name").value;
  var button=document.getElementById("alert").classList;
  var close_button=document.getElementById("close_btn");
  function hide(){
    button.remove("show")
    button.add("hide")
  }
   close_button.onclick=hide

  if(!email || !password){
    document.getElementById("alert_message").innerHTML = "No credentials can be Left Empty";
    button.remove("hide")
    button.add("show")
    setTimeout(hide,200);
  }else if(password.length<6){
    document.getElementById("alert_message").innerHTML = "Password must minimum have 6 characters";
    button.remove("hide")
    button.add("show")
    setTimeout(hide,200);
  }
  else{
  
      location.replace("home.html");
 
  

  

}
}