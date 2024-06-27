//getting root element
const rootHtmlEl = document.getElementById('root');
//root react element
const rootReactEl = ReactDOM.createRoot(rootHtmlEl);
//create basic react element
const reactElementHeader = (
  <header>
    <h1>Hello from JSX REACT</h1>
    <h2>JSX is awesome les go</h2>
  </header>
); //children example
//render
rootReactEl.render(reactElementHeader);
