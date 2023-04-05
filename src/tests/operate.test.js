import operate from '../logic/operate';

describe('operate function', () => {
  it('should add two numbers', () => {
    const result = operate('5', '3', '+');
    expect(result).toEqual('8');
  });

  it('should subtract two numbers', () => {
    const result = operate('5', '3', '-');
    expect(result).toEqual('2');
  });

  it('should multiply two numbers', () => {
    const result = operate('5', '3', 'x');
    expect(result).toEqual('15');
  });

  it('should divide two numbers', () => {
    const result = operate('10', '2', '÷');
    expect(result).toEqual('5');
  });

  it('should handle division by zero by returning "Can\'t divide by 0."', () => {
    const result = operate('5', '0', '÷');
    expect(result).toEqual("Can't divide by 0.");
  });

  it('should raise an error for an unknown operation', () => {
    expect(() => {
      operate('5', '3', 'foo');
    }).toThrow("Unknown operation 'foo'");
  });
});
