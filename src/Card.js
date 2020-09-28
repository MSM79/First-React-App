import React, { Component } from 'react';

class Card extends Component {
  eventHandler(e) {
    console.log(this)
    console.log('click');
  }
  render() {
    let {title , body} = this.props;
    return (
      <div className="kir">
        <h2>{title}</h2>
        <p>{body}</p>
        <button onClick={this.eventHandler.bind(this, 'xxxx')}>Click</button>
      </div>
    )
  }
}

export default Card;
