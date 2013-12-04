/*
Name: Ebony L Harris
Date: 12/02/2013
Assignment: Goal 2: Assignment: Duel2
*/

(function(){
	
	console.log("FIGHT!!!");
		
//>>>>>>>>>>>>>>>>>>>>>>>>>>>PLAYER NAMES		
	//>>>>>>>>>>CHANGED TO AN ARRAY>>>>>>>>>>var player1Name = "Spiderman";
	/*In the code above I have created a variable and named player1Name, I have given 
	my variable a value of "Spiderman", which is a string. I have closed the line with a 
	semi-colon*/
	
	//>>>>>>>>>>CHANGED TO AN ARRAY>>>>>>>>>>var player2Name = "Batman";
	/*In the code above I have created a variable and named player2Name, I have given 
	my variable a value of "Batman", which is a string. I have closed the line with a 
	semi-colon*/
	
//>>>>>>>>>>>>>>>>>>>>>>>>>>>PLAYER DAMAGE
	//>>>>>>>>>>CHANGED TO AN ARRAY>>>>>>>>>>var player1Damage = 20;
	/*In the code above I have created a private variable and named it player1Damage, I have given
	this variable a number value of 20. I have closed the line with a semi-colon*/
	
	//>>>>>>>>>>CHANGED TO AN ARRAY>>>>>>>>>>var player2Damage = 20;
	/*In the code above I have created a variable and named it player1Damage, I have given
	this variable a number value of 20. I have closed the line with a semi-colon*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>PLAYER HEAlTH	
	//>>>>>>>>>>CHANGED TO AN ARRAY>>>>>>>>>>var player1Health = 100;
	/* I have created a variable and called it player1Health, I gave it a number value of
	100. The purpose of the player1Health is so that we can have a starting point for our damage to 
	deduct from I have closed the line with a semi-colon*/
	
	//>>>>>>>>>>CHANGED TO AN ARRAY>>>>>>>>>>var player2Health = 100;
	/* I have created a variable and called it player2Health, I gave it a number value of
	100. The purpose of the player2Health is so that we can have a starting point for our damage to 
	deduct from I have closed the line with a semi-colon*/
	
//>>>>>>>>>>>>>>>>>>>>>>>>>>>PLAYER ARRAYS - CHANGES FROM GOAL 2 DUEL 2

	var player1 = ["Spiderman", 20, 100];
	
	var player2 = ["Batman", 20, 100];

//>>>>>>>>>>>>>>>>>>>>>>>>>>>ROUNDS PLAYED
	var round=0; 
	/*I have created a variable and called it round. I have set a number value of 0. The
	purpose of the variable "round" is give a starting point, so that for each time the fight button
	is pushed, and we go through another loop, we can add on to this and correctly tell which level 
	we are on. I have closed the line with a semi-colon*/
	
	function fight(){
	/*In the code above I am declaring my fight function.*/

		//alert('To the left we have '+player1Name+' and to the right we have '+player2Name);
		/*In the code above I have set up an alert. This should be alert number two. This 
		alert will display in a dialogue box after the first alert. I am displaying the player
		information for the fighters. I know this is not required, but I just wanted to add it.*/
	
//>>>>>>THE ALERT BELOW CONTAINS CHANGES FROM GOAL 2 DUEL 2
		/*In the code below I changed the variable to the array that was set up for each 
		player. I used the [] method to drill down extract information from the array using
		the index numbers. */ 
		alert(player1[0]+":"+player1[2]+" *START* "+player2[0]+":"+player2[2]);
		/*In the code above I have set up an alert. This should be alert number three. This 
		alert will display in a dialogue box after the second alert. I am displaying the player
		information for the fighters, and letting the user know that this starts the round. */
		
		for(var i=0; i<10; i++){
		/*In the code above I am setting up my for loop. In this loop I am passing through 
		a total of three arguments. In my first argument I am declaring the variable (i) 
		and have given it a value of zero(0). In my second argument i am declaring that (i)
		should be lest than 10. In my third argument I am declaring (i++). This equation 
		means that I have set up the variable (i) which represents the amount of instances 
		that occur. I have set the position at 0. I have also declared that (i) has to be less
		than 10, so I am saying that my loop can run only 10 times starting at the index (0).
		I used (i++) to add cycles onto my loop. The loop will continue to cycle until it reaches
		10 times. */
			console.log(i);
			/*In the code above I have performed a console log for the variable(i). This will
			help me keep track of which round we are on.*/
			
//>>>>>>THE LINE OF CODE BELOW CONTAINS CHANGES FROM GOAL 2 DUEL 2
			/*In the code below I changed the variable to the array that was set up for each 
			player. I used the [] method to drill down extract information from the array using
			the index numbers. */ 
			var minDamage1 = (player1[1] * .5);
			/*In the code above I have declared the variable minDamage1 and have given it a value
			that is equal to half of the players Damage. Since the player1Damage is set at 20 the
			minimum damage that can be received is 10.*/

//>>>>>>THE LINE OF CODE BELOW CONTAINS CHANGES FROM GOAL 2 DUEL 2
			/*In the code below I changed the variable to the array that was set up for each 
			player. I used the [] method to drill down extract information from the array using
			the index numbers. */ 
			var minDamage2 = (player2[1] * .5);
			/*In the code above I have declared the variable minDamage2 and have given it a value
			that is equal to half of the players Damage. Since the player1Damage is set at 20 the
			minimum damage that can be received is 10.*/

//>>>>>>THE LINE OF CODE BELOW CONTAINS CHANGES FROM GOAL 2 DUEL 2
			/*In the code below I changed the variable to the array that was set up for each 
			player. I used the [] method to drill down extract information from the array using
			the index numbers. */ 
			var f1 = Math.floor(Math.random()*(player1[1]-minDamage1) + minDamage1);
			/*In the code above I have declared the variable f1, this variable is the formula
			that will calculate the damage that is received at end of a round. I use Math.floor
			and Math.random to get a whole number that can be deducted from the player health.*/

//>>>>>>THE LINE OF CODE BELOW CONTAINS CHANGES FROM GOAL 2 DUEL 2
			/*In the code below I changed the variable to the array that was set up for each 
			player. I used the [] method to drill down extract information from the array using
			the index numbers. */ 
			var f2 = Math.floor(Math.random()*(player2[1]-minDamage2) + minDamage2);
			/*In the code above I have declared the variable f2, this variable is the formula
			that will calculate the damage that is received at end of a round. I use Math.floor
			and Math.random to get a whole number that can be deducted from the player health.*/
		
			//console.log(f1);
			/*In the code above, I am using console.log to track the variable f1. This should
			help me to see if the code above is working correctly.*/
			//console.log(f2);
			/*In the code above, I am using console.log to track the variable f2. This should
			help me to see if the code above is working correctly.*/
			
			player1Health-=f1;
			/*In the code above I am updating player1Health.*/
			player2Health-=f2;
			/*In the code above I am updating player2Health.*/
			
			//console.log(player1Name+":"+player1Health);			
			/*In the code above, I am using console.log to track the player1Name and Player1Health
			This helps me to see if the information is updating correctly*/
			//console.log(player2Name+":"+player2Health);
			/*In the code above, I am using console.log to track the player2Name and Player2Health
			This helps me to see if the information is updating correctly*/
			
//>>>>>>THE LINE OF CODE BELOW CONTAINS CHANGES FROM GOAL 2 DUEL 2
			/*In the code below I changed the variable to the array that was set up for each 
			player. I used the [] method to drill down extract information from the array using
			the index numbers. */ 
			console.log(player1[0]+":"+player1[3]+" *ROUND* "+round+" "+player2[0]+":"+player2[3]);
			/*In the code above, I am preforming a console.log to update the player information
			along with the round information*/
			
			var results = winnerCheck();
			/*In the code above, I am declaring my variable results, which will be equal to 
			winnerCheck(). With this I can use (results) to track the information stored in
			the winnerCheck() function.*/
			console.log(results);
			/*In the code above, I a preforming a console.log to track (results).*/
			
			if (results === "no winner"){
			/*In the code above, I am making an if declaration. I am stating 'if' the results
			is equal to "no winner" that the following things should happen. */
				round++;
			/*In the code above, I am using the (++) to add 1 to the number associated with
			round. The starting number is 0. */
				
				alert(player1Name+":"+player1Health+" *ROUND"+round+" Over* "+player2Name+":"+player2Health);
				/*In the code above, I have set a player alert. This is actually my fourth alert
				and this same alert will keep refreshing until a winner is found.*/
			}else{
			/*In the code above I am making a else declaration. So if the previous information
			is no longer valid then the following code will be used.*/
				alert(results);
			/*In the code above we are making an alert which will open up a dialogue box. This
			will give us the result of the current match.*/
				break;
			/*In the code above I am telling the code to stop going through the loop once the 
			final results are in and we either have a winner or no both players die.. */
			}
		};
	};
	
	function winnerCheck(){
		/*In the code above, I am making my declaration for my winnerCheck() function.*/
		//console.log("in winnerCheck FN");
		/*In the code above, I have performed a console.log check within my winnerCheck()
		function(), this helps me to see that this function is set up properly.*/
		var result="no winner";
		/*In the code above, I have declared my variable result. I have given my variable a
		default value of "no winner"*/
		
		if(player1Health<1 && player2Health<1){
		/*In the code above, I am setting up conditionals for my players. If player 1 and
		player 2 has a health less than 1 the following code is to be executed. */
			result = "You Both Die!!!";
		/*In the code above, this is based on the conditions previously set. If both players
		life goes below 1, the the message "You Both Die!!!" will appear.*/
		}else if(player1Health<1){
		/*In the code above, I am setting up conditionals for my players. If player 1
		health is less than 1 the following code is to be executed. */
			result = player2Name + "Wins!!!";
		/*In the code above, this is based on the conditions previously set. If both 
		player 1's life goes below 1, the the message "Player 2 Wins!!!" will appear.*/
		}else if(player2Health<1){
		/*In the code above, I am setting up conditionals for my players. If player 2
		health is less than 1 the following code is to be executed. */
			result = player1Name + "Wins!!!";
		/*In the code above, this is based on the conditions previously set. If both 
		player 1's life goes below 2, the the message "Player 1 Wins!!!" will appear.*/
		}
		
		return result;
		/*In the code above I am returning results, so when the winnerCheck function is 
		from outside of the function the result will display.*/
	
	};
	
	//alert('LET\'\S GET READY TO RUMBLE!');
		/*In the code above I have set up an alert. This is the first alert that players will see. 
		This alert will be the first alert to display in the dialogue box. I have displayed The words
		"LET'S GET READY TO RUMBLE!" I used the escape(\\) characters so that I can use quotes (')
		within quotes.*/
	fight();
		/*In the code above am calling the function fight. I am initiating it. */

})();

