import React from 'react';
import ReactModal from 'react-modal';

const Modal = ({ targetWord, gameState, resetGame }) => {
  return (
    <div >
      <ReactModal
        ariaHideApp={false}
        style={wonStyle}
        isOpen={gameState === 'lost'}>
        You lost. The word was <b>{targetWord}</b>.<br/><hr />
        <button className="btn btn-dark" onClick={resetGame}>Play Again</button>
      </ReactModal>

      <ReactModal
        ariaHideApp={false}
        isOpen={gameState === 'won'}
        style={wonStyle}
        class={"modal"}>
        You won! <br/><hr />
        <button className="btn btn-dark" onClick={resetGame}>Play Again</button>
      </ReactModal>
    </div>
  );
};


const wonStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.80)',
  },
  content: {
    position: 'absolute',
    top: '70%',
    bottom: "auto",
    left: '20%',
    right: '20%',
    background: '#fafafa  ',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
    textAlign: 'center',
    verticalAlign: 'middle',
    boxShadow: "-2rem 2rem 2rem rgba(black, 0.2)"
  },
};

export default Modal;
