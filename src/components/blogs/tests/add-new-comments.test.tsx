import { fireEvent, render } from '@testing-library/react';
import { AddNewComments } from '../add-new-comments';
import { TestWrapper } from '../../../test-utils/test-wrapper';
import React from 'react';

const showHideAddNewCommentBoxHandler = jest.fn();

const rederComponent = () => render(<TestWrapper>
  <AddNewComments showHideAddNewCommentBoxHandler={showHideAddNewCommentBoxHandler} blogId={1} />
</TestWrapper>);

describe('AddNewComments component', () => {

  test('renders AddNewComments component proper', () => {

    const component = rederComponent();

    expect(component).toMatchSnapshot();
  });

  test('TextBox should have the correct input', () => {
    const component = rederComponent();
    const textBox = component.getByTestId('comment_text');
    fireEvent.change(textBox, { target: { value: 'hello' } })
    expect((textBox as HTMLInputElement).value).toBe('hello')
  });

  test('save button click should have the correct input', () => {
    const component = rederComponent();

    React.useState = jest.fn().mockReturnValue(['hello', {}])

    const textBox = component.getByTestId('comment_text');

    fireEvent.change(textBox, { target: { value: 'hello' } });

    const button = component.getByTestId('save_comment');

    fireEvent.click(button)

    expect((textBox as HTMLInputElement).value).toBe('hello');
  });
});
