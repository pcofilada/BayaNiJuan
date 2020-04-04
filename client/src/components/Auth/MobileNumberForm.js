import React, { useState } from 'react';
import {
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button
} from '@material-ui/core';
import { useMutation } from '@apollo/react-hooks';
import { SIGNIN } from '../../graphql/mutations/auth';
import MobileNumberInput from '../MobileNumberInput';

const MobileNumberForm = ({ setModalOpen, setCodeSent, setUserId }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [signin, { loading }] = useMutation(SIGNIN, {
    onCompleted({ signin: { id } }) {
      setMobileNumber('');
      setCodeSent(true);
      setUserId(id);
    }
  });

  const submitHandler = e => {
    e.preventDefault();
    signin({
      variables: {
        data: { attributes: { mobileNumber } }
      }
    });
  };

  return (
    <form onSubmit={e => submitHandler(e)}>
      <DialogContent>
        <DialogContentText>Please add a valid mobile number.</DialogContentText>
        <TextField
          autoFocus
          id="mobile_number"
          label="Mobile Number"
          variant="outlined"
          placeholder="9123456789"
          InputProps={{
            inputComponent: MobileNumberInput
          }}
          value={mobileNumber}
          onChange={e => setMobileNumber(e.target.value)}
          disabled={loading}
          fullWidth
        />
        <DialogActions>
          <Button
            color="primary"
            onClick={() => setModalOpen(false)}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button
            color="primary"
            type="submit"
            disabled={loading || mobileNumber.length !== 16}
          >
            Continue
          </Button>
        </DialogActions>
      </DialogContent>
    </form>
  );
};

export default MobileNumberForm;
