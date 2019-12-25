import React from 'react';
import Header from './components/header/header.component';
import Body from './components/body/body.component';
import Footer from './components/footer/footer.component';
import './Style.css';

class App extends React.Component {
  render() {
    return(
      <main>
        <Header />
        <Body />
        <Footer />
      </main>
    )
  }
}

export default App;
