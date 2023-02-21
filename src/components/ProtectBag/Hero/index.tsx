// import { media } from '@main/stitches.config';
// import { useMediaQuery } from '@react-hook/media-query';
import { Container as GridContainer, Row, Col } from 'react-grid-system';
import { CircleArrow, Container, ContainerText, ContentText, LogoProtect } from './styles';
// import ProtecBag from '../../../../public/svg/protect-bag.svg';
import { useViewport } from '@/src/providers/ViewportProvider';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowDown } from '@fortawesome/pro-solid-svg-icons';

export function ProtectBag() {
    const isMobile = useViewport();

    return (
        <>
            <Container id='inicio'>
                <GridContainer style={{ zIndex: 1 }}>
                    <Row>
                        <Col md={12}>
                            <ContainerText>
                                <h2></h2>

                                <ContentText>
                                    <h4>Quer se tornar um programador de sucesso, mas não sabe por onde começar? </h4>
                                    <p>Comece agora a sua jornada na programação web</p>
                                </ContentText>
                            </ContainerText>
                        </Col>
                    </Row>
                </GridContainer>

                <CircleArrow>
                    {/* <FontAwesomeIcon icon={faArrowDown} color="#fff" /> */}
                </CircleArrow>
                {isMobile ? (
                    <></>
                    // <LogoProtect>
                    //     <ProtecBag />
                    // </LogoProtect>
                ) : (
                    <></>
                )}

            </Container>
        </>
    )
}