import React from 'react'

const Prices = () => {
    return (
        <div className="uk-section uk-section-primary">
            <div className="uk-container uk-container-large">
                <div className="uk-flex uk-flex-center">
                    <h2 className="uk-text-lead">Dostępne pakiety</h2>
                </div>
                <div className="uk-flex uk-flex-center">
                    <div className="uk-card uk-card-default uk-card-body">
                        {/* <div className="uk-section uk-section-default"> */}
                            <p>Wersja darmowa</p>
                            <ul>
                                <li>Wstrzyknięcie złośliwego kodu bezpośrednio do plików źródłowych strony</li>
                                <li>Dodanie automatycznie wyświetlanych banerów po uruchomieniu strony</li>
                                <li>Wygaśnięcie certyfikatu SSL</li>
                                <li>Przekierowanie strony na inny adres</li>
                            </ul>
                            <button className="uk-button uk-button-primary">Wybierz</button>
                        {/* </div> */}
                    </div>
                    <div className="uk-card uk-card-default uk-card-body uk-margin-left">
                        {/* <div className="uk-section uk-section-default"> */}
                        <p>Wersja PRO</p>
                            <ul>
                                <li>Wstrzyknięcie złośliwego kodu bezpośrednio do plików źródłowych strony</li>
                                <li>Dodanie automatycznie wyświetlanych banerów po uruchomieniu strony</li>
                                <li>Wygaśnięcie certyfikatu SSL</li>
                                <li>Przekierowanie strony na inny adres</li>
                                <li>Nielimitowana ilość wprowadzonych stron</li>
                            </ul>
                            <button className="uk-button uk-button-primary">Wybierz</button>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prices
