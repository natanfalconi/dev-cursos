import { ReactNode } from "react";
import { Body } from "./Body";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Container } from "./styles";

export interface LayoutProps {
    children?: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <Container>
            <Header />
            <Body>{children}</Body>
            <Footer />
        </Container>
    );
}