import React, { useState } from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link
} from '@material-ui/core';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import MobileNumberInput from './MobileNumberInput';

const SIGNIN = gql`
  mutation signin($data: SigninInput!) {
    signin(input: $data) {
      id
    }
  }
`;

const VERIFY = gql`
  mutation verify($data: VerifyInput!) {
    verify(input: $data) {
      token
    }
  }
`;

const MobileNumberContent = ({ setModalOpen, setCodeSent, setUserId }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [signin] = useMutation(SIGNIN, {
    onCompleted({ signin: { id } }) {
      setMobileNumber(null);
      setCodeSent(true);
      setUserId(id);
    }
  });

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        signin({
          variables: {
            data: { attributes: { mobileNumber } }
          }
        });
      }}
    >
      <DialogContent>
        <DialogContentText>
          Please fill up all information needed to continue.
        </DialogContentText>
        <TextField
          autoFocus
          id="number"
          label="Mobile Number"
          variant="outlined"
          value={mobileNumber}
          onChange={e => setMobileNumber(e.target.value)}
          fullWidth
          InputProps={{
            inputComponent: MobileNumberInput
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setModalOpen(false)} color="primary">
          Cancel
        </Button>
        <Button type="submit" color="primary">
          Continue
        </Button>
      </DialogActions>
    </form>
  );
};

const AuthenticationCodeContent = ({ setCodeSent, setModalOpen, userId }) => {
  const [authCode, setAuthCode] = useState('');
  const [verify] = useMutation(VERIFY, {
    onCompleted({ verify: { token } }) {
      setModalOpen(false);
      setCodeSent(false);
    }
  });

  return (
    <form
      onSubmit={e => {
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
      }}
    >
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
        <Button type="submit" color="primary">
          Submit
        </Button>
      </DialogActions>
    </form>
  );
};

const Auth = ({ modalOpen, setModalOpen }) => {
  const [codeSent, setCodeSent] = useState(false);
  const [userId, setUserId] = useState(null);

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        startIcon={<VpnKeyIcon />}
        onClick={() => setModalOpen(true)}
      >
        SignIn
      </Button>
      <Dialog
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          <center>BayaNiJuan</center>
        </DialogTitle>
        {codeSent ? (
          <AuthenticationCodeContent
            setCodeSent={setCodeSent}
            setModalOpen={setModalOpen}
            userId={userId}
          />
        ) : (
          <MobileNumberContent
            setModalOpen={setModalOpen}
            setCodeSent={setCodeSent}
            setUserId={setUserId}
          />
        )}
      </Dialog>
    </>
  );
};

export default Auth;
