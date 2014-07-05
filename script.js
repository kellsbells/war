$(document).ready(function() {

	//changes the values higher than 10 to be the face cards
	function convert_value_to_string(value) {
		if (value > 10) {
			switch (value) {
				case 11:
				return 'Jack';
				break;
				case 12:
				return 'Queen';
				break;
				case 13:
				return 'King';
				break;
			}
		}
		return value.toString();
	}

	//assigns 1-13 of each suit
	var deck = [];
	var suits = ['hearts', 'diamonds', 'spades', 'clubs'];
	for (var i = 0; i<suits.length; i++) {
		var suit = suits[i];
		for (var j = 0; j<13; j++) {
			deck.push({number: j+1, suit: suit});
		}
	}
	
	//shuffle the deck
	var newDeck = function shuffle(deck) {
	  var m = deck.length, t, i;

	  // While there remain elements to shuffle…
	  while (m) {

	    // Pick a remaining element…
	    i = Math.floor(Math.random() * m--);

	    // And swap it with the current element.
	    t = deck[m];
	    deck[m] = deck[i];
	    deck[i] = t;
	  }

	  return deck;
	}



	
	
	var cards_player_1 = [];
	var cards_player_2 = [];
	//divide out the cards into the two arrays odds go to player one evens go to player 2
	
	for (var i=0;i<deck.length;i++){
	    if (i%2==0) {
	        cards_player_1.push(deck[i]);
	    }
	    else {
	        cards_player_2.push(deck[i]);
	    }
	}

	console.log(cards_player_2);
	}





	
	//create a function (algorithm) called "war" that takes two cards as parameters, compares them and returns a winner. A tie should return false.
	var card1 = cards_player_1.shift
	var card2 = cards_player_2.shift


	function war(card1, card2) {
	
		if (card1.number > card2.number) {
			return card1;

		}else if (card2.number > card1.number) {
			return cards2

		}else{
			return false;
		}
	}
	
	
	//create a play function
		//compare the cards
		//give the winner both cards (at end of deck)
	var winner = war(card1, card2)

	function play() {


		if (winner === card2) {
			cards_player_2.push(card1, card2);
		} else if (winner === card1) {
			cards_player_1.push(card1, card2);
		}else {
			cards_player_1.push(card1);
			cards_player_2.push(card2);
		}
		}

	
		//this function (defined below) will continue to the next turn
		advance();

		

		//then push the two cards to the winner

		war(card1, card2)
	
	function advance() {
		//take the top two cards and display them
		if (cards_player_1.length) {
			var card_1 = cards_player_1[0];
			var card_2 = cards_player_2[0];
			$("#opp-card").html(convert_value_to_string(card_1.number)+" "+card_1.suit);
			$("#opp-card-count").html(cards_player_1.length);
			$("#my-card").html(convert_value_to_string(card_2.number)+" "+card_2.suit);
			$("#my-card-count").html(cards_player_2.length);
			
		}
	}
	advance();
	
	$(".btn").click(function() {
		play();
	});
});