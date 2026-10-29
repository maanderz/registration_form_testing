const fs = require('fs');
const path = require('path');
const { getByText } = require('@testing-library/dom');
require('@testing-library/jest-dom');

// Load the HTML file layout before running tests
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

describe('index.html structure', () => {
  beforeEach(() => {
    // Inject the raw HTML string into the virtual DOM environment
    document.documentElement.innerHTML = html.toString();
  });

  it('renders the correct main heading text', () => {
    const heading = document.getElementById('main-heading');
    expect(heading).not.toBeNull();
    expect(heading.textContent).toBe('Welcome to the Dashboard');
  });

  it('contains a disabled submit button', () => {
    // Using DOM Testing Library helper to find element by visible text
    const button = getByText(document.body, 'Submit Data');
    
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled(); // Provided by @testing-library/jest-dom
  });
});