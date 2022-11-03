import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class QRCode extends React.Component {
  render() {
    return (
      <div className="o-qrcode">
        <img src={this.props.link} alt="" />
      </div>
    );
  }
}

class Card extends React.Component {
  render() {
    return (
      <div className="o-card">
        <QRCode link="https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp;size=160x160&amp;format=png&amp;color=fff&amp;bgcolor=3685fe" />

        <div className="o-card__text">
          <h1>{this.props.title}</h1>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}


class App extends React.Component {
  render() {
    return (
      <div className="o-app">
        <Card
          title="Improve your front-end skills by building projects"
          description="Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
        />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
