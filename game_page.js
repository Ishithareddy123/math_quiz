
question_turn="player1";
answer_turn="player2";
var player1_name=localStorage.getItem("player1_name");
var player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+" :";
document.getElementById("player2_name").innerHTML=player2_name+" :";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="question turn - "+player1_name;
document.getElementById("player_ans").innerHTML="Answer turn - "+player2_name;
function send(){
    num1=document.getElementById("num1").value;
    num2=document.getElementById("num2").value;
    document.getElementById("output").innerHTML="<h1>Question : </h1>"+num1+"x"+num2+"<br>"+"<input placeholder='answer' id='input_ans'>"+"<br>"+"<button onclick='check()'>Check</button>";
    document.getElementById("num1").innerHTML="";
    document.getElementById("num2").innerHTML="";
}
function check(){
    ans_check=document.getElementById("input_ans").value;
    if(ans_check==(num1*num2)){
        if(answer_turn=="player1"){
            player1_score+=1;
            console.log("player1_score"+player1_score);
            document.getElementById("player1_score").innerHTML=player1_score;
          
        }
        if(answer_turn=="player2"){
            player2_score+=1;
            console.log("player2_score"+player2_score);
            document.getElementById("player2_score").innerHTML=player2_score;
           
        }
    }
    if(answer_turn=="player1"){
        answer_turn=="player2"
              document.getElementById("player_ans").innerHTML="answer turn: "+player2_name;
    }
    else{
        answer_turn=="player1";
        document.getElementById("player_ans").innerHTML="answer turn: "+player1_name;   
    }
    if(question_turn=="player1"){
        question_turn=="player2"
              document.getElementById("player_question").innerHTML="question turn: "+player2_name;
    }
    else{
        question_turn=="player1";
        document.getElementById("player_question").innerHTML="question turn: "+player1_name;   
    }
    document.getElementById("output").innerHTML="";
}


