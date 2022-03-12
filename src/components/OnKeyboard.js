import React, { useState, useEffect } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

const OnKeyboard = ({ addLetter, deleteLetter, enterWord, bThemes, highlightBoard }) => {

  const onKeyPress = key => {
    if(highlightBoard) {
      if (key === '{backspace}') {
        deleteLetter();
      } else if (key === '{enter}') {
        enterWord();
      } else {
        addLetter(key);
      }
    }
  };

  themes = []
  for (var i = 0; i < bThemes.length; ++i) {
    if(bThemes[i].class !== "nothing") {
      themes.push(bThemes[i])
    }
  }

  return (
    <div className="container-fluid col-lg-7">
      <Keyboard
        // keyboardRef={r => keyboard.current = r}
        onKeyPress={onKeyPress}
        theme={'simple-keyboard hg-theme-default'}
        layout={keyboardLayout.layout}
        buttonTheme={themes}
        physicalKeyboardHighlight={highlightBoard}
        syncInstanceInputs={true}
        // maxLength={"200px"}
      />
    </div>
  );
};

export default OnKeyboard;

const keyboardLayout = {
  layout: {
    default: [
      'q w e r t y u i o p',
      'a s d f g h j k l',
      '{enter} z x c v b n m {backspace}',
    ],
  },
};


let themes = [];