/*
Name: Ebony L Harris
Date: 12/02/2013
Assignment: Goal 1: Assignment: Duel1
*/

(function(){
	
	console.log("FIGHT!!!");
	
//>>>>>>>>>>>>>>>>>>>>>>>>>>>PLAYER NAMES		
	var player1Name = "Spiderman";
	/*In the code above I have created a variable and named player1Name, I have given 
	my variable a value of "Spiderman", which is a string. I have closed the line with a 
	semi-colon*/
	
	var player2Name = "Batman";
	/*In the code above I have created a variable and named player2Name, I have given 
	my variable a value of "Batman", which is a string. I have closed the line with a 
	semi-colon*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>PLAYER DAMAGE
	var player1Damage = 20;
	/*In the code above I have created a private variable and named it player1Damage, I have given
	this variable a number value of 20. I have closed the line with a semi-colon*/
	
	var player2Damage = 20;
	/*In the code above I have created a variable and named it player1Damage, I have given
	this variable a number value of 20. I have closed the line with a semi-colon*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>PLAYER HEAlTH	
	var player1Health = 100;
	/* I have created a variable and called it player1Health, I gave it a number value of
	100. The purpose of the player1Health is so that we can have a starting point for our damage to 
	deduct from I have closed the line with a semi-colon*/
	
	var player2Health = 100;
	/* I have created a variable and called it player2Health, I gave it a number value of
	100. The purpose of the player2Health is so that we can have a starting point for our damage to 
	deduct from I have closed the line with a semi-colon*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>ROUNDS PLAYED
	var round=0; 
	/*I have created a variable and called it round. I have set a number value of 0. The
	purpose of the variable "round" is give a starting point, so that for each time the fight button
	is pushed, and we go through another loop, we can add on to this and correctly tell which level 
	we are on. I have closed the line with a semi-colon*/
	
	function fight(){
		console.log('in the fight function');
		
		alert(player1Name+":"+player1Health+" *START* "+player2Name+":"+player2Health);

		
		for(var i=0; i<10; i++){
			console.log(i);
			
			var minDamage1 = (player1Damage * .5);
			var minDamage2 = (player2Damage * .5);
			var f1 = Math.floor(Math.random()*(player1Damage-minDamage1) + minDamage1);
			var f2 = Math.floor(Math.random()*(player2Damage-minDamage2) + minDamage2);
		
			//console.log(f1);
			//console.log(f2);
			
			player1Health-=f1;
			player2Health-=f2;
			
			console.log(player1Name+":"+player1Health);			
			console.log(player2Name+":"+player2Health);			
		};
	};
	
	function winnerCheck(){
		//code will go here
	};
	
	console.log('program starts');
	fight();

})();

