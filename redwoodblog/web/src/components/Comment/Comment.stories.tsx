import Comment from './Comment'

export const generated = () => {
  return (
    <Comment
      comment={{
        name: 'Jaspreet Singh',
        body: 'This is the first comment!',
        createdAt: '2022-10-04T12:34:56Z'
      }}
    />
  )
}

export default { title: 'Components/Comment' }
