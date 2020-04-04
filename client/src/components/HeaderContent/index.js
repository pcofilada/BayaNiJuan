import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { AuthContext } from '../../context/auth';
import AskHelp from '../AskHelp';
import Auth from '../Auth';
import { HeaderContentWrapper } from './style';

const HeaderContent = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <HeaderContentWrapper>
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
    </HeaderContentWrapper>
  );
};

export default HeaderContent;
