function add_user(){
    window.location="game_page.html";
    player1_name=document.getElementById("quizer1_name").value;
    player2_name=document.getElementById("quizer2_name").value;
    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);
}
