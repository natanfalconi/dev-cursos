import Image from "next/image";
import { Col, Row, Container as GridContainer } from "react-grid-system";
import { CardCourses, Container, ContentCard, FeedbackImage, FeedbackText, Options, TitleContainer } from "./styles";
// import womanFeedback from '../../../../public/img/woman-feedback.webp'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import react from '../../../../public/img/react.webp'
import allCourses from '../../../../public/img/all-courses.webp'
import javascript from '../../../../public/img/javascript.webp'
import vue from '../../../../public/img/vue.webp'
import next from '../../../../public/img/next.webp'
import js from '../../../../public/img/js.webp'

import dynamic from 'next/dynamic'
import { useViewport } from "@/src/providers/ViewportProvider";
import CarouselPrevNextCard from "../../CarouselPrevNextCard";
// const CarouselPrevNextCard = dynamic(() => import("../../../components/CarouselPrevNextCard"), {
//     ssr: false
// });

const CoursesCard = [
    {
        id: 1,
        image: allCourses.src,
        feedback: 'Acesse a 6500 Aulas e Todo Conteúdo da Plataforma - Novas Aulas Semanais',
        link: 'https://www.cod3r.com.br/bundles/plano-de-assinatura?ref=96e4e9',
    },

    {
        id: 2,
        image: javascript.src,
        feedback: 'Web Moderno com JavaScript COMPLETO + Projetos - 15 Cursos em 1 - Javascript, React, Angular 9, Vue JS, Node, HTML, CSS...',
        link: 'https://www.cod3r.com.br/courses/web-moderno?ref=96e4e9'
    },
    {
        id: 3,
        image: react.src,
        feedback: 'Aprenda React Js, Redux, Webpack, Redux-Form, MongoDB, Express, Node Vários exercícios práticos e Duas Apps do ZERO!',
        link: 'https://www.cod3r.com.br/courses/react-redux-fundamentos-e-2-apps-do-absoluto-zero?ref=96e4e9'
    },
    {
        id: 4,
        image: vue.src,
        feedback: 'VueJS é um framework Javascript fantástico p construir aplicações Frontend! Vue.js mistura o melhor do Angular + React!',
        link: 'https://www.cod3r.com.br/courses/vue?ref=96e4e9'
    },
    {
        id: 5,
        image: next.src,
        feedback: 'Aprenda os principais fundamentos e conceitos do NextJS, e desenvolva uma aplicação completa.',
        link: 'https://www.cod3r.com.br/courses/nextjs?ref=96e4e9'
    },
    {
        id: 6,
        image: js.src,
        feedback: 'Aprenda a PENSAR como um programador JavaScript e DOMINE o paradigma FUNCIONAL e a programação REATIVA!',
        link: 'https://www.cod3r.com.br/courses/javascript-funcional-reativo?ref=96e4e9'
    },
]

export function Courses() {
    const isMobile = useViewport();

    return (
        <Container id="cursos">
            <GridContainer >
                <Row >
                    <Col md={12}>
                        <TitleContainer>
                            <h2>Cursos mais Procurados</h2>
                        </TitleContainer>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <ContentCard>
                            {CoursesCard.map((card) => (
                                <CardCourses key={card.id}>
                                    <FeedbackImage >
                                        <img src={card.image} alt='' />
                                    </FeedbackImage>

                                    <FeedbackText>
                                        <p>{card.feedback}</p>

                                        <a href={card.link} target='_blank' rel="noreferrer">
                                            Quero aprender agora
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </a>
                                    </FeedbackText>
                                </CardCourses>
                            ))}
                        </ContentCard>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <Options>
                            <a href="https://www.cod3r.com.br/?ref=96e4e9" target='_blank' rel="noreferrer">
                                Veja todas as opções disponíveis
                            </a>
                        </Options>
                    </Col>
                </Row>

            </GridContainer>
        </Container>
    )
}