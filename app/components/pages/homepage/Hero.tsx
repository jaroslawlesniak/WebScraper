import styles from "../../../styles/Hero.module.scss";

const Hero:React.VFC = () => {
    return (
        <div className="uk-section-primary">
            <div className={styles.hero}>
                <div></div>
                    <div className={styles.header}>
                    <h1 className="uk-text-lead">WebScraper - narzędzie online do monitorowania stanu stron internetowych</h1>
                    <div className="uk-first-column">
                        <a href="docs/introduction" className="uk-button uk-button-primary tm-button-primary uk-button-large tm-button-large uk-visible@s">Get Started</a>
                        <a href="docs/introduction" className="uk-button uk-button-primary tm-button-primary uk-hidden@s">Get Started</a>
                    </div>
                </div>
                <div>
                    Wersja 0.1.0.79383e9a
                </div> 
            </div>
        </div>
    );
}

export default Hero;
