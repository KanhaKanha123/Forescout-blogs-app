import { render } from '@testing-library/react';
import { TestWrapper } from '../test-wrapper';

const TestComponent = () => (<span>Hello</span>);

const rederComponent = () => render(<TestWrapper>
    <TestComponent />
</TestWrapper>);

describe('TestWrapper component', () => {

    test('renders TestWrapper component proper', () => {

        const component = rederComponent();

        expect(component).toMatchSnapshot();
    });
});
