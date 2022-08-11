import { useState } from 'react';
<<<<<<< HEAD
import './styleresponsive.css';
import Banner from './components/banner';
=======
import './App.css';
import Banner from './components/banner';
import Footer from './components/footer';
>>>>>>> ec6cd92be863b1b69b38e0230955b4bf2567dd26
import Header from './components/header'; 

function App() {
  const [openSignin, setOpenSignin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  
  function handleSignin() {
    setOpenSignin(!openSignin);
  }
  function handleSignup() {
    setOpenSignup(!openSignup);
  }

  return (
    <>
      <Header 
        onClickSignin={handleSignin} 
        onClickSignup={handleSignup}
        openSignin={openSignin}
        />
<<<<<<< HEAD
  
      <Banner 
        openSignup={openSignup} 
        onClickCancel={handleSignup} />
     
     {/*<Footer />*/}
=======
      <Banner 
        openSignup={openSignup} 
        onClickCancel={handleSignup} />
      <Footer />
>>>>>>> ec6cd92be863b1b69b38e0230955b4bf2567dd26
    </>
  );
}

export default App;
