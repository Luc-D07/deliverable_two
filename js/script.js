var vacationType = prompt ("What would be your ideal vacation, musical, tropical, or adventurous?");
var groupSize = prompt ("How many people are in your group?");

function userInput (vacationType) { 
   
var modeTravel;
var Destination;
 if (vacationType == "musical") {
    Destination = ("New Orleans!");
 } 
 else if (vacationType == "tropical") {
     Destination = ("a beach in Mexico!");
 } 
 else if (vacationType == "adventurous") {
    Destination = ("the Grand Canyon to whitewater raft!");
 }
else  {
    Destination =("Please select a type.");
}
if (groupSize == "") {
    modeTravel = ("Please input mode of travel");
} 
else if (2< groupSize <6 )  {
    modeTravel = ("travel in a helicopter.");
} 
else if (groupSize <= 2); {
    modeTravel= ("travel first-class.");
} 
if (groupSize >=6) {
    modeTravel = ("travel in a charter plane.");
} 
 result = ("Because you want to go on a/an " + vacationType + " vacation, you'll be going to " + Destination + "  The number of people in your group is " + groupSize + " and you would " + modeTravel )  

 console.log(result); 
}

