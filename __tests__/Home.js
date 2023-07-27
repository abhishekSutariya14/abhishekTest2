import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';

import {Home} from '../src/screens/Home';

// Mock the fetch function to return a fixed set of posts
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {id: 1, title: 'Post 1', body: 'Body of Post 1'},
        {id: 2, title: 'Post 2', body: 'Body of Post 2'},
      ]),
    ok: true,
  }),
);

test('renders post list correctly', async () => {
  const {getByText, getAllByText} = render(<Home />);

  // Wait for the component to finish rendering
  await waitFor(() => getByText('Refresh'));

  // Initial "Refresh" button
  const refreshButton = getByText('Refresh');
  expect(refreshButton).toBeDefined();

  // Test fetching data and rendering list items
  fireEvent.press(refreshButton);
  await waitFor(() => getAllByText(/Post \d/));
  const postTitles = getAllByText(/Post \d/);
  expect(postTitles.length).toBe(8);
});
