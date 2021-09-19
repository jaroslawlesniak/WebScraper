import { Header } from "../features/common"
import { MenuItem } from "../features/menu";
import { PrimaryButton } from "../ui";

const PublicLayout: React.FC = () => {
    return (
        <>
            <Header>
                <div>
                    <div>
                        <MenuItem to="/">
                            Start
                        </MenuItem>
                        <MenuItem to="/">
                            O aplikacji
                        </MenuItem>
                        <MenuItem to="/">
                            Kontakt
                        </MenuItem>
                    </div>
                    <div>
                        <PrimaryButton>
                            Zaloguj się
                        </PrimaryButton>
                    </div>
                </div>
            </Header>
        </>
    );
}

export default PublicLayout;
