import React from 'react';
import MaskedInput from 'react-text-mask';

const MobileNumberInput = ({ inputRef, ...other }) => (
  <MaskedInput
    {...other}
    ref={ref => {
      inputRef(ref ? ref.inputElement : null);
    }}
    mask={[
      '+',
      '6',
      '3',
      ' ',
      /[1-9]/,
      /\d/,
      /\d/,
      ' ',
      /\d/,
      /\d/,
      /\d/,
      ' ',
      /\d/,
      /\d/,
      /\d/,
      /\d/
    ]}
    guide={false}
  />
);

export default MobileNumberInput;
