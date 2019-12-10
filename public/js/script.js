
// var colorPicker = new iro.ColorPicker("#color-picker-container", {
//   // Set the size of the color picker
//   width: 320,
//   // Set the initial color to pure red
//   color: "#f00"
// });

var questions =[
	'To live long and prosper',
	'To enjoy good food and beverages',
	'To be free from fear, pain, and danger',
	'To have sexual companionship',
	'To live comfortably and be successful',
	'To have a loved onces to care and protect',
  'To receive social approval and membership',
]
var totalCount = questions.length;
var questionsLeft = questions;
var hasStarted = false;
var userInputs = {}
var selectedColor = null;
var lastRespondedQuestion = null;

function changeFont(element, name) {
    element.style.fontFamily = name;
}

function newQuestion() {
  hasStarted = true;
  if (selectedColor != null && lastRespondedQuestion != null){
    userInputs[lastRespondedQuestion] = selectedColor;
    selectedColor = null;
  }
  if (questionsLeft.length == 0) {
      var xhttp = new XMLHttpRequest();
      xhttp.open("POST", "/submit", true);
      xhttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
      xhttp.send(JSON.stringify(userInputs));
      // TODO: Close window properly
      alert('Thank you!');
      var win = window.open("about:blank", "_self");
      win.close();
      return false;
  }

  let header = document.querySelector('.original-header');
  header.innerText = '';
  var randomNumber = Math.floor(Math.random()*(questionsLeft.length));
  document.getElementById('qDisplay').innerHTML = questionsLeft[randomNumber];
  lastRespondedQuestion = questionsLeft[randomNumber];
  questionsLeft.splice(randomNumber, 1);;

  document.getElementById('myButton').textContent='Please select a color to continue';
  document.getElementById('myButton').disabled = true;

}

var colorPicker = new iro.ColorPicker(".colorPicker", {
  width: 350,
  color: "rgb(255, 255, 255)",
  borderWidth: 3,
  borderColor: "#000",
  handleSvg: '#handle',
  handleOrigin: {x: -8, y: -20},
  handleRadius: 8,
  padding:6,
  sliderMargin: 12,

  // layout: [
  //    {component:iro.ui.Slider,
  //    options: {
  //     sliderType: 'hue'
  //    }
  //   }
  // ]

});


var values = document.getElementById("values");

// https://iro.js.org/guide.html#color-change
colorPicker.on("color:change", function(color){
  if (hasStarted) {
    if (questionsLeft.length == 0) {
      document.getElementById('myButton').textContent='Complete';
      document.getElementById('myButton').disabled = false;
    }
    else {
      var count = totalCount - questionsLeft.length;
      document.getElementById('myButton').textContent=  count + '/' + totalCount +'  '+ 'Next ';
      document.getElementById('myButton').disabled = false;
    }

    selectedColor = color.hexString;
  }
    // Show the current color in different formats
  // Using the selected color: https://iro.js.org/guide.html#Using-the-Selected-Color
  main_div = document.getElementById('main');
  main_div.parentNode.style.backgroundColor = color.hexString;
  // values.innerHTML = [
  //   "hex: " + color.hexString,
  //   "rgb: " + color.rgbString,
  //   "hsl: " + color.hslString
  // ].join("<br>");
});
