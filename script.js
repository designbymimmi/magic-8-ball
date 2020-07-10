$(document).ready(function() {
var magic8Ball = {};
magic8Ball.listOfAnswers = ["It is certain",
"It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy", "try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];

$("#answer").hide();

magic8Ball.askQuestion = function(question) {
$("#answer").fadeIn(4000);
var randomNumber = Math.random();
var randomNumberArray = randomNumber * this.listOfAnswers.length;
var randomIndex = Math.floor(randomNumberArray);
var randomAnswer = this.listOfAnswers[randomIndex];

$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");

$("#answer").text(randomAnswer);
console.log(question);
console.log(randomAnswer);
};

var clickButton = function() {
	$("#answer").hide();
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
	$("#8ball").effect("shake");
	setTimeout(
		function(){
			var question = prompt("Ask me a YES or NO question!");
	magic8Ball.askQuestion(question);
		}, 500);
};
		$("#questionButton").click(clickButton);
});
