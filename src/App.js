//  REBUILD AS A CLASS COMPONENT

// FIRST - IMPORTS
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

// SECOND - CREATE THE CLASS -- will always have a render method
class App extends React.Component {
  render() {
    return(
      <>
      <Header />
      <Main />
      <Footer />
      </>
    )
  }
}

// THIRD - EXPORT THE CLASS FOR OTHER FILES TO IMPORT
export default App;