function calculate() {
    const num1 = parseFloat(document,getElementById('num1').value);
    const num2 = parseFloat(document,getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;
    switch(operation) {
        case 'sum':
            result = num1 + num2;
            break;
        case 'diffenece':
            result = num1 - num2;                
            break;
        case 'product':
            result = num1 * num2;                
            break;        
        case 'qoutient':
            result = num2 !== 0 ? num1 / num2: 'Connot divide by zero';                
            break;
        case 'remainder':
            result = num2 !== 0 ? num1 % num2: 'Connot divide by zero';               
            break;
        case 'power':
            result = Math.pow(num1, num2);                
            break;  
        case 'square-root':
            result = num1 >= 0 ? Math.sqrt(num1) : 'Invalid input for square root';                
            break;  
        case 'square':
            result = Math.pow(num1, 2);                
            break;   
        default:
            result = 'Invalid Operation';
    }
    document.getElementById('result').textContent = 'Result: ${result}';
}