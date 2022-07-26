let drumButtons = document.querySelectorAll(".drum").length
 // addEventlistener --> is used to execute a javaScript function under a certain condition


 // Button Click using Mouse
 for (let i = 0; i < drumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){ ;

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    })
 }

 // KeyBoard Buttons
document.addEventListener("keypress", function(event){
   makeSound(event.key);
   buttonAnimation(event.key)
   // console.log(event);
})

function makeSound(key){

   switch(key){
      case 'w':
         let audio = new Audio("./sounds/tom-1.mp3");
         audio.play();
        break;

      case 'a':
         let tom2 = new Audio("./sounds/tom-2.mp3");
         tom2.play();
        break;

      case 's':
         let tom3 = new Audio("./sounds/tom-3.mp3");
         tom3.play();
        break;

      case 'd':
         let tom4 = new Audio("./sounds/tom-4.mp3");
         tom4.play();
        break;  
      
      case 'j':
         let kickBass = new Audio("./sounds/snare.mp3");
         kickBass.play();
        break;
        
      case 'k':
         let crash  = new Audio("./sounds/crash.mp3");
         crash.play();
         break;
      case 'l':
         let snare = new Audio("./sounds/snare.mp3")
         snare.play();
         break;
         
      // default:
      //    alert("sound Doesn't Exist");   
}}

function buttonAnimation(key){

   let activeButton = document.querySelector("." + key);

   activeButton.classList.add("pressed");
   
   setTimeout( function(){
      activeButton.classList.remove("pressed");}
     , 100); 
   
     // The setTimeout function executes the function after a certain amount of time (in milliseconds) 
   
     //  the 2nd Parameter is in Milliseconds

   
   }

      


