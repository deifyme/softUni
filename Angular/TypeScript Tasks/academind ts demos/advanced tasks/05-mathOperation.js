function mathOperation(num1, num2, operator) {
    switch (operator) {
        case '+':
            console.log(num1 + num2);
            break;
        case '-':
            console.log(num1 - num2);
            break;
        case '*':
            console.log(num1 * num2);
            break;
        case '/':
            console.log(num1 / num2);
            break;
        case '%':
            console.log(num1 % num2);
            break;
        case '**':
            console.log(Math.pow(num1, num2));
            break;
    }
}
mathOperation(5, 6, '*');
