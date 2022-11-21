var btn=document.querySelector(".btn");

function Check() {
btn.addEventListener('click',usrcheck);
btn.addEventListener('click',Password);



}
 function usrcheck(){
    var username=document.querySelector("#usrname").value;

  if (username[0].toUpperCase() === username[0] && username.length>6) {
  return true;
  }
else{
 document.querySelector(".useralert").innerHTML="Username min 6 elementden ibaret olmali ve ilk herfi boyuk olmalidi!"
}
  }

function Password()
  { console.log("ssssss")
     var password=document.querySelector("#pswrd").value
  var mail=re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if (mail.test(password))
    {
      return (true)
    }
    else
    {alert("email yablisdir!")
    return (false)}
  }
  //islemedi


  
