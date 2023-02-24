import { useViewport } from "@/src/providers/ViewportProvider";
import { Col, Row, Container as GridContainer } from "react-grid-system";
import { Container, ContainerShopping, ContentPayment, Payment, PaymentMethod } from "./styles";
import paymentMethod from '../../../../public/img/payment_method.png'
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons/faSquareArrowUpRight";
import { faIdBadge } from "@fortawesome/free-regular-svg-icons/faIdBadge"
import { Options } from "../Shopping/styles";

export function Shopping2() {
    const isMobile = useViewport();

    return (
        <Container id='shopping'>
            <GridContainer >
                <Row>
                    <Col md={12}>
                        <ContainerShopping>
                            <p>Gostou dos cursos? Não perca tempo, clique no botão abaixo.</p>
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

                <Row>
                    <Col md={12}>
                        <PaymentMethod>
                            <img src={paymentMethod.src} alt="" />
                        </PaymentMethod>
                    </Col>

                    {/* <Col>
                        <ContentPayment>
                            <Payment>
                                <FontAwesomeIcon icon={faLock} color='#617386' />
                                <p>COMPRA SEGURA</p>
                            </Payment>
                            <Payment>
                                <FontAwesomeIcon icon={faIdBadge} color='#617386' />
                                <p>GARANTIA INCONDICIONAL</p>
                            </Payment>
                        </ContentPayment>
                    </Col> */}
                </Row>
            </GridContainer>
        </Container>
    )
}