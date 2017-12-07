  var computerChoices = "abcdefghijklmnopqrstuvwxyz";

  var stats = {
  	wins: 0 , 
  	loses: 0  ,
  	guesesLeft: 5 ,
  	computerpick: "a",
  	guessessofar: [],
  }

  var difficulty = 5 ;
  var lose = new Audio("assets/images/loseeffect.mp4");
  var wrong = new Audio("assets/images/wong.mp3");
  var win = new Audio("assets/images/win.mp3");
  var textdifficulty = "hard";



   $(document).ready(function() {
    document.getElementById("diff").innerHTML = textdifficulty ;
    
      $(".easyButton").on("click", function() {
        if(stats.guesesLeft == difficulty){
        stats.guesesLeft = 20;
        difficulty = 20 ;
        textdifficulty = "easy";
        document.getElementById("guesesleft").innerHTML = stats.guesesLeft ;
        document.getElementById("diff").innerHTML = textdifficulty ;
      }
      else{
        alert("stop cheating wait till new game to change difficulty")
      }
      });


       $(".medButton").on("click", function() {
        if(stats.guesesLeft == difficulty){
        stats.guesesLeft = 10;
        difficulty = 10 ;
         textdifficulty = "medium";
        document.getElementById("guesesleft").innerHTML = stats.guesesLeft ;
         document.getElementById("diff").innerHTML = textdifficulty ;
      }
      else{
        alert("stop cheating wait till new game to change difficulty")
       
      }
      });


        $(".hardButton").on("click", function() {
          if(stats.guesesLeft == difficulty){
        stats.guesesLeft = 5;
        difficulty = 5 ;
         textdifficulty = "hard";
        document.getElementById("guesesleft").innerHTML = stats.guesesLeft ;
        document.getElementById("diff").innerHTML = textdifficulty ;
      }
      else{
        alert("stop cheating wait till new game to change difficulty")
      }
      });
    
    });


    function computerpick(x){
     return x = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }



    stats.computerpick = computerpick(computerpick); 
    console.log(stats.computerpick);


    document.onkeyup = function(event){

	console.log(stats.guesesLeft);

      var userpick = event.key ;
      var userPick = userpick.toLowerCase();
      stats.guessessofar.push(userPick);

    if(computerChoices.includes(userPick)){
      	 document.getElementById("winning").style.visibility = "hidden";
      

 	 if (stats.guesesLeft > 1) {
        if (userPick === stats.computerpick) {
          stats.wins++
          stats.guesesLeft = difficulty ;
          stats.computerpick = computerpick(computerpick);
          stats.guessessofar = [] ;
          win.play();
          document.getElementById("winning").style.visibility = "visible";
          
        }

        else{
           stats.guesesLeft --;
           wrong.play();
             }

      }
    else{
      stats.loses ++;
       stats.guesesLeft = difficulty ;
      stats.computerpick = computerpick(computerpick); 
        stats.guessessofar = [] ;
        lose.play();
    }
    document.getElementById("computerGuess").innerHTML = stats.guessessofar
    document.getElementById("wins").innerHTML = stats.wins
    document.getElementById("loses").innerHTML = stats.loses
    document.getElementById("guesesleft").innerHTML = stats.guesesLeft
  }

   else{
    alert("Not valid input");
  }    
    


    


}
      





   







