

// task 01----------------

function calculateVAT( price ) {

    if (typeof price === "number" && price > 0) {
        let percent = 7.5 / 100 ;
        let payVat = price * percent ; 
        return payVat ;
    } else {
        return 'invalid';
    }
}

// task 02--------------

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



// task 03--------------


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

