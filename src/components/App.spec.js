import App from './App.svelte';

describe('App Component', () => {
  describe('Default Rendering', () => {
    it('- header', () => {
      const el = document.createElement('div');
      new App({
        target: el
      });
      const heading = el.querySelector('h1');
      expect(heading.textContent).toBe('Hello Svelte3 + Parcel!');
    });
    it('- paragraph', () => {
      const el = document.createElement('div');
      new App({
        target: el
      });
      const p = el.querySelector('p');
      expect(p.textContent.includes('Hello Anonymous, the time is')).toBeTruthy();
    });
  });
  describe('Passed Props Rendering', () => {
    it('- header', () => {
      const el = document.createElement('div');
      new App({
        target: el,
        props: { name: 'John Jacob Jingleheimer Schmidt' }
      });
      const heading = el.querySelector('h1');
      expect(heading.textContent).toBe('Hello Svelte3 + Parcel!');
    });
    it('- paragraph', () => {
      const el = document.createElement('div');
      new App({
        target: el,
        props: { name: 'John Jacob Jingleheimer Schmidt' }
      });
      const p = el.querySelector('p');
      expect(p.textContent.includes('Hello John Jacob Jingleheimer Schmidt, the time is')).toBeTruthy();
    });
  });
});