import React from 'react'

const About = () => {
    return (
        <div className="uk-container uk-container-large">
            <div className="uk-section uk-section-default">
                <div className="uk-column-1-2">
                    <div>
                        <h2 className="uk-text-lead">Jak to działa?</h2>
                        <p>WebScraper <b>codziennie</b> monitoruje wybrane strony w poszukiwaniu jakichkolwiek zmian. Jeśli ktokolwiek (np. haker) zmodyfikuje zawartość strony, otrzymasz o tym <b>powiadomienie</b> w czasie maksymalnie 24 godzin.</p>
                        <p>Możesz podać dowolną liczbę stron, która powinna być sprawdzana. Powyżej 10 stron, będziesz musiał uiścić opłatę, której wysokość samemu będziesz mógł zdefiniować. Opłata pozwoli mi na utrzymanie serwera, który będzie monitorował strony.</p>
                        <p>WebScraper zidentyfikuje wiele rodzajów błędów:</p>
                        <ul>
                            <li>Wstrzyknięcie złośliwego kodu bezpośrednio do plików źródłowych strony</li>
                            <li>Dodanie automatycznie wyświetlanych banerów po uruchomieniu strony</li>
                            <li>Wygaśnięcie certyfikatu SSL</li>
                            <li>Przekierowanie strony na inny adres</li>
                        </ul>
                        <p>W przyszłości do aplikacji zostaną dodane nowe moduły, którymi będą:</p>
                        <ul>
                            <li>Sprawdzanie w czasie rzeczywistym dostępności serwerów i aplikacji</li>
                            <li>Możliwość uruchomienia powiadomień na telefon</li>
                            <li>Wyświetlanie różnic podczas wykrycia jakichkolwiek zmian</li>
                        </ul>
                    </div>
                    <div>
                        <img src="/images/human.png" style={{ width: "100%" }}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
