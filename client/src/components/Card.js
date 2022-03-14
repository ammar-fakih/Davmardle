import React from 'react';
import ReactCardFlip from 'react-card-flip';

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    this.state.isFlipped = this.props.colors[this.props.row][this.props.col] !== '';
    return (
      <ReactCardFlip
        isFlipped={this.state.isFlipped}
        flipDirection="vertical"
        flipSpeedFrontToBack={this.props.col * 0.2 + 0.6} infinite={false}>

        <div style={{ padding: '5px', backgroundColor: '#e3e3e3' }}>
          <span className="hidden">l</span>
          {this.props.letters[this.props.row][this.props.col]}
          <span className="hidden">l</span>
        </div>

        <div style={{ padding: '5px' }} className={this.props.colorName}>
          <span className="hidden">l</span>
          {this.props.letters[this.props.row][this.props.col]}
          <span className="hidden">l</span>
        </div>
      </ReactCardFlip>
    );
  }
}

export default Card;
