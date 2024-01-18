import { Container } from "./style"

export function SeventhSectionCard({ image, title, subtitle }) {
    return (
        <Container>
            <div className="cardTitle">
                <div className="cardStyle">
                    <img className="mobileV" src="/images/v.svg" alt="" />
                    <img className="desktopV" src="/images/vdesk.svg" alt="" />
                </div>
                <div className="cardStyle2">
                    <img className="mobileU" src="/images/u.svg" alt="" />
                    <img className="desktopU" src="/images/udesk.svg" alt="" />
                </div>
                    <img src={image} alt="Imagem do card" />
                <div className="titleAndImage">
                    <h2>{title}</h2>
                    <p>{subtitle}</p>
                </div>
            </div>
        </Container>
    )
}