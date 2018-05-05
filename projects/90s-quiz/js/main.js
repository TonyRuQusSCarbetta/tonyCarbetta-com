//onclick function
function checkAnswers() {

  //store user's indivudual answers into varialbes
  //store correct answers into indivudual variables
  var userAnswer0 = document.getElementById('formControlSelect0').value;
  var correctAnswer0 = 'Cory & Topanga';

  var userAnswer1 = document.getElementById('formControlSelect1').value;
  var correctAnswer1 = 'Michael Jordan';

  var userAnswer2 = document.getElementById('formControlSelect2').value;
  var correctAnswer2 = 'Waterfalls';

  var userAnswer3 = document.getElementById('formControlSelect3').value;
  var correctAnswer3 = 'Rugrats';

  var userAnswer4 = document.getElementById('formControlSelect4').value;
  var correctAnswer4 = 'Death Row';

  var userAnswer5 = document.getElementById('formControlSelect5').value;
  var correctAnswer5 = 'Blow on it';

  var userAnswer6 = document.getElementById('formControlSelect6').value;
  var correctAnswer6 = '1991';

  var userAnswer7 = document.getElementById('formControlSelect7').value;
  var correctAnswer7 = 'Bob Dole';

  var userAnswer8 = document.getElementById('formControlSelect8').value;
  var correctAnswer8 = 'All the Above';

  var userAnswer9 = document.getElementById('formControlSelect9').value;
  var correctAnswer9 = 'NSYNC';

  var userAnswer10 = document.getElementById('formControlSelect10').value;
  var correctAnswer10 = 'I spend most of my days';

  var userAnswer11 = document.getElementById('formControlSelect11').value;
  var correctAnswer11 = 'TRL';

  //make a zero number variable for number of correct & incorrect numbers to start at
  var correct = 0;
  var incorrect = 0;

  //check if each answer is equal to each user answer
  //if correct add 1 to correct variable & change backgroundColor to green;
  //if incorrect add 1 to incorrect variable & change backgroundColor to red;

  if (userAnswer0 == correctAnswer0) {
    console.log('correct');
    correct++;
    var boyMeetsWorld = document.getElementsByClassName("boy-meets-world")[0];
    boyMeetsWorld.style.backgroundColor = "rgb(52, 193, 79, .9)";
    var right = document.getElementById('wrong0');
    right.innerHTML = '<h5 class="text-center animated infinite pulse pt-1">CORRECT</h2>'
  } else {
    console.log('incorrect');
    incorrect++;
    var boyMeetsWorldRed = document.getElementsByClassName("incorrect")[0];
    boyMeetsWorldRed.style.backgroundColor = "rgb(255, 38, 38, .9)";
    var wrong = document.getElementById('wrong0');
    wrong.innerHTML = '<h5 class="text-center animated infinite pulse pt-1">INCORRECT</h2>'
}


  if (userAnswer1 == correctAnswer1) {
    console.log('correct');
    correct++;
    var spacejam = document.getElementsByClassName('spacejam')[0];
    spacejam.style.backgroundColor = "rgb(52, 193, 79, .9)";
    var right = document.getElementById('wrong1');
    right.innerHTML = '<h5 class="text-center animated infinite pulse pt-1">CORRECT</h2>'
  } else {
    console.log('incorrect');
    incorrect++;
    var spacejam = document.getElementsByClassName('incorrect')[1];
    spacejam.style.backgroundColor = "rgb(255, 38, 38, .9)";
    var wrong = document.getElementById('wrong1');
    wrong.innerHTML = '<h5 class="text-center animated infinite pulse pt-1">INCORRECT</h2>'
  }

  if (userAnswer2 == correctAnswer2) {
    console.log('correct');
    correct++;
    var tlc = document.getElementsByClassName('tlc')[0];
    tlc.style.backgroundColor = "rgb(52, 193, 79, .9)";
    var right = document.getElementById('wrong2');
    right.innerHTML = '<h5 class="text-center animated infinite pulse pt-1">CORRECT</h2>'
  } else {
    console.log('incorrect');
    incorrect++;
    var tlc = document.getElementsByClassName('incorrect')[2];
    tlc.style.backgroundColor = "rgb(255, 38, 38, .9)";
    var wrong = document.getElementById('wrong2');
    wrong.innerHTML = '<h5 class="text-center animated infinite pulse pt-1">INCORRECT</h2>'
  }
  if (userAnswer3 == correctAnswer3) {
    console.log('correct');
    correct++;
    var rugrats = document.getElementsByClassName('rugrats')[0];
    rugrats.style.backgroundColor = "rgb(52, 193, 79, .9)";
    var right = document.getElementById('wrong3');
    right.innerHTML = '<h5 class="text-center animated infinite pulse pt-1">CORRECT</h2>'
  } else {
    console.log('incorrect');
    incorrect++;
    var rugrats = document.getElementsByClassName('incorrect')[3];
    rugrats.style.backgroundColor = "rgb(255, 38, 38, .9)";
    var wrong = document.getElementById('wrong3');
    wrong.innerHTML = '<h5 class="text-center animated infinite pulse pt-1">INCORRECT</h2>'
  }

  if (userAnswer4 == correctAnswer4) {
    console.log('correct');
    correct++;
    var deathRow = document.getElementsByClassName('deathRow')[0];
    deathRow.style.backgroundColor = "rgb(52, 193, 79, .9)";
    var right = document.getElementById('wrong4');
    right.innerHTML = '<h5 class="text-center animated infinite pulse pt-1">CORRECT</h2>'
  } else {
    console.log('incorrect');
    incorrect++;
    var deathRow = document.getElementsByClassName('incorrect')[4];
    deathRow.style.backgroundColor = "rgb(255, 38, 38, .9)";
    var wrong = document.getElementById('wrong4');
    wrong.innerHTML = '<h5 class="text-center animated infinite pulse pt-1">INCORRECT</h2>'
  }

  if (userAnswer5 == correctAnswer5) {
    console.log('correct');
    correct++;
    var nintendo = document.getElementsByClassName('nintendo')[0];
    nintendo.style.backgroundColor = "rgb(52, 193, 79, .9)";
    var right = document.getElementById('wrong5');
    right.innerHTML = '<h5 class="text-center animated infinite pulse pt-1">CORRECT</h2>'
  } else {
    console.log('incorrect');
    incorrect++;
    var nintendo = document.getElementsByClassName('incorrect')[5];
    nintendo.style.backgroundColor = "rgb(255, 38, 38, .9)";
    var wrong = document.getElementById('wrong5');
    wrong.innerHTML = '<h5 class="text-center animated infinite pulse pt-1">INCORRECT</h2>'
  }

  if (userAnswer6 == correctAnswer6) {
    console.log('correct');
    correct++;
    var aol = document.getElementsByClassName('aol')[0];
    aol.style.backgroundColor = "rgb(52, 193, 79, .9)";
    var right = document.getElementById('wrong6');
    right.innerHTML = '<h5 class="text-center animated infinite pulse pt-1">CORRECT</h2>'
  } else {
    console.log('incorrect');
    incorrect++;
    var aol = document.getElementsByClassName('incorrect')[6];
    aol.style.backgroundColor = "rgb(255, 38, 38, .9)";
    var wrong = document.getElementById('wrong6');
    wrong.innerHTML = '<h5 class="text-center animated infinite pulse pt-1">INCORRECT</h2>'
  }
  if (userAnswer7 == correctAnswer7) {
    console.log('correct');
    correct++;
    var billClinton = document.getElementsByClassName('bill-clinton')[0];
    billClinton.style.backgroundColor = "rgb(52, 193, 79, .9)";
    var right = document.getElementById('wrong7');
    right.innerHTML = '<h5 class="text-center animated infinite pulse pt-1">CORRECT</h2>'
  } else {
    console.log('incorrect');
    incorrect++;
    var billClinton = document.getElementsByClassName('incorrect')[7];
    billClinton.style.backgroundColor = "rgb(255, 38, 38, .9)";
    var wrong = document.getElementById('wrong7');
    wrong.innerHTML = '<h5 class="text-center animated infinite pulse pt-1">INCORRECT</h2>'
  }

  if (userAnswer8 == correctAnswer8) {
    console.log('correct');
    correct++;
    var tech = document.getElementsByClassName('tech')[0];
    tech.style.backgroundColor = "rgb(52, 193, 79, .9)";
    var right = document.getElementById('wrong8');
    right.innerHTML = '<h5 class="text-center animated infinite pulse pt-1">CORRECT</h2>'
  } else {
    console.log('incorrect');
    incorrect++;
    var tech = document.getElementsByClassName('incorrect')[8];
    tech.style.backgroundColor = "rgb(255, 38, 38, .9)";
    var wrong = document.getElementById('wrong8');
    wrong.innerHTML = '<h5 class="text-center animated infinite pulse pt-1">INCORRECT</h2>'
  }

  if (userAnswer9 == correctAnswer9) {
    console.log('correct');
    correct++;
    var nsync = document.getElementsByClassName('nsync')[0];
    nsync.style.backgroundColor = "rgb(52, 193, 79, .9)";
    var right = document.getElementById('wrong9');
    right.innerHTML = '<h5 class="text-center animated infinite pulse pt-1">CORRECT</h2>'
  } else {
    console.log('incorrect');
    incorrect++;
    var nsync = document.getElementsByClassName('incorrect')[9];
    nsync.style.backgroundColor = "rgb(255, 38, 38, .9)";
    var wrong = document.getElementById('wrong9');
    wrong.innerHTML = '<h5 class="text-center animated infinite pulse pt-1">INCORRECT</h2>'
  }

  if (userAnswer10 == correctAnswer10) {
    console.log('correct');
    correct++;
    var freshPrince = document.getElementsByClassName('fresh-prince')[0];
    freshPrince.style.backgroundColor = "rgb(52, 193, 79, .9)";
    var right = document.getElementById('wrong10');
    right.innerHTML = '<h5 class="text-center animated infinite pulse pt-1">CORRECT</h2>'
  } else {
    console.log('incorrect');
    incorrect++;
    var freshPrince = document.getElementsByClassName('incorrect')[10];
    freshPrince.style.backgroundColor = "rgb(255, 38, 38, .9)";
    var wrong = document.getElementById('wrong10');
    wrong.innerHTML = '<h5 class="text-center animated infinite pulse pt-1">INCORRECT</h2>'
  }
  if (userAnswer11 == correctAnswer11) {
    console.log('correct');
    correct++;
    var trl = document.getElementsByClassName('trl')[0];
    trl.style.backgroundColor = "rgb(52, 193, 79, .9)";
    var right = document.getElementById('wrong11');
    right.innerHTML = '<h5 class="text-center animated infinite pulse pt-1">CORRECT</h2>'
  } else {
    console.log('incorrect');
    incorrect++;
    var trl = document.getElementsByClassName('incorrect')[11];
    trl.style.backgroundColor = "rgb(255, 38, 38, .9)";
    var wrong = document.getElementById('wrong11');
    wrong.innerHTML = '<h5 class="text-center animated infinite pulse pt-1">INCORRECT</h2>'
  }

//check to see if it's working
  console.log(`You answered ${correct} correct.`);
  console.log(`You answered ${incorrect} incorrect.`);


//create a scoreboard of correct vs incorrect
  var scoreBoard1 = document.getElementById('scoreBoard1');
  var scoreBoard2 = document.getElementById('scoreBoard2');
  var scoreTextCorrect = scoreBoard1.textContent = `You got ${correct} Correct!`;
  var scoreTextIncorrect = scoreBoard2.textContent = `You got ${incorrect} Incorrect!`;
  var h1 = document.getElementsByTagName('h1')[0];
  document.body.scrollIntoView(true);
  scoreBoard1.className = 'animated infinite tada bg-green text-center mt-3  p-5 d-block mx-auto';
  scoreBoard2.className = 'animated infinite tada bg-red  text-center mt-3 p-5  d-block  mx-auto';

  if (correct >= 10) {
    var scoreBoard3 = document.getElementById('scoreBoard3');
    var scoreBoard3Text = scoreBoard3.textContent = "You're all that & a bag of chips! You know the 90's well. Crack open a Surge soda and watch O.J. Simpson get away with murder, you earned it!"
    scoreBoard3.className = 'animated rotateIn bg-info  text-center mt-3 p-5  d-block  mx-auto';
  } else {
    var scoreBoard3 = document.getElementById('scoreBoard3');
    var scoreBoard3Text = scoreBoard3.textContent = "Ugh, as if... You don't know the 90's at all! You are worse than Rodney King getting beaten by the LAPD & Bill Clinton's affair with Monica Lewinski.. Try again."
    scoreBoard3.className = 'animated rotateIn bg-info  text-center mt-3 p-5  d-block  mx-auto w-100';
  }

}
