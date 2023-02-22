import { Col, Row, Container as GridContainer } from "react-grid-system";
import FeaturesCollapse from "../../FeaturesCollapse";
import { Container, TitleContainer } from "./styles";

const features = [
    {
        title: 'Posso começar mesmo sem nenhum conhecimento?',
        description: 'Com certeza! O curso foi feito mesmo para aqueles que nunca tiveram contato com o assunto. Você vai aprender do zero, tudo que precisa para dominar o conteúdo do curso.',
        icon: undefined,
    },
    {
        title: 'Após a compra do curso tenho prazo para poder assistir?',
        description: 'Não, o curso pode ser assistido a qualquer tempo sem limite de prazo.',
        icon: undefined,
    },
    {
        title: 'O curso oferece certificado?',
        description: 'Sim, ao final do curso você receberá um certificado baseado na carga horária pra concluir o curso.',
        icon: undefined,
    },
    {
        title: 'Existe suporte para as minhas dúvidas?',
        description: 'Sim, temos um time de suporte pronto pra tirar as dúvidas relativas ao conteúdo do curso.',
        icon: undefined,
    },
    {
        title: 'Adquirindo o plano de assinatura também terei acesso a este curso?',
        description: 'Sim, o plano de assinatura te dá acesso completo a toda a plataforma.',
        icon: undefined,
    },
    {
        title: 'Eu preciso investir em mais alguma alguma coisa após adquirir o curso?',
        description: 'Não, ao adquirir o curso você tem tudo que precisa para iniciar seus estudos. Todas as ferramentas que utilizamos são grátis.',
        icon: undefined,
    },
    {
        title: 'Eu preciso investir em mais alguma alguma coisa após adquirir o curso?',
        description: 'O curso é 100% em videoaulas através da plataforma de ensino da Cod3r. Uma plataforma completa, onde você tem total controle do seu aprendizado onde e quando quiser.',
        icon: undefined,
    },
]

export function Faq() {
    return (
        <Container id='faq'>
            <GridContainer style={{ zIndex: 1 }}>
                <Row>
                    <Col md={12}>
                        <TitleContainer>
                            <h2>Tire suas principais <span>dúvidas</span> aqui</h2>
                        </TitleContainer>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <FeaturesCollapse features={features} />
                    </Col>
                </Row>
            </GridContainer>
        </Container>

    )
}