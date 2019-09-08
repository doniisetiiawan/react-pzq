import React from 'react';
import ArticleItem from './ArticleItem';

const ArticleList = ({ articles, onClickToggle, onClickRemove }) => (
  <ul>
    {articles.map((i) => (
      <ArticleItem
        key={i.id}
        article={i}
        onClickToggle={onClickToggle}
        onClickRemove={onClickRemove}
      />
    ))}
  </ul>
);

export default ArticleList;
