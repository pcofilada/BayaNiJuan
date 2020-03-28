import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { AuthContext } from '../context/auth';
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

  return (
    <div style={style}>
      <Typography noWrap color={'textSecondary'}>
        BayaNiJuan
      </Typography>
      <AuthContext.Consumer>
        {({ authToken }) =>
          authToken ? (
            <AskHelp modalOpen={modalOpen} setModalOpen={setModalOpen} />
          ) : (
            <Auth modalOpen={modalOpen} setModalOpen={setModalOpen} />
          )
        }
      </AuthContext.Consumer>
    </div>
  );
};

export default HeaderContent;
