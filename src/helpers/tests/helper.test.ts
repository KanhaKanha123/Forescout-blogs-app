import { waitFor } from '@testing-library/react';
import { debounce } from '../helper';

// jest.mock("../helper");

describe('helper class', () => {
    it('should call useProducts after 100ms after typing', async () => {
        const result = await debounce(100);
        await waitFor(() => expect(result).toBe(true));
    });
});