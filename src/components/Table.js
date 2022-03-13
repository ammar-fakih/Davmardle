import React from 'react';
import Card from './Card';

const Table = state => {
  let letters = state.letters;
  let colors = state.colors;
  return (
    <div className="container-fluid col-lg-7">
      <div className="table-responsive col-lg-10 mx-auto">
        <table
          id="table"
          className="table table-bordered"
          style={{ fontSize: '3em' }}>
          <tbody>
            {[0, 1, 2, 3, 4, 5].map(row => {
              return (
                <tr key={row}>
                  {[0, 1, 2, 3, 4].map(col => {
                    let colorName = '';
                    if (colors[row][col] === 'g') {
                      colorName = 'bg-success';
                    } else if (colors[row][col] === 'y') {
                      colorName = 'bg-warning';
                    } else if (colors[row][col] === 'r') {
                      colorName = 'bg-secondary';
                    }
                    return (
                      <td
                        key={row + col}
                        style={{ padding: '6px', margin: '5px', border: 0 }}>
                        {/* <div>
                          <span className="hidden">l</span>
                          {letters[row][col]}
                          <span className="hidden">l</span>
                        </div> */}
                        <Card
                          colors={colors}
                          letters={letters}
                          row={row}
                          col={col}
                          colorName={colorName}
                        />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
