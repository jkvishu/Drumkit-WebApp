//⭐️⭐️⭐️⭐️⭐️Detecting Button or drum press by mouse⭐️⭐️⭐️⭐️⭐️

// ⭐️Explanation of the below code 👇
// ✅actually here we are traversing from i=0 to the number of elements that have commom class name as "drum" and each time we are traversing we are adding an addEventListener to each of the html element which have the class "Drum"
//Now this addEventListener has two parameters the first parameter justify the type of event here the type is click event therfore if any user click on any of the html element which is here the button because it has class named as "Drum" than it will trigger the function which is the second parameter and it is linked to the addEventListener now this function can placed along with the code without the name of the function otherwise the name of the function can also be placed and it can be defined outside. Than it will be called as soon as it get triggered by the click event
//now when this function executes after getting triggered it stores the information or identity of the html element which has been clicked with the help of "this" keyword and with the help of this keyword we have get the information of the innerHTML of the html element and stored it in a variable with name mouseclick now we have send the data of mouseclick through a function call named as hitme which will send the value of mouseclick to the defination of the hitme function where we have created a switch statements to see what was the innerHTML of the element that has been clicked and act accordingly therefore according to the value one of the case is selected and hence now we create a variable named with audio which can be any name xyz it will store the html element with the data that we have specified ahead, means that this line of code new Audio creates an html audio element which have several methods and properties and one of them is play which actually plays an audio file hence after new Audio we have placed the url of the file which we want to play. now all of these information is stored in the variable which we have created with the name audio,now using that variable that holds the copy of html audio element along with the url we call the method play() to play the audio file whose url we have specified. And that's how we give sound to our drums when they got clicked.
//NOTE:-> here we have placed . before drum because it is a class selector
for (var i = 0; i < document.querySelectorAll(".drum").length; i++)
{
  // document.querySelectorAll(".drum")[i].addEventListener("click", hitme); //more accurate
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var mouseclick=this.innerHTML;
    hitme(mouseclick);
    animationToButton(mouseclick);
  });
}

//⭐️⭐️⭐️⭐️⭐️Detecting keyboard press⭐️⭐️⭐️⭐️⭐️
//Now this is the another method to make our drums make sound
//In this method we have added the addEventListener to the whole document where the first parameter here is the type of the event that we want our document to react or listen which is a "keypress" now this event is used to detect keys pressed on the keyboard and we have to react according to the key which has pressed ,now to figure out which key has been pressed we can use something called as "event" which is used to see which event has occured and it has all properties related to that event and one of the property which will be useful for us is the "key".It tells about what key has been pressed by the user and we can check for that key by passing it in the hitme function in which our switch statements are present and according to the key pressed the sound will be produced and we know how all that done as we have mentioned above in our first method.
document.addEventListener("keypress",function(event){
  hitme(event.key);
  animationToButton(event.key);
});


//Common function which will be triggered by both of the addEventListener to play sound.
function hitme(clicked) {
  switch (clicked) {
    case 'w':
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case 'a':
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case 's':
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case 'd':
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case 'j':
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case 'k':
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case 'l':
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    default:
      console.log(clicked);

  }
}

// adding animation to our drum buttons
//This function will also receive the same key that hitme function is receiving hence we will use the key to add css property to the button and than remove it with a time delay so that if gives a feel of animation
function animationToButton(receive)
{
  if(receive==='w'||receive==='a'||receive==='s'||receive==='d'||receive==='j'||receive==='k'||receive==='l')
  {
  var hld=document.querySelector("."+receive);
  hld.classList.add("anime"); //this is how we can add class selector to an html element using js dom.
  setTimeout(function(){ //this function creates a time delay for the execution of the another function.
  hld.classList.remove("anime");},100);
  }
}

//We can use if else statements also instead of switch they are correct but we want to try new concept in our code hence we are using switch in js to do the same task.
// function hitme()
// {
//   if(this.innerHTML=='w')
//   {
//     var audio=new Audio('sounds/tom-1.mp3');
//   }
//   else if(this.innerHTML=='a')
//   {
//     var audio=new Audio('sounds/tom-2.mp3');
//   }
//   else if(this.innerHTML=='s')
//   {
// var audio=new Audio('sounds/tom-3.mp3');
//   }
//   else if(this.innerHTML=='d')
//   {
// var audio=new Audio('sounds/tom-4.mp3');
//   }
//   else if(this.innerHTML=='j')
//   {
// var audio=new Audio('sounds/crash.mp3');
//   }
//   else if(this.innerHTML=='k')
//   {
// var audio=new Audio('sounds/kick-bass.mp3');
//   }
//   else
//   {
// var audio=new Audio('sounds/snare.mp3');
//   }
//     audio.play();
// }

//for line no: 8
// for (var i = 0; i <7; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click",function(){alert("Hello i am clicked");});
// Another method of doing the same thing that we have done below}
//We can write the specific line for each one also but we want our code to be short and clear


// var audio=new Audio('sounds/tom-1.mp3');
// audio.play();
// console.log(this); this line of code show the identity of the html element on the console screen
