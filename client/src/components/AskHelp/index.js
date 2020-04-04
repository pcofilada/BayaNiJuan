import React from 'react';
import { Button } from '@material-ui/core';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import AskHelpForm from './AskHelpForm';

const AskHelp = ({ modalOpen, setModalOpen }) => {
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        startIcon={<LocalHospitalIcon />}
        onClick={() => setModalOpen(true)}
      >
        Ask For Help!
      </Button>
      <AskHelpForm modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  );
};

export default AskHelp;
