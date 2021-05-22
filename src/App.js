import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import OpenFormButton from './components/OpenFormButton';
import '../src/index.css';

function App() {
  const [displayForm, setDisplayForm] = useState(false);
  return (
    <div className="App">
      <header>
        <h1>Contact Book</h1>
      </header>
      <p className="TextAuthor">HW Almaz Chomonov</p>
      <main>
        <OpenFormButton
          displayForm={displayForm}
          setDisplayForm={setDisplayForm}
        />
        {displayForm && <ContactForm />}

        <ContactList />
      </main>
    </div>
  );
}

export default App;
