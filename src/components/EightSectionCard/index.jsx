import { Container } from "./style"

export function EigthSectionCard({ image, title }) {
    return (
        <Container>
            <div className="cardTitle">
                <img src={image} alt="Imagem do card" />
                <div className="titleAndButton">
                    <h2>{title}</h2>
                    <button>SAIBA MAIS</button>
                </div>
            </div>
        </Container>
    )
}