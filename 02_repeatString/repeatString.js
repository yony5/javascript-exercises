const repeatString = (word, number) => {
    let i =0;
    let result="";

    if(number < 0){
        return "ERROR";
    }
    while(i < number){
          result += word;
          console.log(word);
          i++
      }
        return result;
    };

// Do not edit below this line
module.exports = repeatString;
