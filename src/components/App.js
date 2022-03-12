import React, { useRef } from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import Popup from 'reactjs-popup';
import Title from './Title';
import Table from './Table';
import Footer from './Footer';
import OnKeyboard from './OnKeyboard';
import Keyboard from 'react-simple-keyboard';
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
    guessedLetters: [],
    targetWord: 'penis',
    isOver: false,
    guessedWord: 0,
    guessedLetter: 0,
    bigDick: [],
    buttonAttributes: [],
    bThemes: [],
  };

  componentDidMount = () => {
    this.processDicks();
    let bThemesCopy = [];

    for (var bi = 0; bi < 26; ++bi) {
      let c = String.fromCharCode('a'.charCodeAt(0) + bi);
      bThemesCopy.push({ class: 'nothing', buttons: c });
    }
    this.setState({ bThemes: bThemesCopy });
  };

  enterWord = () => {
    // console.log('enter was pressed');

    if (this.state.guessedLetter !== 5) {
      // pop up with "Enter 5 letters"
      return;
    }

    // create guessed word
    let word = this.state.letters[this.state.guessedWord].join('');

    if (this.state.bigDick.indexOf(word) === -1) {
      return;
    }

    this.setColors(word);

    // win condition
    if (word === this.state.targetWord) {
      window.alert('Fuck You!!!!! YOU WIN!!!');

      this.setState({ isOver: true });
      return;
    }

    // game loss
    if (this.state.guessedWord === 5) {
      window.alert(`The word was ${this.state.targetWord}`);

      this.setState({ isOver: true });
      return;
    }

    // increment guessed word, reset guessed letter
    this.setState({
      guessedWord: this.state.guessedWord + 1,
      guessedLetter: 0,
    });
  };

  setColors = word => {
    let colorCopy = this.state.colors;
    let remaining = new Array(26).fill(0);
    let a = 'a'.charCodeAt(0);

    // remaining letters freq map
    for (var i = 0; i < 5; ++i) {
      remaining[this.state.targetWord.charCodeAt(i) - a] += 1;
    }

    // bthemes state copy
    let bth = this.state.bThemes;

    for (var j = 0; j < 5; ++j) {
      // set default colors
      colorCopy[this.state.guessedWord][j] = 'r';
      bth[word.charCodeAt(j) - a].class = 'n-letter';

      // green
      if (word.charAt(j) === this.state.targetWord.charAt(j)) {
        colorCopy[this.state.guessedWord][j] = 'g';
        remaining[word.charCodeAt(j) - a] -= 1;
        bth[word.charCodeAt(j) - a].class = 'g-letter';
      }
    }

    // yellow
    for (var k = 0; k < 5; ++k) {
      if (remaining[word.charCodeAt(k) - a] > 0) {
        colorCopy[this.state.guessedWord][k] = 'y';
        remaining[word.charCodeAt(k) - a] -= 1;
        bth[word.charCodeAt(k) - a].class = 'y-letter';
      }
    }

    this.setState({});
  };

  addLetter = value => {
    // console.log(value, ' was pressed');

    if (this.state.guessedLetter === 5) {
      return;
    }

    let gameStateCopy = this.state.letters;
    gameStateCopy[this.state.guessedWord][this.state.guessedLetter] = value;

    this.setState({
      guessedLetter: this.state.guessedLetter + 1,
    });
  };

  deleteLetter = () => {
    // console.log('backspace was pressed');

    if (this.state.guessedLetter === 0) {
      return;
    }

    let gameStateCopy = this.state.letters;
    gameStateCopy[this.state.guessedWord][this.state.guessedLetter - 1] = '';

    this.setState({
      guessedLetter: this.state.guessedLetter - 1,
    });
  };

  processDicks = () => {
    let bigdick =
      'https://raw.githubusercontent.com/ggilestro/playground/main/wordle_strategy/wordle_words_accepted.txt';

    let smalldick =
      'https://raw.githubusercontent.com/ggilestro/playground/main/wordle_strategy/wordle_words.txt';

    let t = this;

    papaparse.parse(smalldick, {
      download: true,
      complete: async function (results) {
        let arr = results.data;

        for (var i = 0; i < arr.length; ++i) {
          arr[i] = arr[i][0];
        }

        var index = Math.floor(Math.random() * arr.length);

        t.setState({
          bigDick: arr,
          targetWord: arr[index],
        });
        console.log(arr[index]);
      },
    });

    papaparse.parse(bigdick, {
      download: true,
      complete: async function (results) {
        let arr = results.data;

        for (var i = 0; i < arr.length; ++i) {
          arr[i] = arr[i][0];
        }

        t.setState({
          bigDick: t.state.bigDick + arr + ['ammar'] + ['david'],
        });
      },
    });
    return;
  };

  render() {
    return (
      <div>
        <KeyboardEventHandler
          handleKeys={['alphabetic', 'enter', 'backspace']}
          onKeyEvent={key => {
            if (!this.state.isOver) {
              if (key === 'enter') {
                this.enterWord();
              } else if (key === 'backspace') {
                this.deleteLetter();
              } else {
                this.addLetter(key);
              }
            }
          }}
        />
        <Title />
        <Table letters={this.state.letters} colors={this.state.colors} />
        <OnKeyboard
          enterWord={this.enterWord}
          addLetter={this.addLetter}
          deleteLetter={this.deleteLetter}
          keyboard={this.state.keyboard}
          bThemes={this.state.bThemes}
          highlightBoard={!this.state.isOver}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
