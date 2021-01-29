import styled from 'styled-components';

const Logo = styled.div`
border-radius: 50%;
width: 48px;`;

function NavbarLogo({url}) {
  return (
    <Logo className="navbar-item logo">
      <img src={url} alt="logo" />
    </Logo>
  )
}

export default NavbarLogo;