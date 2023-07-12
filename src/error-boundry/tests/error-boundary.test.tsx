import { render } from '@testing-library/react'
import ErrorBoundary from '../error-boundary'

describe('ErrorBoundary', () => {
    it('renders "Something went wrong." when an error is thrown', () => {
        const spy = jest.spyOn(console, 'error')
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        spy.mockImplementation(() => { })

        const Throw = () => {
            throw new Error('bad')
        }

        const { getByText } = render(
            <ErrorBoundary>
                <Throw />
            </ErrorBoundary>
        )

        expect(getByText('Something went wrong.')).toBeDefined()

        spy.mockRestore()
    })
})