import Image from "next/image";
import { Col, Row, Container as GridContainer } from "react-grid-system";
import { CardFeedback, Container, ContentCard, FeedbackImage, FeedbackText, TitleContainer } from "./styles";
import womanFeedback from '../../../../public/img/woman-feedback.webp'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/pro-solid-svg-icons/faQuoteRight";

import dynamic from 'next/dynamic'
import { useMediaQuery } from "@react-hook/media-query";
import { media } from "@main/stitches.config";
const CarouselPrevNextCard = dynamic(() => import("../../../components/CarouselPrevNextCard"), {
    ssr: false
});

const feedbackCard = [
    { id: 1, icon: faQuoteRight, image: womanFeedback.src, feedback: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', author: 'Lora Smith' },
    { id: 2, icon: faQuoteRight, image: womanFeedback.src, feedback: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', author: 'Lora Smith' },
    { id: 3, icon: faQuoteRight, image: womanFeedback.src, feedback: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', author: 'Lora Smith' },
    { id: 4, icon: faQuoteRight, image: womanFeedback.src, feedback: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', author: 'Lora Smith' },
]

export function FeedbackProtectBag() {
    const isMobile = useMediaQuery(media.xs);

    const feedbackList = [
        {
            component: (
                <CardFeedback>
                    <FeedbackImage >
                        <FontAwesomeIcon icon={faQuoteRight} size='2x' />
                        <Image src={womanFeedback.src} width={56} height={56} />
                    </FeedbackImage>

                    <FeedbackText>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                        <h6>Lora Smith</h6>
                    </FeedbackText>
                </CardFeedback>
            ),
        },
        {
            component: (
                <CardFeedback>
                    <FeedbackImage >
                        <FontAwesomeIcon icon={faQuoteRight} size='2x' />
                        <Image src={womanFeedback.src} width={56} height={56} />
                    </FeedbackImage>

                    <FeedbackText>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                        <h6>Lora Smith</h6>
                    </FeedbackText>
                </CardFeedback>
            ),
        },
        {
            component: (
                <CardFeedback>
                    <FeedbackImage >
                        <FontAwesomeIcon icon={faQuoteRight} size='2x' />
                        <Image src={womanFeedback.src} width={56} height={56} />
                    </FeedbackImage>

                    <FeedbackText>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                        <h6>Lora Smith</h6>
                    </FeedbackText>
                </CardFeedback>
            ),
        },
        {
            component: (
                <CardFeedback>
                    <FeedbackImage >
                        <FontAwesomeIcon icon={faQuoteRight} size='2x' />
                        <Image src={womanFeedback.src} width={56} height={56} />
                    </FeedbackImage>

                    <FeedbackText>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                        <h6>Lora Smith</h6>
                    </FeedbackText>
                </CardFeedback>
            ),
        },
    ];

    return (
        <Container id="depoimentos">
            <GridContainer >
                <Row >
                    <Col md={12}>
                        <TitleContainer>
                            <h2>O que nossos clientes dizem sobre nós</h2>
                        </TitleContainer>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        {isMobile ? (
                            <CarouselPrevNextCard
                                componentList={feedbackList}
                                loop={false}
                                nameCarousel="benefits"
                                spaceBetween={12}
                                swiperClassName=""
                                widthSwiper="90"
                            />
                        ) : (
                            <ContentCard>
                                {feedbackCard.map((card) => (
                                    <CardFeedback key={card.id}>
                                        <FeedbackImage >
                                            <FontAwesomeIcon icon={card.icon} size='2x' />
                                            <Image src={card.image} width={56} height={56} />
                                        </FeedbackImage>

                                        <FeedbackText>
                                            <p>{card.feedback}</p>

                                            <h6>{card.author}</h6>
                                        </FeedbackText>
                                    </CardFeedback>
                                ))}
                            </ContentCard>
                        )}
                    </Col>
                    {/* <Col md={12}>
                        <ContentCard>
                            {feedbackCard.map((card) => (
                                <CardFeedback key={card.id}>
                                    <FeedbackImage >
                                        <FontAwesomeIcon icon={card.icon} size='2x' />
                                        <Image src={card.image} width={56} height={56} />
                                    </FeedbackImage>

                                    <FeedbackText>
                                        <p>{card.feedback}</p>

                                        <h6>{card.author}</h6>
                                    </FeedbackText>
                                </CardFeedback>
                            ))}
                        </ContentCard>
                    </Col> */}
                </Row>

            </GridContainer>
        </Container>
    )
}