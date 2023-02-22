import { ContainerDesktop, ContantHeader, Navbar, NavLinkMobile, NavLinks, NavListMobile, PromotionTitle } from './styles';
import { Row, Col, Container as GridContainer } from 'react-grid-system';
import { useViewport } from '@/src/providers/ViewportProvider';
import LogoDev from '../../../../public/logo.png'
import LogoDev2 from '../../../../public/svg/logo-dev.svg'
import { useEffect, useState } from 'react';

export function Header() {
  const isMobile = useViewport();

  const [remainingSeconds, setRemainingSeconds] = useState(15 * 60);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);
    if (remainingSeconds === 0) clearInterval(intervalId);
    return () => clearInterval(intervalId);
  }, [remainingSeconds]);

  const hours = Math.floor(remainingSeconds / 3600);
  const minutes = Math.floor((remainingSeconds % 3600) / 60);
  const seconds = remainingSeconds % 60;

  const formattedTime = `${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""
    }${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

  return (
    <ContainerDesktop>
      <GridContainer>
        <Row>
          <Col style={isMobile && { padding: 0 }}>
            <ContantHeader>
              <a href="#inicio">
                <LogoDev2 />
              </a>

              <PromotionTitle>
                <h4>
                  promoção termina em <span>{formattedTime}</span>
                </h4>
              </PromotionTitle>

              <Navbar>
                <NavLinks>
                  <a href="#inicio">Início</a>
                  <a href="#beneficios">Benefícios</a>
                  <a href="#faq">Duvidas</a>
                  <a href='#cursos'>Ver cursos</a>
                </NavLinks>
              </Navbar>
            </ContantHeader>
          </Col>
        </Row>
      </GridContainer>
    </ContainerDesktop >
  );
}