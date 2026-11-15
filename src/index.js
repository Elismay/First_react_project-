import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter  } from 'react-router-dom'
const x = crypto.randomUUID()
const y= crypto.randomUUID()
console.log(x)
console.log(y)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>

    <App />

  </>
);


