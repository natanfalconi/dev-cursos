import { Row, Col, Container as GridContainer } from 'react-grid-system';
// import Chip2goProtectBag from '../../../../public/svg/chip2go-protect-bag.svg';
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, ContentFooter, SocialFooter, SocialIcons, FooterRightsReserved, PaymentMethods, PaymentMethod, PaymentTitle, ContentPaymant } from "./styles";
// import { PaymentMethodProps, PAYMENT_METHODS_IMAGES } from '../../../utils/payments_images';
import { ReactNode } from 'react';

export const paymentMethods = [
    { id: 'visa', name: 'Visa' },
    { id: 'discover', name: 'Discover', },
    { id: 'mastercard', name: 'Masterard' },
    { id: 'pix', name: 'Pix', },
    { id: 'boleto', name: 'Boleto', },
    { id: 'hipercard', name: 'HiperCard', },
    { id: 'hiper', name: 'Hiper', },
    { id: 'elo', name: 'Elo', },
    { id: 'dinersClub', name: 'DinersClub', },
    { id: 'amex', name: 'AmericanExpress', },
];
export interface PaymentMethodsSectionProps {
    // paymentMethods: Array<PaymentMethodProps>;
    children?: ReactNode;
}

export function Footer() {

    return (
        <Container>
            <GridContainer>
                <Row>
                    <Col xs={12} md={6}>
                        <ContentFooter>
                            {/* <Chip2goProtectBag /> */}

                            <SocialFooter>
                                <p>Siga-nos nas redes sociais:</p>
                                <SocialIcons>
                                    {/* <a href="https://www.facebook.com/profile.php?id=100083279595475" target='__blanck'>
                                        <FontAwesomeIcon icon={faFacebookF} color="#E61560" />
                                    </a>
                                    <a href="https://www.instagram.com/chip2go/" target='__blanck'>
                                        <FontAwesomeIcon icon={faInstagram} color="#E61560" />
                                    </a> */}
                                </SocialIcons>
                            </SocialFooter>
                        </ContentFooter>
                    </Col>

                    <Col xs={12} md={1} />

                    <Col xs={12} md={5} >
                        <PaymentTitle>
                            Formas de Pagamento
                        </PaymentTitle>

                        {/* <PaymentMethods className="payment__methods__itens_container">
                            {paymentMethods.map((pay: any) => (
                                <PaymentMethod key={pay.id}>
                                    {PAYMENT_METHODS_IMAGES[pay.id] &&
                                        PAYMENT_METHODS_IMAGES[pay.id]}
                                </PaymentMethod>
                            ))}
                        </PaymentMethods> */}
                    </Col>
                </Row>
            </GridContainer>

            <FooterRightsReserved >
                <p>® {new Date().getFullYear()} devCursos. Todos os direitos reservados</p>
            </FooterRightsReserved>
        </Container>
    );
}