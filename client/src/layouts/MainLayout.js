import React from 'react';
import { CssBaseline, Toolbar } from '@material-ui/core';
import {
  Root,
  Header,
  Sidebar,
  Content,
  SidebarTrigger,
  SidebarTriggerIcon
} from '@mui-treasury/layout';

import HeaderContent from '../components/HeaderContent';
import NavHeader from '../components/NavHeader';
import NavContent from '../components/NavContent';

const MainLayout = ({ children }) => (
  <Root>
    {({ headerStyles, sidebarStyles }) => (
      <>
        <CssBaseline />
        <Header>
          <Toolbar>
            {/* <SidebarTrigger className={headerStyles.leftTrigger}>
              <SidebarTriggerIcon />
            </SidebarTrigger> */}
            <HeaderContent />
          </Toolbar>
        </Header>
        <Content>{children}</Content>
        {/* <Sidebar>
          {({ collapsed }) => (
            <>
              <NavHeader collapsed={collapsed} />
              <div className={sidebarStyles.container}>
                <NavContent />
              </div>
            </>
          )}
        </Sidebar> */}
      </>
    )}
  </Root>
);

export default MainLayout;
