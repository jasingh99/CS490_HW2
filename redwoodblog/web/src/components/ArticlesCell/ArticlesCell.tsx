export const QUERY = gql`
  query ArticlesQuery {
    articles: posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

import { Link, routes } from '@redwoodjs/router'

// QUERY, Loading, Empty and Failure definitions...

export const Success = ({ articles }) => {
  return (
    <>
      {articles.map((article) => (
        <article key={article.id}>
          <header>
            <h2>
              <Link to={routes.article({ id: article.id })}>{article.title}</Link>
            </h2>
          </header>
          <p>{article.body}</p>
          <div>Posted at: {article.createdAt}</div>
        </article>
      ))}
    </>
  )
}
