function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    
    if (weight && height) {
      var bmi = weight / ((height / 100) ** 2);
      document.getElementById('result').innerHTML = 'Your BMI is: ' + bmi.toFixed(2);
    } else {
      document.getElementById('result').innerHTML = 'Please enter both weight and height.';
    }
  }
  