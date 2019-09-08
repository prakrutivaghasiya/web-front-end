var fName = prompt("Enter your first name.");
var lName = prompt("Enter your last name.");
var age = prompt("Ente your age.");
var height = prompt("Enter your height.");
var pet = prompt("Enter your pet's name.");
alert("Thankyou for your Information!");
var len = pet.length ;
var namecond = null;
var agecond = null;
var heightcond = null;
var petcond = null;
  if (fName[0] == lName[0]) {
        namecond = true;
  }
  if(age >= 20 && age<= 30)
  {
      agecond = true;
  }
  if (height>=170) {
      heightcond = true;
  }
  if (pet[len-1] === "y") {
      petcond = true;
  }
if (namecond && agecond && heightcond && petcond) {
  alert("Check Console from inspect element!");
  console.log("Well Hello there, You have passed our \"Spy\" test.");
}
else {
  console.log("Nothing is here for you!");
}
