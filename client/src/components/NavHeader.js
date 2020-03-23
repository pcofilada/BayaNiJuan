import React from 'react';
import Typography from '@material-ui/core/Typography';

const NavHeader = ({ collapsed }) => (
  <>
    <div style={{ padding: collapsed ? 8 : 16, transition: '0.3s' }}>
      <Typography variant={'h6'} noWrap>
        Juan Dela Cruz
      </Typography>
      <Typography color={'textSecondary'} noWrap gutterBottom>
        09171234567
      </Typography>
    </div>
  </>
);

export default NavHeader;
