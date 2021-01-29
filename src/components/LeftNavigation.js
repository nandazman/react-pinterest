import styled from 'styled-components';

const Navigation = styled.div`
border-radius: 24px;
min-width: 60px;
padding: 0 16px`;

function NavbarLogo({text}) {
  return (
    <Navigation className={`navbar-item ${text === 'Home' && 'active'}`}>
      {text}
    </Navigation>
  )
}

export default NavbarLogo;