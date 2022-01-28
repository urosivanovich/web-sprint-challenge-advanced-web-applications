import React from 'react';
import '@testing-library/jest-dom';
import { render,  screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';

const mockArt = {
    id: 'aMqwd',
    headline: "headline",
    createdOn: '2021-08-09T18:02:38-04:00',
    summary: "summary", 
    body: "", 
    author: "Nikola Tesla"
}


test('renders component without errors', () => {
    render(<Article article={mockArt} />)
});

test('renders headline, author from the article when passed in through props', () => {
    render(<Article article={mockArt} />)
    const headline =  screen.queryByText('headline')
    const author =  screen.queryByTestId('author')
    expect(headline).toBeInTheDocument()
    expect(headline).toBeVisible()
    expect(headline).toBeTruthy()
    expect(author).toBeInTheDocument()
    expect(author).toBeVisible()
    expect(author).toBeTruthy()
});

test('renders "Associated Press" when no author is given', () => {
    mockArt.author = ''
    render(<Article article={mockArt} />)
    const author =  screen.queryByText(/associated press/i)
    expect(author).toBeInTheDocument()
    expect(author).toHaveTextContent(/associated press/i)
});

test('executes handleDelete when the delete button is pressed', () => {
    const handleDelete = jest.fn()

    render(<Article article={mockArt} handleDelete={handleDelete} />)
    const button = screen.getByTestId('deleteButton')
    userEvent.click(button)
    expect(handleDelete).toHaveBeenCalled()
});

//Task List: 
//1. Complete all above tests. Create test article data when needed.