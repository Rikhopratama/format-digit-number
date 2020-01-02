module.exports = (numberOfDigits, number) => {
    numberOfDigits = parseInt(numberOfDigits);
    number = parseInt(number);

    if(!numberOfDigits) throw new Error('numberOfDigits value must be a number');
    if(!number) throw new Error('number value must be a number');

    let num = "";
    for(let i = 1; i <= numberOfDigits; i++){
        num += "0";
    }
    return (num + number).slice(-numberOfDigits); 
}