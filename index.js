let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20
let highscore = 0



document.querySelector(".c").addEventListener("click", function () {
  const guess = Number(document.querySelector(".num").value);
  console.log(guess);
  console.log(secretNumber);
  console.log(guess === secretNumber);

  if (!guess) {
    //document.querySelector(".ys").textContent = "No Number!";
    alert("No Number Selected");


  } else if (guess === secretNumber) { 
    document.querySelector(".ys").innerHTML = "🥳 Hurray !...Correct";
    document.querySelector(".q").textContent = secretNumber;
    document.getElementById('.bod').style.backgroundColor = '#60b347';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.high').textContent = highscore;
    }

    
    

    //
    //
    //
  
  } else if (guess > secretNumber) {
    if (score > 1 )  {
    document.querySelector(".ys").innerHTML = " 👆Too High";
    score--;
    document.querySelector('.sc').innerHTML=score;
    } else {
      document.querySelector('.ys').innerHTML = " 😒you lost";
      document.querySelector('.sc').innerHTML = 0 ;
    }
    //
    //
    //
  }else if (guess < secretNumber) {
    if (score > 1)   {
    document.querySelector(".ys").innerHTML = " 👇Too low";
    score--;
    document.querySelector('.sc').innerHTML=score;
    } else {
      document.querySelector('.ys').innerHTML = " 😒you lost";
      document.querySelector('.sc').textContent = 0 ;
    }
   
  }
  

});


document.querySelector('.again').addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1; 

  document.querySelector(".ys").innerHTML= '🤔 Start guessing...';    
  document.querySelector(".sc").innerHTML = score;
  document.querySelector(".q").innerHTML = '?';
  document.querySelector(".num").value = '';

});

