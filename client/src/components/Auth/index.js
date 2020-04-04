import React, { useState } from 'react';
import { Button, Dialog, DialogTitle } from '@material-ui/core';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import MobileNumberForm from './MobileNumberForm';
import AuthenticationCodeForm from './AuthenticationCodeForm';

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
          <AuthenticationCodeForm
            setCodeSent={setCodeSent}
            setModalOpen={setModalOpen}
            userId={userId}
          />
        ) : (
          <MobileNumberForm
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
