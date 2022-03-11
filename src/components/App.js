import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import Title from './Title';
import Table from './Table';
import Footer from './Footer';
// import Words from "./Words";
import '../style.css';
import papaparse from 'papaparse';

class App extends React.Component {
  state = {
    letters: [
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
    ],
    colors: [
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
    ],
    targetWord: 'penis',
    isOver: false,
    guessedWord: 0,
    guessedLetter: 0,
    bigDick: []
  };

  componentDidMount = () => {
    this.processDicks();
  }

  enterWord = () => {
    console.log('enter was pressed');

    if (this.state.guessedLetter !== 5) {
      // pop up with "Enter 5 letters"
      return;
    } 

    let word = this.state.letters[this.state.guessedWord].join('');

    if (this.state.bigDick.indexOf(word) === -1) {
      return;
    }

    this.setColors(word);
    
    if (word === this.state.targetWord) {
      window.alert('Fuck You!!!!! YOU WIN!!!');

      this.setState({ isOver: true });
      return;
    }

    // if (this.state.guessedWord === 6) {
    //   window.alert()
    // }

    this.setState({
      guessedWord: this.state.guessedWord + 1,
      guessedLetter: 0,
    });
  };

  setColors = word => {
    let colorCopy = this.state.colors;
    let remaining = new Array(26).fill(0);
    let a = 'a'.charCodeAt(0)

    for (var i = 0; i < this.state.targetWord.length; ++i) {
      remaining[ this.state.targetWord.charCodeAt(i)-a ] += 1
    }


    for (var j = 0; j < 5; ++j) {
      colorCopy[this.state.guessedWord][j] = 'r';

      if (word.charAt(j) === this.state.targetWord.charAt(j)) {
        colorCopy[this.state.guessedWord][j] = 'g';
        remaining[ word.charCodeAt(j)-a ] -= 1
      }
    }

    for (var k = 0; k < 5; ++k) {
      if ( remaining[ word.charCodeAt(k)-a ] > 0 ) {
        colorCopy[this.state.guessedWord][k] = 'y';
        remaining[ word.charCodeAt(k)-a ] -= 1
      }
    }
    

    this.setState({});
  };

  addLetter = value => {
    console.log(value, ' was pressed');

    if (this.state.isOver || this.state.guessedLetter === 5) {
      return;
    }

    let gameStateCopy = this.state.letters;
    gameStateCopy[this.state.guessedWord][this.state.guessedLetter] = value;

    this.setState({
      guessedLetter: this.state.guessedLetter + 1,
    });
  };

  deleteLetter = () => {
    console.log('backspace was pressed');

    if (this.state.isOver || this.state.guessedLetter === 0) {
      return;
    }

    let gameStateCopy = this.state.letters;
    gameStateCopy[this.state.guessedWord][this.state.guessedLetter - 1] = '';

    this.setState({
      guessedLetter: this.state.guessedLetter - 1,
    });
  };

  render() {
    return (
      <div>
        <KeyboardEventHandler
          handleKeys={['alphabetic', 'enter', 'backspace']}
          onKeyEvent={(key, e) => {
            if (key === 'enter') {
              this.enterWord();
            } else if (key === 'backspace') {
              this.deleteLetter();
            } else {
              this.addLetter(key);
            }
          }}
        />
        <Title />
        <Table letters={this.state.letters} colors={this.state.colors} />
        <Footer />
      </div>
    );
  }




  
  processDicks = () => {

    let bigdick = "https://raw.githubusercontent.com/ggilestro/playground/main/wordle_strategy/wordle_words_accepted.txt";
    
    let smalldick = "https://raw.githubusercontent.com/ggilestro/playground/main/wordle_strategy/wordle_words.txt";

    let t = this;

  
    papaparse.parse(smalldick, {
      download: true,
      complete: async function(results) {
        let arr = results.data

        for (var i = 0; i < arr.length; ++i) {
          arr[i] = arr[i][0];
        }

        var index = Math.floor(Math.random() * arr.length);

        t.setState({
          bigDick: arr,
          targetWord: arr[index],
        });
        console.log(arr[index]);
      }
    });

    papaparse.parse(bigdick, {
      download: true,
      complete: async function(results) {

        let arr = results.data

        for (var i = 0; i < arr.length; ++i) {
          arr[i] = arr[i][0];
        }
         

        t.setState({
          bigDick: t.state.bigDick + arr,
        });
      }
    });
    return;
  };


}

export default App;
