import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import AskHelp from '../components/AskHelp';
import Auth from '../components/Auth';

const style = {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const HeaderContent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const user = null;

  return (
    <div style={style}>
      <Typography noWrap color={'textSecondary'}>
        BayaNiJuan
      </Typography>
      {user ? (
        <AskHelp modalOpen={modalOpen} setModalOpen={setModalOpen} />
      ) : (
        <Auth modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}
    </div>
  );
};

export default HeaderContent;
