
const socket= new WebSocket("ws://localhost:1880/ws/emotiv-headset");
socket.addEventListener('open', function (event) {
    socket.send('Hello Server!');
});
socket.addEventListener("message",function(Event){
    if (Event.data ==="right50") {

        console.log("[open] Connection established");
    }
});


function animatedForm (){

    const arrows =document.querySelectorAll(".fa-arrow-down");// TO GET ALL THE ARROWS//
      arrows.forEach(arrow =>{

        arrow.addEventListener("click",() =>{
          const input=arrow.previousElementSibling;//  TO GET THE CURRENT INPUT//
          const parent=arrow.parentNode;// to get the current div class//
          const nextForm=parent.nextElementSibling;
        // TO GET THE NEXT CLASS DIV FOR THE PAREN DIV//
           if (input.type==="text" && validateUser(input)){
               
                nextSlide(parent,nextForm);
           }else if(input.type==="email" && validateEmail(input)){
                nextSlide(parent,nextForm);

           }else if(input.type==="password" && validateUser(input)){
               nextSlide(parent,nextForm);
           }else if(input.type==="password" && validateUser(input)){
                nextSlide(parent,nextForm);}
                else{
                    parent.style.animation="shake 0.5s ease";
                }
                parent.addEventListener("animationend",()=>{
                    parent.style.animation="";
                })
        });

      });
    
}
function validateUser(user){
    if(user.value.length<6){
        console.log("not enough characters");
        error("rgb(189,87,87)");
    }else{
        error("rgb(87,189,130)");
        return true;
    }
}
function validateEmail(email){
    if(isEmail(email.value)){
        error("rgb(87,189,130)");
        return true;
    }
    else{
        error("rgb(189,87,87)");
    }
}


function nextSlide (parent,nextForm){

    parent.classList.add("innactive");
    parent.classList.remove("active");
    nextForm.classList.add("active") ;


}
function error(color){
    document.body.style.backgroundColor= color;
}


animatedForm();
function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}