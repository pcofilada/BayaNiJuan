import React, { useState } from 'react';
import {
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  Link
} from '@material-ui/core';
import Cookies from 'js-cookie';
import { useMutation } from '@apollo/react-hooks';
import { VERIFY } from '../../graphql/mutations/auth';

const AuthenticationCodeForm = ({ setCodeSent, setModalOpen, userId }) => {
  const [authCode, setAuthCode] = useState('');
  const [verify, { loading }] = useMutation(VERIFY, {
    onCompleted({ verify: { token } }) {
      setModalOpen(false);
      setCodeSent(false);
      Cookies.set('token', token);

      window.location.reload();
    }
  });

  const submitHandler = e => {
    e.preventDefault();
    verify({
      variables: {
        data: {
          attributes: {
            userId,
            authCode
          }
        }
      }
    });
  };

  return (
    <form onSubmit={e => submitHandler(e)}>
      <DialogContent>
        <DialogContentText>
          We sent authentication code to your registered mobile number.
        </DialogContentText>
        <TextField
          autoFocus
          id="auth_code"
          label="Authentication Code"
          variant="outlined"
          value={authCode}
          onChange={e => setAuthCode(e.target.value)}
          disabled={loading}
          fullWidth
        />
        <small>
          Didn't get the code?
          <Link href="#" onClick={e => e.preventDefault}>
            Tap here to resend
          </Link>
        </small>
      </DialogContent>
      <DialogActions>
        <Button
          type="submit"
          color="primary"
          disabled={loading || authCode.length !== 6}
        >
          Submit
        </Button>
      </DialogActions>
    </form>
  );
};

export default AuthenticationCodeForm;
