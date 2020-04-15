import Header from './components/Header';
import User from './components/User';

import './scss/app.scss';

const app = async () => {
  document.getElementsByClassName('header')[0].innerHTML = Header();
  document.getElementsByClassName('user')[0].innerHTML = await User();
}

// Init app
app();