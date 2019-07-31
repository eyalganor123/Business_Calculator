
var state = [
    isGetSalarysOpen = false,
    counter = 1

]

function calculateVat() {
var sum = document.getElementById("vatAmount");
sum=parseInt(sum.value);
var vat =  sum / 100 * 17;
var total = sum+vat;

document.getElementById("vat").innerHTML="</br>"+`Amount: ${sum}`+"</br>"+` 
17% VAT:${vat}`+"</br>"+`Total: ${total}`+"</br>"
console.log(sum);
console.log(vat);
console.log(sum+vat);

}

function calculateAverageSalary() {

    return averageSalary;
}

function checkSugOsek() {
    var sum = document.getElementById("annualIncome");
    var sug = "פטור";
    console.log(sum.value);
    if (sum.value > 100187) {
        sug = "עוסק מורשה";
    }
    document.getElementById("osekDeclare").innerHTML = sug;

    return sug;
}

function getSalarys() {
    var salaryArray = [];
    openGetSalarysDialog();

    return salaryArray;
}

function openGetSalarysDialog() {

    if (state.isGetSalarysOpen == false) {
        $('#getSalarysDialog').hide();
        $('#button').show();
        state.isGetSalarysOpen = true;
    } else {
        $('#getSalarysDialog').show();
        $('#button').hide();
        state.isGetSalarysOpen = false;
    }

}

function newSalary() {
    var newSal = document.createElement('input');
    var space = document.createElement('br');
    newSal.setAttribute('type', 'number');
    newSal.setAttribute('id', counter); counter++;
    document.getElementById("getSalarysDialog").appendChild(newSal).focus();
    document.getElementById("getSalarysDialog").appendChild(space);
}

function test() {
    var salarys = [];
    var y = 0;
    // var val = $('#inputsal').val();
    for (let index = 0; index < counter; index++) {
        var x = document.getElementById(index);
        if (x.value == '') { x.value = 0 };
        y += parseInt(x.value);
        salarys.push(x.value);

    }
    var avg = y / counter;
    avg = avg.toFixed(2);
    document.getElementById("averageSalary").innerHTML = "Your Avergae Salary is: " + avg;

    openGetSalarysDialog();

}

