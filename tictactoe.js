var turn = Array("X","0");
var count = 0;
var board = new Object();
$(function() {
    $('input.button').click(function(){
        var this_dom = $(this);
        if(this_dom.attr('value') == " "){
            var this_turn = turn[count%2];
            var that_turn = turn[(count+1)%2];
            count++;
            this_dom.val(this_turn);
            console.log(this_dom.attr('id'));
            board[this_dom.attr('id')] = this_turn;
            $('div#turn').text("It is now " + that_turn + "'s turn");
            checkWin();
        }
    });

    $('input.newgame').click(function(){
        $('input.button').val(" ");
        count=0;

    });
});

function checkWin() {
}
