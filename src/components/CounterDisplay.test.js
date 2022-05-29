import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import CounterDisplay from './CounterDisplay';

describe("CounterDispaly", () => {
  test("renders CounterDisplay component", () => {
    const component = renderer.create(
        <CounterDisplay count="0"/>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  test('renders the correct number', () => {
    const testNumbers = [
      -100, -10, -1, 0, 1, 10, 100
    ];
    
    testNumbers.forEach( testNumber => {
      renderer.create(<CounterDisplay count="${testNumber}" />);
      
      expect(screen.getByText("Current value:")).toBeInTheDocument()
    });
    
  });
});
