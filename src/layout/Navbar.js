import '../assets/css/navbar.scss';
import logo from '../assets/img/logo.svg';
import notification from '../assets/img/notification.svg';
import profile from '../assets/img/profile.svg';
import chat from '../assets/img/chat.svg';
import chevronBottom from '../assets/img/chevron-bottom.svg';
import NavbarLogo from '../components/NavbarLogo';
import LeftNavigation from '../components/LeftNavigation';

function Navbar() {
  return (
    <header>
      <div className="navigation">
        <NavbarLogo url={logo}/>
        <LeftNavigation text="Home"/>
        <LeftNavigation text="Today"/>
        <LeftNavigation text="Following"/>
      </div>
      <div className="navigation search">
        <input type="text" placeholder="search"/>
      </div>
      <div className="navigation">
        <NavbarLogo url={notification}/>
        <NavbarLogo url={chat}/>
        <NavbarLogo url={profile}/>
      </div>
      <div className="navigation dropdown">
        <NavbarLogo url={chevronBottom}/>
      </div>
    </header>
  )
}

export default Navbar;