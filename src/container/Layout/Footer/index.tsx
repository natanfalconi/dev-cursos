import { Container, FooterRightsReserved } from "./styles"

export function Footer() {
    return (
        <Container>
            <FooterRightsReserved >
                <p>® {new Date().getFullYear()} devCursos. Todos os direitos reservados</p>
            </FooterRightsReserved>
        </Container>
    );
}