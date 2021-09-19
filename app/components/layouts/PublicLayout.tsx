import styled from "styled-components";
import { Container, Header } from "../features/common"
import { MenuItem } from "../features/menu";
import { PrimaryButton } from "../ui";

const HeaderContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const PublicLayout: React.FC = () => {
    return (
        <Header>
            <HeaderContainer>
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
            </HeaderContainer>
        </Header>
    );
}

export default PublicLayout;
