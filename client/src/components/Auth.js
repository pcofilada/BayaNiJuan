import React, { useState } from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import MobileNumberInput from './MobileNumberInput';

const MobileNumberContent = ({ setModalOpen, setCodeSent }) => (
  <>
    <DialogContent>
      <DialogContentText>
        Please fill up all information needed to continue.
      </DialogContentText>
      <TextField
        autoFocus
        id="number"
        label="Mobile Number"
        variant="outlined"
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
      <Button onClick={() => setCodeSent(true)} color="primary">
        Continue
      </Button>
    </DialogActions>
  </>
);

const AuthenticationCodeContent = ({ setModalOpen }) => (
  <>
    <DialogContent>
      <DialogContentText>
        We sent authentication code to your registered mobile number.
      </DialogContentText>
      <TextField
        autoFocus
        id="auth_code"
        label="Authentication Code"
        variant="outlined"
        fullWidth
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={() => setModalOpen(false)} color="primary">
        Submit
      </Button>
    </DialogActions>
  </>
);

const Auth = ({ modalOpen, setModalOpen }) => {
  const [codeSent, setCodeSent] = useState(false);

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
        <DialogTitle id="form-dialog-title">BayaNiJuan</DialogTitle>
        {codeSent ? (
          <AuthenticationCodeContent setModalOpen={setModalOpen} />
        ) : (
          <MobileNumberContent
            setModalOpen={setModalOpen}
            setCodeSent={setCodeSent}
          />
        )}
      </Dialog>
    </>
  );
};

export default Auth;
