const mountPoint = document.getElementById('app');
const App = () => `<div>It Works!</div>`;

const render = (what: Function, where: HTMLElement | null) => {
  if (where) {
    where.innerHTML = what();
  }
};

render(App, mountPoint);
