const Header: React.FC = (props) => {
  return (
    <div className="uk-section-primary">
        <div
            uk-sticky="media: 0"
            className="uk-navbar-container uk-navbar-transparent"
            style={{ position: "absolute", top: 0, height: 0 }}
        >
        <div className="uk-container uk-container-expand">
            <nav className="uk-navbar">
            <div className="uk-navbar-left">
                <a href="/" aria-current="page" className="uk-navbar-item uk-logo router-link-exact-active uk-active">
                <svg width="28" height="34" viewBox="0 0 28 34" xmlns="http://www.w3.org/2000/svg" className="uk-margin-small-right uk-svg">
                    <polygon fill="#fff" points="19.1,4.1 13.75,1 8.17,4.45 13.6,7.44"></polygon>
                    <path fill="#fff" d="M21.67,5.43l-5.53,3.34l6.26,3.63v9.52l-8.44,4.76L5.6,21.93v-7.38L0,11.7v13.51l13.75,8.08L28,25.21V9.07 L21.67,5.43z"></path>
                </svg>
                WebScraper
                </a>
            </div>
            <div className="uk-navbar-right">
                <ul className="uk-navbar-nav uk-visible@m">
                <li className="">
                    <a href="/pro">Start</a>
                </li>
                <li>
                    <a href="docs/introduction">O Oprogramowaniu</a>
                </li>
                <li>
                    <a href="docs/introduction">FAQ</a>
                </li>
                <li className="">
                    <a href="/changelog">Dokumentacja</a>
                </li>
                <li className="">
                    <a href="/changelog">Lista zmian</a>
                </li>
                </ul>
            </div>
            </nav>
        </div>
        </div>
    </div>
  );
};

export default Header;
