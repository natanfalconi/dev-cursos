import { Container as GridContainer, Row, Col } from 'react-grid-system';
import { CircleArrow, Container, ContainerText, ContentText } from './styles';
import { useViewport } from '@/src/providers/ViewportProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons/faArrowDown';

export function Hero() {
    const isMobile = useViewport();

    return (
        <>
            <Container id='inicio'>
                <GridContainer style={{ zIndex: 1 }}>
                    <Row>
                        <Col md={12}>
                            <ContainerText>
                                <h2>Alcance seu potencial</h2>

                                <ContentText>
                                    <h4>Quer se tornar um programador de sucesso, mas não sabe por onde começar? </h4>
                                    <p>Comece agora a sua jornada na programação web</p>
                                </ContentText>
                            </ContainerText>
                        </Col>
                    </Row>
                </GridContainer>

                <CircleArrow>
                    <FontAwesomeIcon icon={faArrowDown} color="#fff" />
                </CircleArrow>
            </Container>
        </>
    )
}