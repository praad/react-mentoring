import renderer from 'react-test-renderer';
import CounterApp from './CounterApp';

describe("CounterApp", () => {
    test("renders CounterApp component", () => {
        const component = renderer.create(
            <CounterApp/>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});