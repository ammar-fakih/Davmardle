import React, { useState, useEffect } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

const OnKeyboard = ({ addLetter, deleteLetter, enterWord, bThemes }) => {
  // this.state.keyboard.addButtonTheme("a b", "bg-success");

  const onKeyPress = key => {
    if (key === '{backspace}') {
      deleteLetter();
    } else if (key === '{enter}') {
      enterWord();
    } else {
      addLetter(key);
    }
  };

  return (
    <div className="container-fluid col-lg-7">
      <Keyboard
        // keyboardRef={r => keyboard.current = r}
        onKeyPress={onKeyPress}
        theme={'simple-keyboard hg-theme-default bg-primary'}
        layout={keyboardLayout.layout}
        buttonTheme={bThemes}
        physicalKeyboardHighlight={true}
        syncInstanceInputs={true}
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

const bThemes = [];


