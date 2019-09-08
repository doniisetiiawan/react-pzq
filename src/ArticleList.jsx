import React from 'react';
import ArticleItem from './ArticleItem';

export default function ArticleList(props) {
  const { articles, onClickToggle, onClickRemove } = props;

  return (
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
}
