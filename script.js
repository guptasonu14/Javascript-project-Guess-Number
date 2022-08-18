'use strict'


console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent='💥 Correct Number!'

// document.querySelector('.score').textContent=10;

// document.querySelector('.number').textContent=10;

// document.querySelector('.guess').value=12;
//write difference between queryselector and queryselectorAll 

////////////////////

// Event listner
// 4:1 note point

// const x= function(){
//     console.log(20);
// }

// function gives value because it is an expression thats why we are passing this value in  addEventListener as a arguement 

// execute phle ho jata hai function ,par bad me javascript call krta hai function ko jab bhi hum click event karte hain

// math yhan pe object hai,aur bahut sare iske method hai jo hum use karengen

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore =0;

const display=function(message){
    document.querySelector('.message').textContent= message;
}



document.querySelector('.check').addEventListener('click',function(){
    // console.log(document.querySelector('.guess').value);

    //    const guess =document.querySelector('.guess').value;

//    console.log(guess);

   // jo bhi user input deta hai,wo hamesha as string leta hai 

//    console.log(typeof guess);

   // convert string into number as
   const guess =Number(document.querySelector('.guess').value)
//    console.log(guess,typeof guess); 


 
// when there is no input

   if(!guess){
    // document.querySelector('.message').textContent='No number ⛔'
    display('No number ⛔');

   }

   // when player win
   else if(guess==secretNumber){
    // document.querySelector('.message').textContent='correct Number' 

    display('correct Number 👍');

    document.querySelector('.number').textContent=secretNumber;

    // jo bhi style lgate hain wo inline set hota hai

    // style jo bhi value leta hai wo string me le ta hai 

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width='30rem';
     
   if(score>highscore){
    highscore=score;
    document.querySelector('.highscore').textContent= highscore;
   }
   

 


   }
   else if(guess!==secretNumber){

    if(score>1){
                // document.querySelector('.message').textContent= guess>secretNumber ? 'too high!': 'too low'

                display('Too Low');
            score--;
            document.querySelector('.score').textContent=score;
            }
           else{
            // document.querySelector('.message').textContent=' 💥You lost the Game';

            display(' 💥You lost the Game')


            document.querySelector('.score').textContent=0;
        
           }

   }
   // when goes too high

//    else if(guess> secretNumber){

//     if(score>1){
//         document.querySelector('.message').textContent='too high!'
//     score--;
//     document.querySelector('.score').textContent=score;
//     }
//    else{
//     document.querySelector('.message').textContent=' 💥You lost the Game';
//     document.querySelector('.score').textContent=0;

//    }
   

//    }
//    //when goes too low

//    else{

//     if(score>1){

//         document.querySelector('.message').textContent='too low!'
//         score--;
//         document.querySelector('.score').textContent=score;
//     }
//     else{
//         document.querySelector('.message').textContent=' 💥You lost the Game';
//         document.querySelector('.score').textContent=0;

//     }

    
//    }
   
});

document.querySelector('.again').addEventListener('click',function(){
    secretNumber = Math.trunc(Math.random()*20)+1;


    document.querySelector('.score').textContent='20';
    
    document.querySelector('.number').textContent='?';

    document.querySelector('.guess').textContent='';

    // document.querySelector('.message').textContent='Start guessing...';

    display('Start guessing...');

    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width='15rem';

})

