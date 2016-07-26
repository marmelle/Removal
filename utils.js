var y = 'INC';
var x = 'DROP';

function processGrade (grade){
    
    if (grade < 70 ){
        console.log("There is no grade like that.");
    }
    else if (grade > 70){
        console.log("Grade is overkill");
    }
    else if (grade == y ){
        console.log("Your grade is incomplete.");
    }
    else if (grade == x ) {
        console.log("You have drop the subject.");
    }
    else if (grade < 75){

        if(grade % 2){  //odd
    console.log("Your new grade is :" + (grade -3));
    }
         else {
      console.log("Your new grade is :" + (grade -2));   
    }
  }
 
}


module.exports = {
    processTheGrade:processGrade
}