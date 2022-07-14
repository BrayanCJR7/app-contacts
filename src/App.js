import logo from './img/logo-contant.png'
import './App.css';
import ContactList from './components/ContactList'


function App() {
  return (
    <div className="App">
      <div className="logo-container">
        <img
          src={logo}
          className="logo" />
      </div>
      <div className='contact'>
        <div className='contact-list'>
          <h1>My Contacts</h1>
          <ContactList />
        </div>
        
      </div>
    </div>
  );
}

export default App;
