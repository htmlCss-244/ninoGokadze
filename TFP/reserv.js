if (name ==="" || isNaN(age) || people === "" || Date === "" || time === "") {
    alert ("Please fill all fields")

}

if (age <18) {
    alert ("You must be at least 18 y.o")
}

let hour = parseInt(time.split(":")[0]) ;
let minute = parseInt(time.split(":")[1]) ;

let allowedTime =
(hour >= 11 && hour <= 23) ||
(hour >= 0 && hour <3) ||
(hour ===3 && minute === 0);

if(!allowedTime) {
    alert ("Reservations Allowed Only From 11:00 AM To 3:00 AM.")
    return;
}