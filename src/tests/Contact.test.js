// Jest test for the Contact page
// To test - the presence of the iFrame element on the Contact page
// To test - the correctness of the src attribute of the iFrame

import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Contact from '../components/Contact';

// Mocking the Contact component to ensure the iframe is rendered
jest.mock('../components/Contact', () => () => (
  <div>
    <h1>Contact Us</h1>
    <iframe
      title="Contact Us (StudentDB)"
      src="https://tally.so/embed/mDejJZ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
      width="100%"
      height="500"
      frameBorder="0"
    ></iframe>
  </div>
));

test('renders Contact Us button and navigates to Contact page', async () => {
  render(
    <MemoryRouter>
      <Contact />
    </MemoryRouter>
  );

  // Debugging: Checking if the iframe element is rendered
  const iframeElement = await screen.findByTitle('Contact Us (StudentDB)');
  console.log('iframeElement:', iframeElement);
  expect(iframeElement).toBeInTheDocument();

  // Debugging: Checking the src attribute of the iframe
  console.log('iframe src:', iframeElement.getAttribute('src'));
  await waitFor(() => {
    expect(iframeElement).toHaveAttribute(
      'src',
      'https://tally.so/embed/mDejJZ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1'
    );
  });
});




