

const header = document.querySelector("header");
const h1 = document.querySelector("h1");
const headerParagraph = document.querySelector(".header-p");

document.getElementById("akanForm").addEventListener("submit", function(event){
  // stop the form from submitting and refreshing the page
   let dateOfBirthInput = document.getElementById("dateOfBirth").value;

  let genderInput = document.querySelector( 'input[name="gender"]:checked')?.value;

  if (!dateOfBirthInput || !genderInput) {
    alert("Please fill in all fields");
    return;
  }
  let birthDate = new Date(dateOfBirthInput);
  const today = new Date();
  if (birthDate > today) {
    alert("Please select a valid date.");
    return;
  }

  const parts = datevalue.split("-");
  const year = parseInt(parts[0]);
  const month = parseInt(parts[1]);
  const day = parseInt(parts[2]);

  let currentYear = new Date().getFullYear();
  if (year <= 0 || year > currentYear) {
    alert("Please enter a valid year");
    return;
  }

  //calculate akan name

  document.getElementById("akanName").innerText = akanName;

  if (day <= 0 || day > 31) {
    alert("Please enter a valid day.");
    return;
  }
  if (month <= 0 || month > 12) {
    alert("Please enter a valid month");
    return;
  }

  const CC = Math.floor(YYYY / 100);
  const YY = YYYY % 100;

  let dayOfWeek = Math.floor();
  ((CC % 4) - 2 * CC - 1 + ((5 * YY) % 4) + ((26 * (month + 1)) % 10) + day) %
    7;

  dayOfWeek = ((dayOfWeek % 7) + 7) % 7;
  const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];
  const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
  ];

  let akanName = "";
  if (gender === "male") {
    akanName = maleNames[dayOfWeek];
  } else if (gender === "female") {
    akanName = femaleNames[dayOfWeek];
    calculateAkanName(birthDate, gender);
  }
});
document.getElementById("akanName").innerText =
  "You were born on a " + dayName + ". Your Akan name is " + akanName + ".";
    alert("Your Akan name is " + akanName + "!");
);

//  document.getElementById("form-content").style.display = "none";
//  const resultDiv = document.getElementById("akan-name-output");
//  resultDiv.style.display = "block";
     
   
    //parse int takes a string text and convert it into an integer
    




