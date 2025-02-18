
function calculateVAT( price ) {

    if (typeof price === "number" && price > 0) {
        let percent = 7.5 / 100 ;
        let payVat = price * percent ; 
        return payVat ;
    } else {
        return 'invalid';
    }
}


function  validContact( contact ) {
    if (typeof contact === "object") {
        return "Invalid"; 
    }
    
    if (typeof contact !== "string") {
        return false; 
    }

    if (/^01\d{9}$/.test(contact)) {
        return true;
    }

    return false;
}


function willSuccess(marks) {
    if (!Array.isArray(marks)) {
        return "Invalid"; 
    }

    let fiftyOver = [];
    let fiftyUnder = [];

    for (const mark of marks) {
        if (mark >= 50) {
            fiftyOver.push(mark);
        } else {
            fiftyUnder.push(mark);
        }
    }

    function exam(pass, fail) {
        return pass.length > fail.length;
    }

    return exam(fiftyOver, fiftyUnder);
}

 

function validProposal(person1, person2) {
    if (typeof person1 !== "object" || typeof person2 !== "object") {
        return "Invalid"; 
    }
    let ageDiff = Math.abs(person1.age - person2.age);
    if (ageDiff <= 7 &&
        ((person1.gender === "male" && person2.gender === "female") || 
         (person1.gender === "female" && person2.gender === "male"))) {
        return true;
    }

    return "Invalid";
}

 
function calculateSleepTime(times) {
    if (!Array.isArray(times) || !times.every(time => typeof time === "number")) {
        return "Invalid";
    }
    let sum = 0;
    for (const time of times) {
        sum += time;
    }
    let totalSecond = sum * 60 ;
    let hours = Math.floor(totalSecond / 3600);
    let minutes = Math.floor((totalSecond % 3600) / 60);
    let seconds = totalSecond % 60;

    let totalTime = { hour: hours, minute: minutes, second: seconds };
    return totalTime;
}


