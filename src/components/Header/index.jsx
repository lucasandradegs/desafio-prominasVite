import { Container } from "./style"

export function Header() {

    return (
        <Container>
            <div className="topSideMobile">
                <img src="/images/arrow.svg" alt="" />
                <img src="/images/logo.svg" alt="" />
                <img src="/images/darkmode.svg" alt="" />
            </div>
            
            <div className="topSideDesktop">
                <p>Graduação</p>
                <p>Segunda Graduação</p>
                <p>Pós-Graduação</p>
                <p>Disciplinas Isoladas</p>
                <p>Cursos Grátis</p>
                <p>Bolsas de Estudo</p>
                <img src="/images/darkmode.svg" alt="" />
            </div>
        </Container>
    )
}