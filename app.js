function checkForPalindrome(){
    var input = document.getElementById("palindrome-input");
    var output = document.getElementById("palindrome-output");
    var removeCharacters = input.value.replace(/[^A-Z0-9]/ig,"").toLowerCase();

    var palindrome = removeCharacters.split('').reverse().join('');

    if(removeCharacters === palindrome){
        output.innerHTML = input.value + " is a palindrome!";
        input.value = " ";
    }else{
        output.innerHTML = input.value +  " is not a palindrome!";
        input.value = " ";
    }
}