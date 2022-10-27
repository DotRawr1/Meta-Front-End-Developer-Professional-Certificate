var result = 50;
if (result > 40) {
    console.log("Congratulations! You passed.")
} else {
    console.log("Unfortunately you did not pass.")
}

var place = 'first';
if (place == 'first') {
    console.log("Gold")
} else if (place == "second") {
    console.log("Silver")
} else if (place == "third") {
    console.log("Bronze")
} else {
    console.log("No medal")
}

var place2 = "third"
switch(place2) {
    case "first":
        console.log("Gold")
        break;
    case "second":
        console.log("Silver")
        break;
    case "third":
        console.log("Bronze")
        break;
    default:
        console.log("No medal")
}


var light = "red";
if(light == "green") {
    console.log("Drive")
} else if (light == "orange") {
    console.log("Get ready")
} else if (light == "red") {
    console.log("Don't drive")
} else {
    console.log("The car is not green, orange, or red");
}

var light2 = "orange";
switch(light2) {
    case 'green':
        console.log("Drive");
        break;
    case 'orange':
        console.log("Get ready");
        break;
    case 'red':
        console.log("Don't drive");
        break;
    default:
        console.log('The light is not green, orange, or red');
        break;
 }



 var age = 10;
 if (age > 65) {
    console.log("You will get income from your pension.")
 } else if (age >= 18 && age < 65) {
    console.log("Each month you get a salary.")
 } else if (age < 18) {
    console.log("You get an allowance.")
 } else {
    console.log("The value of the age variable is not numerical.")
 }

 var day = "Sunday"
 switch(day) {
    case "Monday":
        console.log("Coursework")
        break;
    case "Tuesday":
        console.log("Coursework")
        break;
    case "Wednesday":
        console.log("Coursework")
        break;
    case "Thursday":
        console.log("Coursework")
        break;
    case "Friday":
        console.log("Relax")
        break;
    case "Saturday":
        console.log("Relax")
        break;
    case "Sunday":
        console.log("Coursework")
        break;
    default:
        console.log("There is no such day.")
 }