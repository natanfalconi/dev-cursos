import { Col, Row, Container as GridContainer } from "react-grid-system";
import { Container, ContainerImage, TitleContainer } from "./styles";
import leonardo from '../../../../public/img/leonardo.jpg'
import DevBg from '../../../../public/svg/dev.svg'
import { useViewport } from "@/src/providers/ViewportProvider";
import Image from "next/image";

export function History() {
    const { isMobile } = useViewport();

    console.log('isMobile', isMobile)

    return (
        <Container>
            <GridContainer >
                <Row style={{ display: 'flex', alignItems: 'center' }}>
                    <Col md={6}>
                        <ContainerImage>
                            <DevBg />
                        </ContainerImage>
                    </Col>

                    <Col md={6}>
                        <TitleContainer>
                            <ContainerImage>
                                <img src={leonardo.src} alt='imagem do instrutor' />
                            </ContainerImage>

                            <span>Quem será seu instrutor?</span> <br />

                            <h2>Leonardo Moura Leitao</h2>
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
                    </Col>
                </Row>
            </GridContainer>
        </Container>
    )
}