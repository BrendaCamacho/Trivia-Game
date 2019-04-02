var questions = [{
    ques: "What gender is Pusheen?",
    ans: ["male", "female","I D K", "I D K"],
    name: "gender",
    correct: "female",
    divClass: ".gender"
},
{
    ques: "Where does Pusheen live?",
    ans: ["Arizona", "Stray", "On a couch", "In a house"],
    name: "live",
    correct: "In a house",
    divClass: ".live"
},
{
    ques: "When is Pusheen birthday?",
    ans: ["I D K", "January-June", "July-December", "I D K"],
    name: "birthday",
    correct: "January-June",
    divClass: ".birthday"
},
{
    ques: "Does Pusheen have a sister?",
    ans: ["No", "Yes", "Maybe", "I D K"],
    name: "sister",
    correct: "Yes",
    divClass: ".sister"
},
{
    ques: "What is Pusheen's favorite things to do? ",
    ans: ["Spending time with family", "blogging and sleeping", "Sleeping and eating","Doing exercise"],
    name: "hobbie",
    correct: "blogging and sleeping",
    divClass: ".hobbie"
},
{
    ques: "What is her best feature?",
    ans: ["Cuteness", "Her tail and fatness", "Her toe beans", "Hew paws"],
    name: "feature",
    correct: "Her toe beans",
    divClass: ".feature"
}]

var labels = ["first", "second", "third", "forth"];


var startGame = $("#start-btn").on('click', function() {
$(this).parent().hide();
$('.container').show();
countdown(30);
questionDisplay();
});


var questionDisplay = function() {
$(".questions :not('#sub-but')").empty();

for (var j = 0; j < 6; j++) {
$('.questions').prepend('<div class="' + questions[j].name + '"></div>');
$(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');

for (var i = 0; i <= 3; i++) {
    $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
}
$('.questions').prepend('<hr />');
}
}



var countdown = function(seconds) {

var timer = setInterval(function() {
seconds = seconds - 1;
$("#time-remain").html(seconds);

if (seconds <= 0) {
    $('.container').fadeOut(500);
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

   
    for (var i = 0; i < 6; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
            console.log("this is correct! number:" + i)
        } else {
            wrongAnswers++;
            console.log("this is wrong! number:" + i)
        };
    }
    $('#correctTimesUp').append(correctAnswers);
    
    $('#wrongTimesUp').append(wrongAnswers);
    $('#timesUp').fadeIn(1000).show();

   
    clearInterval(timer);
    return;
}
}, 1000);


$('#sub-but').on('click', function() {
clearInterval(timer);
})
}; 



var gradeQuiz = $('#sub-but').on('click', function() {

var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;


for (var i = 0; i < 6; i++) {

if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

    correctAnswers++;
} else {
    wrongAnswers++;
};
};


countdown();

$('.container').fadeOut(500);

$('#answerScreen').show();

$('#correctScreen').append(correctAnswers);

$('#wrongScreen').append(wrongAnswers);

}); 
