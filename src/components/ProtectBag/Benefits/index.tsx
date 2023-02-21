// import { media } from '@main/stitches.config';
// import { useMediaQuery } from '@react-hook/media-query';
import { Container as GridContainer, Row, Col } from 'react-grid-system';
import { CircleArrow, Container, ContentCard, ContentCardItem, ImageBackground, TitleContainer } from './styles';
// import womanBag from '../../../../public/img/woman-bag.webp'
// import bag from '../../../../public/img/bag.webp'
// import imgMala from '../../../../public/img/img-mala.webp'
// import { faArrowDown } from '@fortawesome/pro-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import ellipse from '../../../../public/img/ellipse.webp'
import { useViewport } from '@/src/providers/ViewportProvider';

export function BenefitsProtectBag() {
    const isMobile = useViewport();

    const CardBenefits = [
        { id: 1, image: '#', title: 'Áudio e Vídeo em Alta Definição', description: '587 aulas e 96 horas de conteúdo. Didática comprovada. Investimento garantido.' },
        { id: 2, image: '#', title: 'Certificado de Conclusão', description: 'Ao final você receberá certificado com a carga horária apropriada para conclusão' },
        { id: 3, image: '#', title: 'Suporte Dedicado', description: 'Conte com um time de especialistas e tire todas as suas dúvidas relativas ao curso' },

        { id: 4, image: '#', title: 'Sem prazo de expiração', description: 'Assista o curso no seu tempo, sem pressa, sem nenhum prazo para expirar.' },
        { id: 5, image: '#', title: 'Recursos para download', description: 'Baixe arquivos e artigos para melhor desenvolvimento do curso' },
        { id: 6, image: '#', title: 'Acesso Mobile', description: 'Acesse por qualquer dispositivo: Computador, celular e Ipad' },
    ];

    return (
        <>
            <Container id='beneficios'>
                <GridContainer style={{ zIndex: 1 }}>
                    <Row>
                        <Col md={12}>
                            <TitleContainer>
                                <h2>Aprenda a criar aplicações web <br />
                                    e conquiste o seu lugar no <span> mercado de trabalho</span></h2>
                            </TitleContainer>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={12}>
                            <ContentCard>
                                {CardBenefits.map((card) => (
                                    <ContentCardItem key={card.id}>
                                        <img src={card.image} />

                                        <div>
                                            <h3>{card.title}</h3>
                                            <p>{card.description}</p>
                                        </div>
                                    </ContentCardItem>
                                ))}
                            </ContentCard>
                        </Col>

                        {!isMobile && (
                            <Col md={12} style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
                                <CircleArrow>
                                    {/* <FontAwesomeIcon icon={faArrowDown} color="#fff" /> */}
                                </CircleArrow>
                            </Col>
                        )}
                    </Row>
                </GridContainer>

                <ImageBackground>
                    {/* <img src={ellipse.src} /> */}
                </ImageBackground>
            </Container>
        </>
    )
}