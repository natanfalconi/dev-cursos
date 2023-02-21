import { ContainerDesktop, ContantHeader, Navbar, NavLinkMobile, NavLinks, NavListMobile, PromotionTitle } from './styles';
import { Row, Col, Container as GridContainer } from 'react-grid-system';
import { useViewport } from '@/src/providers/ViewportProvider';
import LogoDev from '../../../../public/logo.png'
import { useEffect, useState } from 'react';

export function Header() {
  const isMobile = useViewport();

  const [time, setTime] = useState(480); // 8 minutos em segundos

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => prevTime - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(time / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
  const seconds = (time % 60).toString().padStart(2, '0');

  return (
    <ContainerDesktop>
      <GridContainer>
        <Row>
          <Col style={isMobile && { paddingRight: 0 }}>
            <ContantHeader>
              <a href="#inicio">
                {/* <img src={LogoDev.src} alt="logo do site - dev cursos" /> */}
              </a>

              <PromotionTitle>
                <h4>
                  promoção acaba em {isMobile ? <br /> : ''} <span>{hours}:{minutes}:{seconds}</span>
                </h4>
              </PromotionTitle>

              <Navbar>
                <NavLinks>
                  <a href="#inicio">Início</a>
                  <a href="#beneficios">Benefícios</a>
                  <a href="#depoimentos">Depoimentos</a>
                  <a href='#shopping'>Ver preços</a>
                </NavLinks>
              </Navbar>
            </ContantHeader>
          </Col>
        </Row>
      </GridContainer>
    </ContainerDesktop >
  );
}