// import React, { useEffect } from 'react';
// import papaparse from 'papaparse';

// const Script = state => {

//     useEffect( () => {
//         this.processDicks(state);
//     }, []);

//     const processDicks = state => {
//         let bigdick =
//           'https://raw.githubusercontent.com/ggilestro/playground/main/wordle_strategy/wordle_words_accepted.txt';
    
//         let smalldick =
//           'https://raw.githubusercontent.com/ggilestro/playground/main/wordle_strategy/wordle_words.txt';
        
//         papaparse.parse(smalldick, {
//           download: true,
//           complete: async function (results) {
//             let arr = results.data;
    
//             for (var i = 0; i < arr.length; ++i) {
//               arr[i] = arr[i][0];
//             }
    
//             var index = Math.floor(Math.random() * arr.length);
    
//             state.setState({
//               bigDick: arr,
//               targetWord: arr[index],
//             });
//             console.log(arr[index]);
//           },
//         });
    
//         papaparse.parse(bigdick, {
//           download: true,
//           complete: async function (results) {
//             let arr = results.data;
    
//             for (var i = 0; i < arr.length; ++i) {
//               arr[i] = arr[i][0];
//             }
    
//             state.setState({
//               bigDick: state.state.bigDick + arr + ['ammar'] + ['david'],
//             });
//           },
//         });
//       };

// };

// export default Script;



