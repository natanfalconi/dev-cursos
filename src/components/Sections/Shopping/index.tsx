import { useViewport } from "@/src/providers/ViewportProvider";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons/faSquareArrowUpRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row, Container as GridContainer } from "react-grid-system";
import { Container, TitleContainer, ContainerShopping, Options } from "./styles";

export function Shopping() {
    const isMobile = useViewport();

    return (
        <>
            <TitleContainer>
                <h2>Começe o seu futuro na programação</h2>
            </TitleContainer>

            <Container id='shopping'>
                <GridContainer >
                    <Row>
                        <Col md={12}>
                            <ContainerShopping>
                                <h2>Pronto para se tormar um <br /> programador profissional?</h2>
                            </ContainerShopping>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={12}>
                            <Options>
                                <a href="https://www.cod3r.com.br/?ref=96e4e9" target='_blank' rel="noreferrer">
                                    Quero ser um profissional completo
                                    <FontAwesomeIcon icon={faSquareArrowUpRight} />
                                </a>
                            </Options>
                        </Col>
                    </Row>
                </GridContainer>
            </Container>
        </>
    )
}