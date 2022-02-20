import React, { useState } from 'react';
import Row from './SM-StyleRow.jsx';
import stylesData from './SM-dummystylesdata.js';

export default function StyleSelector () {

  const firstStyleId = stylesData[0].style_id;
  const[first, setFirst] = useState(firstStyleId);
  const[display, setDisplay] = useState(stylesData);


  //how many rows
  var rows = Math.ceil(stylesData.length / 4);
  var startIndex = 0;

  //what data to pass down to each row
  function renderRow(data, rows) {
    if (data.length - startIndex > 4) {
      var toPrint = data.slice(startIndex, startIndex + 4);
      startIndex = startIndex + 4;
      return toPrint;
    } else {
      var remainingToPrint = data.slice(startIndex, data.length);
      return remainingToPrint;
    }

  };

  function changeDisplay(first) {
    setDisplay(([...prev]) =>
      // let copyPrev = [...prev];
      // for (var j in display) {
      //   if(prev[j].style_id === first) {
      //     copyPrev.splice(j, 1);
      //     copyPrev.shift(prev[j]);
      //     break;
      //   }
      // }
      [...prev, prev[first]]
    );
  }

  function changeFirst(e) {
    e.preventDefault();
    setFirst(e.target.id);
    changeDisplay(e.target.id);
  }


  return (
    <>STYLE -> Selected_Style
      {[...Array(rows)].map((row, index) =>
      <Row
      key={`row${index}`}
      rowData={renderRow(display)}
      rows={rows}
      onClick={changeFirst}
      />)}

      <span>
        <form>
          <label htmlFor='selectSize'>Select Size </label>
          <select name='selectSize'>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
          </select>

          <label htmlFor='selectQty'> Select Qty </label>
          <select name='selectQty'>
            <option>1</option>
            <option>2</option>
          </select>
        </form>
      </span>

      <button>Add to Cart</button>


    </>

  );

}