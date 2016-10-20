

function convertToC() {
    var fTempVal = parseFloat(document.getElementById('fahrenheit').value);
    var cTempVal = (fTempVal - 32) * (5 / 9);
    document.getElementById('celsius').value = cTempVal;
    return false;
}

function convertToF() {
    var cTempVal = parseFloat(document.getElementById('celsius').value);
    var fTempVal = (cTempVal * (9 / 5)) + 32;
    console.log(fTempVal);
    document.getElementById('fahrenheit').value = fTempVal;
    return false;
}