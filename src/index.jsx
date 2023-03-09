import React from 'react';
import ReactDOM from 'react-dom/client';
import AppLayout from './components/AppLayout';
import { load } from './utils';

const Item = ({ id, title, date }) => (
  <article>
    <h2>{title}</h2>
    <p className="article-info">
      {date}
      <a href={`/article/?id=${id}`}>read</a>
    </p>
  </article>
);

const List = ({ items = [] }) => {
  const rs =
    items.length > 0 && items.map((v) => <Item key={v.id} {...v} />);

  if (!rs) {
    return <p> no data </p>;
  }

  return rs;
};

const App = ({ data, error }) => (
  <AppLayout>
    <h1>Blog</h1>
    {!error && <List items={data} />}
    {error && <p>Something wrong happen</p>}
  </AppLayout>
);

const reactStart = (data = [], error = false) =>
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App data={data} error={error} />
    </React.StrictMode>
  );

load(reactStart);
