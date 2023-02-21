import Image from "next/image";
import { Col, Row, Container as GridContainer } from "react-grid-system";
import { CardFeedback, Container, ContentCard, FeedbackImage, FeedbackText, TitleContainer } from "./styles";
// import womanFeedback from '../../../../public/img/woman-feedback.webp'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons/faQuoteRight";
import react from '../../../../public/img/react.webp'
import allCourses from '../../../../public/img/all-courses.webp'
import javascript from '../../../../public/img/javascript.webp'
import vue from '../../../../public/img/vue.webp'

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
        link: '',
    },

    { id: 2, image: javascript.src, feedback: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', author: 'Lora Smith' },
    { id: 3, image: react.src, feedback: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', author: 'Lora Smith' },

    { id: 4, image: vue.src, feedback: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', author: 'Lora Smith' },
    { id: 5, image: vue.src, feedback: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', author: 'Lora Smith' },
]

export function Courses() {
    const isMobile = useViewport();

    const coursesList = [
        {
            component: (
                <CardFeedback>
                    <FeedbackImage >
                        {/* <FontAwesomeIcon icon={faQuoteRight} size='2x' /> */}
                        {/* <Image src={womanFeedback.src} width={56} height={56} alt='imagem do curso' /> */}
                    </FeedbackImage>

                    <FeedbackText>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                        <h6>Lora Smith</h6>
                    </FeedbackText>
                </CardFeedback>
            ),
        },
        // {
        //     component: (
        //         <CardFeedback>
        //             <FeedbackImage >
        //                 <FontAwesomeIcon icon={faQuoteRight} size='2x' />
        //                 <Image src={womanFeedback.src} width={56} height={56} />
        //             </FeedbackImage>

        //             <FeedbackText>
        //                 <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

        //                 <h6>Lora Smith</h6>
        //             </FeedbackText>
        //         </CardFeedback>
        //     ),
        // },
        // {
        //     component: (
        //         <CardFeedback>
        //             <FeedbackImage >
        //                 <FontAwesomeIcon icon={faQuoteRight} size='2x' />
        //                 <Image src={womanFeedback.src} width={56} height={56} />
        //             </FeedbackImage>

        //             <FeedbackText>
        //                 <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

        //                 <h6>Lora Smith</h6>
        //             </FeedbackText>
        //         </CardFeedback>
        //     ),
        // },
        // {
        //     component: (
        //         <CardFeedback>
        //             <FeedbackImage >
        //                 <FontAwesomeIcon icon={faQuoteRight} size='2x' />
        //                 <Image src={womanFeedback.src} width={56} height={56} />
        //             </FeedbackImage>

        //             <FeedbackText>
        //                 <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

        //                 <h6>Lora Smith</h6>
        //             </FeedbackText>
        //         </CardFeedback>
        //     ),
        // },
    ];

    return (
        <Container id="cursos">
            <GridContainer >
                <Row >
                    <Col md={12}>
                        <TitleContainer>
                            <h2>Curso Mais Procurados</h2>
                        </TitleContainer>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        {isMobile ? (
                            <></>
                            // <CarouselPrevNextCard
                            //     componentList={coursesList}
                            //     loop={false}
                            //     nameCarousel="courses"
                            //     spaceBetween={12}
                            //     swiperClassName=""
                            //     widthSwiper="90"
                            // />
                        ) : (
                            <></>
                        )}
                        <ContentCard>
                            {CoursesCard.map((card) => (
                                <CardFeedback key={card.id}>
                                    <FeedbackImage >
                                        <img src={card.image} alt='' />
                                    </FeedbackImage>

                                    <FeedbackText>
                                        <p>{card.feedback}</p>

                                        <a href={card.link} target='_blank'>Comprar agora</a>
                                    </FeedbackText>
                                </CardFeedback>
                            ))}
                        </ContentCard>
                    </Col>
                </Row>

            </GridContainer>
        </Container>
    )
}