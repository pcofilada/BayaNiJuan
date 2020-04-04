import styled from 'styled-components';

export const NavHeaderWrapper = styled.div`
  transition: 0.3s;
  padding: ${props => (props.collapsed ? 8 : 16)};
`;
