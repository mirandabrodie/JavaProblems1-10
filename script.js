//write first method
function sleepIn(x,y) {
    return x;
}

//write second method
function nextOne(param1, param2) {
    return param1;
}

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleepIn(true, false);
    document.getElementById("output").innerHTML += nextOne(true, false);
    //test third method, etc
}


// This is Sleep In, javascript problem #1.
function sleep_in(weekday, vacation){
    if(weekday === false || vacation === true){
        return true;
    }else{
        return false;
    }
}


// This is Monkey Trouble, javascript problem #2.
function monkey_trouble(a_smile, b_smile){
    if((a_smile === true && b_smile === true) || a_smile === false &&
        b_smile === false){
        return true;
    }else{
        return false;
    }
}


// This is String Times, javascript problem #3.
function string_times(string, n){
    var answer = '';
    for(var i = 0; i < n; i++){
        answer = answer + string;
    }
    return answer;
}


// This is Front Times, javascript problem #4.
function front_times(string, n){
    var answer = '';
    for(var i = 0; i < n; i++){
        answer = answer + string.substring(0, 3);
    }
    return answer;
}


// This is String Bits, javascript problem #5.
function string_bits(string){
    answer = '';
    for(var i = 0; i < string.length - 1; i++){
        if(i % 2 === 0) {
            answer = answer + string[i];
        }
    }
    return answer;
}


// This is Caught Speeding, javascript problem #6.
function caughtSpeeding(speed, birthday) {
    if (birthday === false) {
        if (speed <= 80 && speed >= 61) {
            return 1;
        }
        if (speed <= 60) {
            return 0;
        }
        if (speed >= 81) {
            return 2;
        }
    } else {
        if (speed <= 85 && speed >= 66) {
            return 1;
        }
        if (speed <= 65) {
            return 0;
        }
        if (speed >= 86) {
            return 2;
        }
    }
}


// This is Fizz Buzz, javascript problem #7.
function fizz_buzz(n){
    if(n % 3 === 0 && n % 5 === 0){
        return 'FizzBuzz';
    }
    if(n % 3 === 0){
        return 'Fizz';
    }
    if(n % 5 === 0){
        return 'Buzz';
    }else{
        return n + '!';
    }
}


// This is Tea Party, javascript problem #8.
function teaParty(tea, candy){
    if(tea < 5 || candy < 5){
        return 0;
    }
    if(tea >= 2*candy || candy >= 2*tea){
        return 2;
    }
    if(tea >= 5 && candy >= 5){
        return 1;
    }
}


// This is Blackjack, javascript problem #9.
function blackjack(one, two){
    if(one > two && one <= 21){
        return one;
    }
    if(two > one && two <= 21){
        return two;
    }
    if(one > 21 && two >21){
        return 0;
    }
    if(one > 21){
        return two;
    }
    if(two > 21){
        return one;
    }

}


// This is Lone Sum, javascript problem #10.
function loneSum(a, b, c){
    if(a !== b && b !== c && c !== a){
        sum = a + b + c;
        return sum;
    }else{
        if(a === b && b === c){
            return 0;
        }
        if(a === b){
            return c;
        }
        if(b === c){
            return a;
        }
        if(c === a){
            return b;
        }
    }
}