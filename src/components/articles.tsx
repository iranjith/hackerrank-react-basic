import { useState } from "react";

type ArticleProps = {
  articles: Article[];
};

export interface Article {
  title: string;
  upvotes: number;
  date: string;
}

const Articles = ({ articles }: ArticleProps) => {
  const sortedByUpvotes = [...articles].sort((a, b) => b.upvotes - a.upvotes);
  const [sortArticles, setSortArticles] = useState<Article[]>(sortedByUpvotes);


  const sortByMostUpdated = () => {
    const sortedArticles = [...sortArticles].sort(
      (a, b) => b.upvotes - a.upvotes
    );
    setSortArticles(sortedArticles);
  };

  const sortByMostRecent = () => {
    const sortedArticles = [...sortArticles].sort(
      (a, b) => Date.parse(b.date) - Date.parse(a.date)
    );
    setSortArticles(sortedArticles);
  };

  return (
    <>
      <div>
        <button data-testid="most-upvoted-link" onClick={sortByMostUpdated}>
          Most Upvoted
        </button>
        <button data-testid="most-recent-link" onClick={sortByMostRecent}>
          Most Recent
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {sortArticles.map((article, index) => (
            <tr key={index} data-testid="article">
              <td data-testid="article-title">{article.title}</td>
              <td data-testid="article-upvotes">{article.upvotes}</td>
              <td data-testid="article-date">{article.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Articles;
