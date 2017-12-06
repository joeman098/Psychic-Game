

  // var wins = 0
  // var loses = 0
  // var Guesesleft = 5
  var computerChoices = "abcdefghijklmnopqrstuvwxyz";

  var stats = {
  	wins: 0 , 
  	loses: 0  ,
  	guesesLeft: 5 ,
  	computerpick: "a",
  	guessessofar: [],
  }


    function computerpick(x){
     return x = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }



    stats.computerpick = computerpick(computerpick); 
    console.log(stats.computerpick);


    document.onkeyup = function(event){

	console.log(stats.guesesLeft);

      var userPick = event.key ;
      stats.guessessofar.push(userPick);

    
      	
      

 	 if (stats.guesesLeft > 1) {
        if (userPick === stats.computerpick) {
          stats.wins++
          stats.guesesLeft = 5 ;
          stats.computerpick = computerpick(computerpick);
          stats.guessessofar = [] ;
          
        }

        else{
           stats.guesesLeft --;
             }

      }
    else{
      stats.loses ++;
       stats.guesesLeft = 5 ;
      stats.computerpick = computerpick(computerpick); 
        stats.guessessofar = [] ;
    }

  
      
    


    document.getElementById("computerGuess").innerHTML = stats.guessessofar
    document.getElementById("wins").innerHTML = stats.wins
    document.getElementById("loses").innerHTML = stats.loses
    document.getElementById("guesesleft").innerHTML = stats.guesesLeft
}
      





   








//     document.onkeyup = function(event){

// console.log(guesesleft);

//   var computerChoices = "abcdefghijklmnopqrstuvwxyz";

//       var userPick = event.key ;

//   var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  


//   if (Guesesleft > 0) {
//         if (userPick === computerGuess) {
//           wins++
//         }

//         else{
//            Guesesleft --;
//              }

//       }
//     else{
//       loses ++;
//     }

  
      
    

//     document.getElementById("userPick").innerHTML = userPick
//     document.getElementById("computerGuess").innerHTML = computerGuess
//     document.getElementById("wins").innerHTML = wins
//     document.getElementById("loses").innerHTML = loses
//     document.getElementById("guesesleft").innerHTML = Guesesleft

//       }


