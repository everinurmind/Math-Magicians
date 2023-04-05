import calculate from '../logic/calculate';

describe('calculate', () => {
  test('should clear the calculator data object when AC button is pressed', () => {
    const obj = { total: '5', next: '2', operation: '+' };
    const buttonName = 'AC';
    const result = calculate(obj, buttonName);
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  test('should update the next value if a number button is pressed', () => {
    const obj = { total: '5', next: '2', operation: '+' };
    const buttonName = '3';
    const result = calculate(obj, buttonName);
    expect(result).toEqual({ total: '5', next: '23', operation: '+' });
  });

  test('should perform the operation and return the total if the equal button is pressed', () => {
    const obj = { total: '5', next: '2', operation: '+' };
    const buttonName = '=';
    const result = calculate(obj, buttonName);
    expect(result).toEqual({ total: '7', next: null, operation: null });
  });

  test('should add a decimal point to the next value if a decimal button is pressed', () => {
    const obj = { total: '5', next: '2', operation: null };
    const buttonName = '.';
    const result = calculate(obj, buttonName);
    expect(result).toEqual({ total: '5', next: '2.', operation: null });
  });

  test('should change the sign of the next value if the +/- button is pressed', () => {
    const obj = { total: '5', next: '-2', operation: null };
    const buttonName = '+/-';
    const result = calculate(obj, buttonName);
    expect(result).toEqual({ total: '5', next: '2', operation: null });
  });

  test('should perform the operation and return the total with decimal points if the equal button is pressed', () => {
    const obj = { total: '5.5', next: '2.25', operation: 'x' };
    const buttonName = '=';
    const result = calculate(obj, buttonName);
    expect(result).toEqual({ total: '12.375', next: null, operation: null });
  });

  test('should handle division by zero by returning error', () => {
    const obj = { total: '5', next: '0', operation: '÷' };
    const buttonName = '=';
    const result = calculate(obj, buttonName);
    expect(result).toEqual({ total: "Can't divide by 0.", next: null, operation: null });
  });

  // more tests
});
