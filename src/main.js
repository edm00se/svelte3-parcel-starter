import '@babel/polyfill';

import './styles.css';
import App from './components/App.svelte';

const app = new App({
  target: document.body,
  props: {
    name: 'world'
  }
});
