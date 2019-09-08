import React from 'react';

const ArticleItem = ({ article, onClickToggle, onClickRemove }) => (
  <li>
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
);

export default ArticleItem;
