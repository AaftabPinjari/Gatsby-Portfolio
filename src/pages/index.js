import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Aaftab Pinjari'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Portfolio Of Aaftab'} />
      </Helmet>
      <App />
    </>
  );
};
