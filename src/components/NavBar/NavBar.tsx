import './NavBar.scss';

export const NavBar = () => {
  return (
    <header className="header">
      <div className="header__left">
        <a href="#" className="header__logo">
          <img src="../public/logo/logo.svg" alt="logo" />
          <img src="../public/logo/text-logo.svg" alt="text-logo" />
        </a>
      </div>
      <div className="header__right">
        <a href="#user-section">
          <button className="header__button">Users</button>
        </a>
        <a href="#form-section">
          <button className="header__button">Sign up</button>
        </a>
      </div>
    </header>
  );
};
