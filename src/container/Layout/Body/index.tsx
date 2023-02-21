import { ReactNode } from "react";
import { Container } from "./styles";

export interface BodyProps {
  children?: ReactNode;
}

export function Body({ children }: BodyProps) {
    return (
        <Container className="layout__body">{ children }</Container>
    );
}