import { Col, Row, Container as GridContainer } from "react-grid-system";
import { CircleArrow, Container, ContainerImage, TitleContainer } from "./styles";
import leonardo from '../../../../public/img/leonardo.jpg'
import { useViewport } from "@/src/providers/ViewportProvider";

export function History() {
    const isMobile = useViewport();

    return (
        <Container>
            <GridContainer >
                <Row style={{ display: 'flex', alignItems: 'center' }}>
                    <Col md={6}>
                        <ContainerImage>
                            {/* <img src={leonardo.src} alt='imagem do instrutor' /> */}
                        </ContainerImage>
                    </Col>

                    <Col md={6}>
                        <TitleContainer>
                            <h2>
                                <span>Quem será seu instrutor?</span>
                                Leonardo Moura Leitao
                            </h2>

                            <h6>Arquiteto de Software</h6>

                            <p>
                                Leonardo Leitão é graduado em Engenharia Elétrica pela Universidade Federal do Ceará e
                                Mestre em Informática Aplicada pela Universidade de Fortaleza, na qual trabalhou com Integração de Redes de
                                Sensores sem Fio e Computação em Nuvem.
                                <br />

                                <br />
                                Há quinze anos atua na área como desenvolvedor de softwares e trabalhou na DATAPREV como arquiteto,
                                desenvolvendo sistemas para o INSS. Professor de desenvolvimento de software há mais de doze anos, criou a
                                Cod3r Ensino que já treinou mais de 350.000 alunos.
                            </p>
                        </TitleContainer>

                        {!isMobile && (
                            <CircleArrow>
                                {/* <FontAwesomeIcon icon={faArrowDown} color="#fff" /> */}
                            </CircleArrow>
                        )}
                    </Col>
                </Row>
            </GridContainer>
        </Container>
    )
}