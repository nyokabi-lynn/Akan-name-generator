
document
  .getElementById("akanForm")
  .addEventListener("submit", function (event) {
    // stop the form from submitting and refreshing the page
    event.preventDefault();

    let birthDateInput = document.getElementById("birthDate").value;

    let genderInput = document.querySelector(
      'input[name="gender"]:checked',
    )?.value;

    if (!birthDateInput || !genderInput) {
      alert("Please fill in all fields");
      return;
    }
    let birthDate = new Date(birthDateInput);
    const today = new Date(); //keeps the current date
    if (birthDate > today) {
      //if the birthdate is greater than the current date its invalid
      alert("Please select a valid date.");
      return;
    }
    //divides the month year and day inputs and organises it//
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
    //validate day input
    if (day <= 0 || day > 31) {
      alert("Please enter a valid day.");
      return;
    }
    //validate month input
    if (month <= 0 || month > 12) {
      alert("Please enter a valid month");
      return;
    }

    const CC = Math.floor(YYYY / 100);
    const YY = YYYY % 100;

    let dayOfWeek =
        Math.floor(CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD,
        ) % 7;



    // Fix negative values if the day is less than 0 day should be add 7
    if (d < 0) d += 7 % 7 ;
    // Array days of the week
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    // Find actual day name
    let dayName = days[d];

    //male and female
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
    //validate gender input
    let akanName = "";
    if (gender === "male") {
      akanName = maleNames[d];
    } else if (gender === "female") {
      akanName = femaleNames[d];
    }
  
    document.getElementById("akanName").innerText =
      "You were born on a " + dayName + ". Your Akan name is " + akanName + ".";
    alert("Your Akan name is " + akanName + "!");
  });
