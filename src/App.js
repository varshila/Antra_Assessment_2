import React from 'react'
import './App.css'

class App extends React.Component {
constructor(props) {
    super(props);
 
    this.state = {
        likes: 100,
        dislikes: 100,
    };
    this.onCLickLike = this.onClickLike.bind(this);
    this.onCLickDislike = this.onClickDislike.bind(this);
  }

  onClickLike = () => this.setState({ likes: this.state.likes + 1, dislikes: this.state.dislikes - 1 })

  onClickDislike = () => this.setState({ likes: this.state.likes - 1, dislikes: this.state.dislikes + 1 })


  render() {
    return (
      <div> 
        <div className = "container">
          <div className = "button-wrapper">
            <button id = "like" className = "button" onClick={() => this.onClickLike()}>Like</button>
            <span className = "count">{this.state.likes}</span>
          </div>
          <div className = "button-wrapper">
            <button id = "dislike" className = "button" onClick={() => this.onClickDislike()}>Dislike</button>
            <span className = "count">{this.state.dislikes}</span>
        </div>
        </div>
    </div> 
    );
  }
}

export default App;
