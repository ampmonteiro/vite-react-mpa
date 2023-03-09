import React from 'react';
import ReactDOM from 'react-dom/client';
import AppLayout from './components/AppLayout';
import { load } from './utils';

const Article = ({ title, content = [], date }) => (
  <>
    <h1>{title}</h1>
    <p>{date}</p>

    {content.map((v, index) => (
      <p key={index}>{v}</p>
    ))}
  </>
);

const App = ({ item }) => (
  <AppLayout>
    <Article
      title={item.title}
      content={item.content}
      year={item.year}
      month={item.month}
    />
  </AppLayout>
);

const reactStart = (data) =>
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App item={data} />
    </React.StrictMode>
  );

load(reactStart, false);
