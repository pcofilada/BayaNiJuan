import React from 'react';
import { Typography, Button } from '@material-ui/core';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

const style = {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const HeaderContent = () => (
  <div style={style}>
    <Typography noWrap color={'textSecondary'}>
      Tulong.PH
    </Typography>
    <Button
      variant="contained"
      color="primary"
      startIcon={<LocalHospitalIcon />}
    >
      Ask For Help!
    </Button>
  </div>
);

export default HeaderContent;
