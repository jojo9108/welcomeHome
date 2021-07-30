// js/variable1.js
const number = [23, 44, 18, 35, 50];
number.push(42);
let sums = 0;
for (let i = 0; i < number.length; i++) {
    document.write(number[i] + '<br>')
    sums += number[i];
}
document.write('<p>-------------------</p>');
document.write('합계: ' + sums);