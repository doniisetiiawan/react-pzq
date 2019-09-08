import React from 'react';

export default function ArticleList(props) {
  const { articles, onClickToggle, onClickRemove } = props;

  return (
    <ul>
      {articles.map((article) => (
        <li key={article.id}>
          <a
            href={`#${article.id}`}
            title="Toggle Summary"
            onClick={() => onClickToggle(article.id)}
          >
            {article.title}
          </a>
          &nbsp;
          <a
            href={`#${article.id}`}
            title="Remove"
            onClick={() => onClickRemove(article.id)}
          >
            ✗
          </a>
          <p style={{ display: article.display }}>{article.summary}</p>
        </li>
      ))}
    </ul>
  );
}
