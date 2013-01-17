var turn = Array("X","0");
var count = 0;
var board = new Object();
var gameOver = false;
$(function() {
    $('input.button').click(function(){
      if(!gameOver){
        var this_dom = $(this);
        if(this_dom.attr('value') == " "){
            var this_turn = turn[count%2];
            var that_turn = turn[(count+1)%2];
            count++;
            this_dom.val(this_turn);
            board[this_dom.attr('id')] = this_turn;
            $('div#turn').text("It is now " + that_turn + "'s turn");
            if(checkWin(this_turn)){
              $('div#turn').text("Game over. " + this_turn + " won");
              gameOver = true;
            }
        }
      }
    });

    $('input.newgame').click(function(){
        $('input.button').val(" ");
        count=0;
        gameOver = false;
    });
});

var winningRows = Array(Array("00","01","02"),Array("00","10","20"),Array("10","11","12"),Array("01","11","21"),Array("20","21","22"),Array("02","12","22"),Array("00","11","22"),Array("20","11","02"));

function checkWin(turn) {
  for(var i = 0; i < winningRows.length; i++){
    var match = true;
    for(var j = 0; j < winningRows[i].length; j++){
      var id = winningRows[i][j];
      
      if(!(board.hasOwnProperty(id) && board[id] == turn)){
        match = false;
      }
    }
    if(match){
      return true;
    }
  }
  return false;
}
