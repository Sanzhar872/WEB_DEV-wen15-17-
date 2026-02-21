const textField = document.getElementById('text-input');
const charCount = document.getElementById('char-count');
const wordCount = document.getElementById('word-count');
const warning = document.getElementById('limit-warning');
const clearButton = document.getElementById('clear-btn');

const MAXCHARS = 200;

/*
1. create function that counts all chars and words

2. listen to textField 

3. listen to clearButton
*/  

const UpdateStats = () => {
    const text = textField.value;

    const textLen = text.length;
    charCount.textContent = `characters: ${textLen}`;

    /* " hello   world "
    trim removes unnecessarry spaces, "hello   world"
    split(/\s+/) converts string to array, ["hello", "world"]
    filter(item => item !== "") just in case array has space
      
    const words = text.trim().split(/\s+/).filter(item => item !== "").length;
    */
   const words = text.match(/\w+/g) ? text.match(/\w+/g).length : 0;
    wordCount.textContent =`words: ${words}`;

    if(textLen > MAXCHARS){
        warning.textContent = `you have exceeded limit of ${MAXCHARS} characters`;
        warning.style = "red";
    }else{
        warning.textContent = "";
    }
}

textField.addEventListener("input", UpdateStats);

clearButton.addEventListener("click", () => {
    textField.value = "";
    UpdateStats();
})




