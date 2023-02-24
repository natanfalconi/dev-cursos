import { Container as GridContainer, Row, Col } from 'react-grid-system';
import { Container, ContentCard, ContentCardItem, SizeCarousel, TitleContainer } from './styles';
import { faVideo } from '@fortawesome/free-solid-svg-icons/faVideo';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons/faGraduationCap';
import { faUsers } from '@fortawesome/free-solid-svg-icons/faUsers';
import { faClock } from '@fortawesome/free-solid-svg-icons/faClock';
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload';
import { faMobile } from '@fortawesome/free-solid-svg-icons/faMobile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useViewport } from '@/src/providers/ViewportProvider';
import CarouselPrevNextCard from '../../CarouselPrevNextCard';

const CardBenefits = [
    { id: 1, icon: faVideo, title: 'Áudio e Vídeo em Alta Definição', description: '587 aulas e 96 horas de conteúdo. Didática comprovada. Investimento garantido.' },
    { id: 2, icon: faGraduationCap, title: 'Certificado de Conclusão', description: 'Ao final você receberá certificado com a carga horária apropriada para conclusão.' },
    { id: 3, icon: faUsers, title: 'Suporte Dedicado', description: 'Conte com um time de especialistas e tire todas as suas dúvidas relativas ao curso.' },

    { id: 4, icon: faClock, title: 'Sem prazo de expiração', description: 'Assista o curso no seu tempo, sem pressa, sem nenhum prazo para expirar.' },
    { id: 5, icon: faDownload, title: 'Recursos para download', description: 'Baixe arquivos e artigos para melhor desenvolvimento do curso.' },
    { id: 6, icon: faMobile, title: 'Acesso Mobile', description: 'Acesse por qualquer dispositivo: Computador, celular e Ipad.' },
];

export function Benefits() {
    const { isMobile } = useViewport();

    const benefistList = [
        {
            component: (
                <ContentCardItem>
                    <FontAwesomeIcon icon={faVideo} size='3x' color='#0989AB' />

                    <div>
                        <h3>Áudio e Vídeo em Alta Definição</h3>
                        <p>587 aulas e 96 horas de conteúdo. Didática comprovada. Investimento garantido.</p>
                    </div>
                </ContentCardItem>
            ),
        },
        {
            component: (
                <ContentCardItem>
                    <FontAwesomeIcon icon={faGraduationCap} size='3x' color='#0989AB' />

                    <div>
                        <h3>Certificado de Conclusão</h3>
                        <p>Ao final você receberá certificado com a carga horária apropriada para conclusão.</p>
                    </div>
                </ContentCardItem>
            ),
        },
        {
            component: (
                <ContentCardItem>
                    <FontAwesomeIcon icon={faUsers} size='3x' color='#0989AB' />

                    <div>
                        <h3>Suporte Dedicado</h3>
                        <p>Conte com um time de especialistas e tire todas as suas dúvidas relativas ao curso.</p>
                    </div>
                </ContentCardItem>
            ),
        },
        {
            component: (
                <ContentCardItem>
                    <FontAwesomeIcon icon={faClock} size='3x' color='#0989AB' />

                    <div>
                        <h3>Sem prazo de expiração</h3>
                        <p>Assista o curso no seu tempo, sem pressa, sem nenhum prazo para expirar.</p>
                    </div>
                </ContentCardItem>
            ),
        },
        {
            component: (
                <ContentCardItem>
                    <FontAwesomeIcon icon={faDownload} size='3x' color='#0989AB' />

                    <div>
                        <h3>Recursos para download</h3>
                        <p>Baixe arquivos e artigos para melhor desenvolvimento do curso.</p>
                    </div>
                </ContentCardItem>
            ),
        },
        {
            component: (
                <ContentCardItem>
                    <FontAwesomeIcon icon={faMobile} size='3x' color='#0989AB' />

                    <div>
                        <h3>Acesso Mobile</h3>
                        <p>Acesse por qualquer dispositivo: Computador, celular e Ipad.</p>
                    </div>
                </ContentCardItem>
            ),
        },
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
                            {isMobile ? (
                                <SizeCarousel>
                                    <CarouselPrevNextCard
                                        componentList={benefistList}
                                        loop={false}
                                        nameCarousel="courses"
                                        spaceBetween={12}
                                        swiperClassName=""
                                        widthSwiper="90"
                                    />
                                </SizeCarousel>
                            ) : (
                                <ContentCard>
                                    {CardBenefits.map((card) => (
                                        <ContentCardItem key={card.id}>
                                            <FontAwesomeIcon icon={card.icon} size='3x' color='#0989AB' />

                                            <div>
                                                <h3>{card.title}</h3>
                                                <p>{card.description}</p>
                                            </div>
                                        </ContentCardItem>
                                    ))}
                                </ContentCard>
                            )}
                        </Col>
                    </Row>
                </GridContainer>
            </Container>
        </>
    )
}