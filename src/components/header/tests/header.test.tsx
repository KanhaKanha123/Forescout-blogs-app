import { fireEvent, render, screen } from '@testing-library/react';
import { Header } from '../header';
import { TestWrapper } from '../../../test-utils/test-wrapper';
import { useAppContext } from '../../../store/context';

const rederComponent = () => render(<TestWrapper>
    <Header />
</TestWrapper>);

describe('Header component', () => {
    const setSearchTerm = jest.fn();

    test('renders Header component proper', () => {

        const component = rederComponent();

        expect(component).toMatchSnapshot();
    });

    test('TextBox should have the correct input', () => {
        const component = rederComponent();
        const textBox = component.getByTestId('serach_text');
        fireEvent.change(textBox, { target: { value: 'hello' } })
        expect((textBox as HTMLInputElement).value).toBe('hello')
    });
});
