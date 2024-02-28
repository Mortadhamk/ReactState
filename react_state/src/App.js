
import './App.css';
import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'LeBron James',
        bio: 'LeBron Raymone James Sr. is an American professional basketball player for the Los Angeles Lakers of the National Basketball Association.',
        imgSrc: 'https://cdn.britannica.com/19/233519-050-F0604A51/LeBron-James-Los-Angeles-Lakers-Staples-Center-2019.jpg?w=400&h=300&c=crop',
        profession: 'BascketBall Player'
      },
      shows: false,
      mountTime: null
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState(prevState => ({ shows: !prevState.shows }));
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        mountTime: new Date() - this.mountTime
      });
    }, 1000);
    this.mountTime = new Date();
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {this.state.shows && (
          <div>
            <h1>{this.state.person.fullName}</h1>
            <img src={this.state.person.imgSrc} alt={this.state.person.fullName} />
            <p>{this.state.person.bio}</p>
            <p>{this.state.person.profession}</p>
          </div>
        )}
        {this.state.mountTime && (
          <p>Component has been mounted for {this.state.mountTime} ms.</p>
        )}
      </div>
    );
  }
}

export default App;