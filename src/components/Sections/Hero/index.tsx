import { Container as GridContainer, Row, Col } from 'react-grid-system';
import { CircleArrow, Container, ContainerText, ContentText } from './styles';
import { useViewport } from '@/src/providers/ViewportProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons/faArrowDown';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { Options } from '../Shopping/styles';

export function Hero() {
    const isMobile = useViewport();

    return (
        <>
            <Container id='inicio'>
                <GridContainer style={{ zIndex: 1 }}>
                    <Row>
                        <Col md={12}>
                            <ContainerText>
                                <h2>2023 com o pé direito?</h2>

                                <ContentText>
                                    <h4>Aprenda a ser um programador mais do que completo </h4>
                                    <p>Comece agora a sua jornada na programação web</p>
                                </ContentText>
                            </ContainerText>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={12} >
                            <Options>
                                <a href="https://www.cod3r.com.br/?ref=96e4e9" target='_blank' rel="noreferrer">
                                    Quero ser um profissional completo
                                    <FontAwesomeIcon icon={faArrowRight} color="#fff" />
                                </a>
                            </Options>
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