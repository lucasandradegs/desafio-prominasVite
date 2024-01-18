import { Container } from "./style"

export function DesktopCard({ video, image, name, course }) {
    return (
        <Container>
            <div className="cardTitle">
                <img src={video} alt="Vídeo do aluno" />
                <div className="nameAndImage">
                    <img src={image} alt="Imagem do aluno" />
                    <div className="rightSide">
                        <h2>{name}</h2>
                        <p>{course}</p>
                    </div>
                </div>
                    <img src="/google.svg" alt="" />
            </div>
        </Container>
    )
}