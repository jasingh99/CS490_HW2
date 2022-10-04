import { render, screen } from '@redwoodjs/testing'

import Comment from './Comment'

describe('Comment', () => {
  it('renders successfully', () => {
    const comment = {
      name: 'Jaspreet Singh',
      body: 'This is my comment',
      createdAt: '2022-10-04T12:34:56Z',
    }
    render(<Comment comment={comment} />)

    expect(screen.getByText(comment.name)).toBeInTheDocument()
    expect(screen.getByText(comment.body)).toBeInTheDocument()
    const dateExpect = screen.getByText('2 January 2020')
    expect(dateExpect).toBeInTheDocument()
    expect(dateExpect.nodeName).toEqual('TIME')
    expect(dateExpect).toHaveAttribute('datetime', comment.createdAt)
  })
})
