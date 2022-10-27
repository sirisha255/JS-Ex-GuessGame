var y = Math.floor(Math.random() * 10 );
 var guess = 3;

 document.getElementById("submitguess").onclick = function(){

    var x= document.getElementById("guessField").value;
    if(x == y)
    {
        alert("Congrats...Your guess is correct " );

    }
    else if(x > y)
    {
        guess++;
        alert("Sorry !! Try smaller number")
    
    }
    else{
        guess++;
        alert("Try a greater number");
    }
 }

