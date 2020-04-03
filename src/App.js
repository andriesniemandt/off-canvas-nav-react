import React, { useState } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import Drawer from './components/Drawer/Drawer';
import Backdrop from './components/Backdrop/Backdrop';


// This is a Functional Component, now with useState - React Hooks
function App() {

  const [state, setState] = useState({
    drawerOpen: false
  })

  const drawerToggleClickHandler = () => {
    setState((prevState) => {
      return {drawerOpen: !prevState.drawerOpen}
    });
  };

  const backdropClickHandler = () => {
    setState(() => {
      return {drawerOpen: false}
    });
  };

  let backdrop;

  if (state.drawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />
  }

  return (
    <div className="App" style={{height: `100%`}}>
      <Toolbar drawerClickHandler={drawerToggleClickHandler} />
      <Drawer show={state.drawerOpen} />
      {backdrop}
      <main style={{
        marginTop: '64px'
      }}>
        <p>Main content</p>
      </main>
    </div>
  );
}

export default App;
