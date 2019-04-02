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
}] // end questions object

var labels = ["first", "second", "third", "forth"];

// click to start then display quesions
var startGame = $("#start-btn").on('click', function() {
$(this).parent().hide();
$('.container').show();
countdown(30);
questionDisplay();
});

// function for displaying questions
var questionDisplay = function() {
$(".questions :not('#sub-but')").empty();
// loops through the 10 questions 
for (var j = 0; j < 6; j++) {
$('.questions').prepend('<div class="' + questions[j].name + '"></div>');
$(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
// loops through answers for each radio button
for (var i = 0; i <= 3; i++) {
    $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
}
$('.questions').prepend('<hr />');
}
}


// function for countdown timer
var countdown = function(seconds) {

var timer = setInterval(function() {
seconds = seconds - 1;
$("#time-remain").html(seconds);

if (seconds <= 0) {
    $('.container').fadeOut(500);
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

    // loop through correctArray & radioName to match html elements & answers
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
    // display wrongAnswers
    $('#wrongTimesUp').append(wrongAnswers);
    $('#timesUp').fadeIn(1000).show();

    // alert("Times Up!");
    clearInterval(timer);
    return;
}
}, 1000);

// click event for submit button to stop timer
$('#sub-but').on('click', function() {
clearInterval(timer);
})
}; // end countdown


// function to grade quiz once submit button is clicked
var gradeQuiz = $('#sub-but').on('click', function() {

var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;

// loop through correctArray & radioName to match html elements & answers
for (var i = 0; i < 6; i++) {

if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

    correctAnswers++;
} else {
    wrongAnswers++;
};
};

// once submit is clicked...
// tests
// stop timer
countdown();
// fade out questions
$('.container').fadeOut(500);
// show answerScreen
$('#answerScreen').show();
// display correctAnswers
$('#correctScreen').append(correctAnswers);
// display wrongAnswers
$('#wrongScreen').append(wrongAnswers);

}); 
