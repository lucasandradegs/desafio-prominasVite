import { Container } from "./style"

export function SixthSectionCard({ image, title }) {
    return (
        <Container>
            <div className="cardTitle">
                <img src={image} alt="Imagem do card" />
                <h2>{title}</h2>
            </div>
        </Container>
    )
}
