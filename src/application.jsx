import React from 'react';
import 'spectre.css';

class Header extends React.Component {
  testPressed() {
    console.log('test pressed');
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <button className="btn" onClick={this.testPressed}>TEST</button>
      </div>
    )
  }
}

class Footer extends React.Component {
  render() {
    return <div>Footer</div>
  }
}

class Application extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Footer />
      </div>
    )
  }
}

export default Application;