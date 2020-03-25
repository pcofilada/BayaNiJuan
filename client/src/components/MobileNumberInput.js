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
    showMask
    placeholderChar={'\u2000'}
  />
);

export default MobileNumberInput;
