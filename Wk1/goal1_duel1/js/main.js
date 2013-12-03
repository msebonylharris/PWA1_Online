/*
Name: Ebony L Harris
Date: 12/02/2013
Assignment: Goal 1: Assignment: Duel1
*/

(function(){

	console.log( "FIGHT!!!" );

//>>>>>>>>>>>>>>>>>>>>>>>>>>>PLAYER NAMES		
	private var player1Name = "Spiderman";
	/*In the code above I have created a private variable and named player1Name, I have given 
	my variable a value of "Spiderman", which is a string. I have closed the line with a 
	semi-colon*/
	
	private var player2Name = "Batman";
	/*In the code above I have created a private variable and named player2Name, I have given 
	my variable a value of "Batman", which is a string. I have closed the line with a 
	semi-colon*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>PLAYER DAMAGE
	private var player1Damage = math.round(math.random *10 + 16);
	/*In the code above I have created a private variable and named it player1Damage, I have given
	this variable a value of math.round(math.random *10 + 16), this should give me a random number
	from 1-25. It will also auto-populate so that the winner is always random. I have closed the line with a 
	semi-colon*/
	
	private var player2Damage = math.round(math.random *10 + 11);
	/*In the code above I have created a private variable and named it player1Damage, I have given
	this variable a value of math.round(math.random *10 + 16), this should give me a random number
	from 1-25. It will also auto-populate so that the winner is always random. I have closed the line with a 
	semi-colon*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>PLAYER HEAlTH	
	private var player1Health = 100;
	/* I have created a private variable and called it player1Health, I gave it a number value of
	100. The purpose of the player1Health is so that we can have a starting point for our damage to 
	deduct from I have closed the line with a semi-colon*/
	
	private var player2Health = 100;
	/* I have created a private variable and called it player2Health, I gave it a number value of
	100. The purpose of the player2Health is so that we can have a starting point for our damage to 
	deduct from I have closed the line with a semi-colon*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>ROUNDS PLAYED
	private var round=1; 
	/*I have created a private variable and called it round. I have set a number value of 1. The
	purpose of the variable "round" is give a starting point, so that for each time the fight button
	is pushed, and we go through another loop, we can add on to this and correctly tell which level 
	we are on. I have closed the line with a semi-colon*/
	
/*The following function contains the code that loops through the rounds to reduce the health of each
player*/
	function fight(){};

/*The following function contains the code that determines wether there is a winner at each
round, depending on the outcome a string is returned to tell the outcome of each fight.*/
	function winnerCheck(){};

/*The following function contains the code that determines wether the fight has ended before
the ten rounds have been reached.*/
	fight();
	
} ) ( );

