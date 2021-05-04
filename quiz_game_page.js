player1 = localStorage.getItem("player1");
player2 = localStorage.getItem("player2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1 + ":";
document.getElementById("player2_name").innerHTML = player2 + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "question turn -" + player1;
document.getElementById("player_answer").innerHTML = "answer turn -" + player2;

function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    console.log(actual_answer);

    char1 = actual_answer.charAt(1);
    console.log(char1);

    divide2 = Math.floor(actual_answer.length / 2);
    char2 = actual_answer.charAt(divide2);
    console.log(char2);

    
    number1 = actual_answer.replace(char1, " ");
    number2 = number1.replace(char2, " ");
    console.log(number2);

    question = "<h4>" + number1 + "X"+ number2 +"</h4>";
    inputbox = "<br><br>Answer : <input type='text' id='input_ans'>";
    button = "<br><br><button class='btn btn-info' onclick='check()'>check</button>";
    row = question + inputbox + button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

var question_turn = "player1";
var answer_turn = "player2";

function check() {
var when_answer = document.getElementById("input_ans").value;
console.log(when_answer);

if (answer == number) {
    if (answer_turn == "player1") {
        player1_score = player1_score + 1;
        document.getElementById("player1_score").innerHTML = player1_score;

    } else {
        player2_score = player2_score + 1;
        document.getElementById("player2_score").innerHTML = player2_score;

    }
    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "question turn -"+player2;

    } else {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML ="question turn -"+ player1;

    }
    if (answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML ="answer turn -"+ player2;

    } else {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML ="answer turn -"+ player1;

    }
}
document.getElementById("output").innerHTML ="";
}



