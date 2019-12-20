import React from 'react';
import Header from './components/header/header.component';
import Body from './components/body/body.component';
import Footer from './components/footer/footer.component';

class App extends React.Component {
  render() {
    return(
      <div className="app">
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}

export default App;
