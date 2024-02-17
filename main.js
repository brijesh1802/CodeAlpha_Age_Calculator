var date = document.getElementById('dob');
var currentDate = new Date();
currentDate.setFullYear(currentDate.getFullYear() - 1);
var formattedDate = currentDate.toISOString().split('T')[0];
date.max = formattedDate;

function calAge() {
  var getAge = document.getElementById('getage');
  getAge.textContent = '';

  var dobValue = date.value;

  if (!dobValue) {
    getAge.textContent = 'Please select your date of birth.'.fontcolor("red");
    return;
  }

  var dobDate = new Date(dobValue);

  if (isNaN(dobDate.getTime())) {
    getAge.textContent = 'Please enter a valid date.'.fontcolor("red");
    return;
  }

  var age = currentDate.getFullYear() - dobDate.getFullYear();

  if (currentDate.getMonth() < dobDate.getMonth() || 
      (currentDate.getMonth() === dobDate.getMonth() && currentDate.getDate() < dobDate.getDate())) {
    age--;
  }

  getAge.textContent = 'Your age is: ' + age + ' years';
}
