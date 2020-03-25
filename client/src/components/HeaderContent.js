import React, { useState } from 'react';
import { Typography, Button } from '@material-ui/core';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import HelpFormModal from '../components/HelpFormModal';

const style = {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const HeaderContent = () => {
  const [helpModalOpen, setHelpModalOpen] = useState(false);

  return (
    <div style={style}>
      <Typography noWrap color={'textSecondary'}>
        Tulong.PH
      </Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<LocalHospitalIcon />}
        onClick={() => setHelpModalOpen(true)}
      >
        Ask For Help!
      </Button>
      <HelpFormModal open={helpModalOpen} setOpen={setHelpModalOpen} />
    </div>
  );
};

export default HeaderContent;
