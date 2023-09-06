import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './features/App/App';
import { BrowserRouter } from 'react-router-dom';
import './scss/partials/_normCss.scss';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { Provider } from 'react-redux';
import { persistor, store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import '../src/index.scss';

i18next.init({
  interpolation: { escapeValue: false },
  fallbackLng: (localStorage.getItem('language') as string) || 'ru',
  detection: {
    order: ['localStorage'],
    caches: ['localStorage'],
  },
  resources: {
    ky: {
      translation: require('./assests/locales/kg/translation.json'),
    },
    ru: {
      translation: require('./assests/locales/ru/translation.json'),
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <I18nextProvider i18n={i18next}>
          <App />
        </I18nextProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
);
