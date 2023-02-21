import { Col, Row, Container as GridContainer } from "react-grid-system";
import { ButtonBag, CheckboxArea, Container, FormBag, SelectContainer, SizeBag, TitleContainer, ValueBag } from "./styles";
import Checkbox from "@components/Checkbox";
import priceMobile from '../../../../public/img/price-mobile.webp'
import bagsForm from '../../../../public/img/bags-form.webp'

import { useMediaQuery } from "@react-hook/media-query";
import { media } from "@main/stitches.config";

export function ShoppingProtectBag() {
    const isMobile = useMediaQuery(media.xs);

    return (
        <Container id='shopping'>
            <TitleContainer>
                <h2>Compre agora e evite pagar mais caro nos aeroportos!</h2>
            </TitleContainer>

            <GridContainer >
                <Row>
                    <Col md={6} style={isMobile && { padding: 0 }}>
                        {isMobile && (
                            <img src={priceMobile.src} />
                        )}
                    </Col>

                    <Col md={6} style={isMobile && { padding: 0 }}>
                        <FormBag>
                            <form>
                                <h2>Proteção de Mala - <span>Lacração</span></h2>
                                <hr />

                                <ValueBag>
                                    <h4>de R$ 120 por</h4>
                                    <h5>R$ 80 <span>/MG</span></h5>
                                </ValueBag>

                                <SelectContainer>
                                    <label >
                                        Tamanho
                                    </label>
                                    <select name="size" id="">
                                        <option value="">M/G</option>
                                    </select>

                                    <label>
                                        Quantidade de malas
                                    </label>
                                    <select name="size" id="">
                                        <option value="">01</option>
                                    </select>
                                </SelectContainer>

                                <SizeBag>
                                    <img src={bagsForm.src} alt="" />

                                    <div>
                                        {isMobile ? (
                                            <>
                                                <p><b>M/G:</b> Bagagem com no máximo:</p>
                                                <span>A: 55 cm | L: 35 cm | P: 25 cm</span>
                                            </>
                                        ) : (
                                            <>
                                                <p><b>M/G:</b> Bagagem com no máximo:</p>
                                                <span>Altura: 55 cm | Largura: 35 cm | Profundidade: 25 cm</span>
                                            </>
                                        )}
                                    </div>
                                </SizeBag>

                                <CheckboxArea>
                                    <Checkbox
                                        id="validate"
                                        label="Promoção válida somente para o aeroporto de Guarulhos"
                                        size={true}
                                    />
                                </CheckboxArea>
                                <hr />

                                <ButtonBag >
                                    <a >
                                        Não quero comprar
                                    </a>

                                    <button>
                                        Comprar agora
                                    </button>
                                </ButtonBag>
                            </form>
                        </FormBag>
                    </Col>
                </Row>
            </GridContainer>
        </Container>
    )
}