//Get our user input
//get user string for the page
//check for a palindrom
//display out message to the screen
function getValue(){
    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    let returnObj = checkforPalindrome(userString);

    displayMessage(returnObj);
}

//Reverse the string
//logic function
//check if string is a palindrome
function checkforPalindrome(userString){
    
    userString = userString.toLowerCase();
    //remove spaces and special characters
    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex,"");

    let revString = [];
    let returnObj = [];

    for (let index = userString.length - 1 ; index >= 0; index--) {
        revString += userString[index];
        
    }
        if (revString == userString){
            returnObj.msg = "Well Done! You entered a Palindrome!"
        }
        else{
            returnObj.msg = "Sorry! You did NOT enter a Palindrome!"
        }

        returnObj.reversed = revString;

        return returnObj;
}




//Display the reversed string to the user
//View Function
function displayMessage(returnObj){

    //write to the page
    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;
    document.getElementById("alert").classList.remove("invisible");
}
