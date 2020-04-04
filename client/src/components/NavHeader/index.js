import React from 'react';
import Typography from '@material-ui/core/Typography';
import { NavHeaderWrapper } from './style';

const NavHeader = ({ collapsed }) => (
  <NavHeaderWrapper collapsed={collapsed}>
    <Typography variant={'h6'} noWrap>
      Juan Dela Cruz
    </Typography>
    <Typography color={'textSecondary'} noWrap gutterBottom>
      09171234567
    </Typography>
  </NavHeaderWrapper>
);

export default NavHeader;
