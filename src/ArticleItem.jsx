import React from 'react';

export default function ArticleItem(props) {
  const { article, onClickToggle, onClickRemove } = props;

  return (
    <li>
      <a
        href={'#{article.id}'}
        title="Toggle Summary"
        onClick={() => onClickToggle(article.id)}
      >
        {article.title}
      </a>
      &nbsp;
      <a
        href={'#{article.id}'}
        title="Remove"
        onClick={() => onClickRemove(article.id)}
      >
        ✗
      </a>
      <p style={{ display: article.display }}>{article.summary}</p>
    </li>
  );
}
