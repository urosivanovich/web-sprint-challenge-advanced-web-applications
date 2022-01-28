import React from 'react';
import '@testing-library/jest-dom';
import { findAllByTestId, render,  screen, waitFor } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';

const mockProps = {
    id: 'aMqwd',
    headline: "headline",
    createdOn: '2021-08-09T18:02:38-04:00',
    summary: "summary", 
    body: "", 
    author: "Nikola Tesla"
}


test('renders component without errors', () => {
    render(<Article article={mockProps} />)
    console.log(<Article />)
});

test('renders headline, author from the article when passed in through props', async () => {
    render(<Article article={mockProps} />)
    const headline = await screen.findByText('headline')
    const author =  await screen.findByTestId('author')
    expect(headline).toBeInTheDocument()
    expect(headline).toBeVisible()
    expect(headline).toBeTruthy()
    expect(author).toBeInTheDocument()
    expect(author).toBeVisible()
    expect(author).toBeTruthy()
});

test('renders "Associated Press" when no author is given', async () => {
    mockProps.author = ''
    render(<Article article={mockProps} />)
    const author = await screen.findByText(/associated press/i)
    expect(author).toBeInTheDocument()
});

test('executes handleDelete when the delete button is pressed', () => {
    const handleDelete = jest.fn()

    render(<Article article={mockProps} handleDelete={handleDelete} />)
    const button = screen.getByTestId('deleteButton')
    userEvent.click(button)
    expect(handleDelete).toHaveBeenCalled()
});

//Task List: 
//1. Complete all above tests. Create test article data when needed.