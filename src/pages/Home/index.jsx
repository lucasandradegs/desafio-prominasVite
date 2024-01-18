import { useEffect, useState } from "react"
import { DesktopCard } from "../../components/DesktopCard"
import { EigthSectionCard } from "../../components/EightSectionCard"
import { FirstSectionCard } from "../../components/FirstSectionCard"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { SeventhSectionCard } from "../../components/SeventhSectionCard"
import { SixthSectionCard } from "../../components/SixthSectionCard"
import { CardSection, Container, Content, CoursesSection, DesktopFeedback, DesktopQuestions, EighthSection, FeedbackSection, FifthSection, SecondSection, Section, SeventhSection, SixthSection, ThirdSection } from "./style"
import { api } from "../../services/api"


export function Home() {
    const [data, setData] = useState(null)

    useEffect(() => {
      async function fetchBrief() {
        const response = await api.get(`/brief/1`)
        setData(response.data)
        console.log(response.data)
      }
      fetchBrief()
    }, [])

    return (
      <Container>
  
        <Header />
        <Content>
          <div className="navBar">
            <img src="/images/navbar.svg" alt="" />
            <Input
              placeholder="Pesquise por um curso"
            />
          </div>
  
          <div className="desktopContent">
  
            <img src="/images/desktopLogo.svg" alt="" />
            <Input
              placeholder="Pesquise por um curso"
            />
            <div className="menuOptions">
              <p>Nossas Áreas</p>
              <p>Vidas transformadas</p>
              <p>Blog</p>
              <p>FAQ</p>
              <button>JÁ SOU ALUNO</button>
            </div>
  
          </div>
        </Content>
  
        <Section>
          <div className="imageAndTitle">
            <div className="title">
              <h1>CONHEÇA A FACULDADE ÚNICA</h1>
              <p>Criando hoje o seu amanhã.</p>
            </div>
            <img className="bannerMobile" src="/images/background.png" alt="" />
          </div>
  
  
          <div className="desktopSection">
            <h2>CONHEÇA A <br ></br> FACULDADE ÚNICA</h2>
          </div>
          <img className="bannerDesktop" src="/images/desktopBanner.png" alt="banner versão desktop" />
  
        </Section>
  
  
  
        <SecondSection>
          <div className="imageMsg">
            <h2>CRIANDO HOJE SEU AMANHÃ!</h2>
          </div>
          <img className="mobileBanner" src="/images/mensagem.png" alt="" />
  
          <div className="desktopSection">
            <h2>CRIANDO HOJE O SEU AMANHÃ!</h2>
          </div>
          <img className="desktopBanner" src="/images/blackDesktop.png" alt="" />
        </SecondSection>
  
        <ThirdSection>
          <div className="sectionTitle">
            <h2>Perfeita para você!</h2>
            <p>Há mais de 22 anos, a Faculdade Única transforma vidas por meio da educação. Com base na ética e na responsabilidade social, com um preço justo e acessível, utilizamos a tecnologia e a inovação para ampliar as possibilidades de ensino de milhares de alunos espalhados por todo o país.</p>
          </div>
        </ThirdSection>
  
        <CardSection>
          <div className="cardDisplay">
            <FirstSectionCard image="/images/diploma.png" title="+ de 489 mil Alunos certificados" />
            <FirstSectionCard image="/images/brasil.png" title="+ de 250 Polos em todo Brasil" />
            <FirstSectionCard image="/images/curso-online.png" title="+ de 900 cursos em diversas modalidades de ensino" />
          </div>
        </CardSection>
  
        <FifthSection>
          <div className="fifthSectionTitle">
            <div className="desktopTitle">
              <h2>Construa seu amanhã conosco</h2>
              <p>Com foco em inovação e qualidade, seja nos cursos presenciais ou online, utilizamos as mais modernas tecnologias para uma comunicação mais eficiente e eficaz entre professor e aluno, destinados à formação de profissionais qualificados, capazes de transformar a realidade socioeconômica do país.</p>
            </div>
            <img className="mobileNotebook" src="/images/notebook.png" alt="" />
            <img className="desktopNotebook" src="/images/notebookDkt.png" alt="" />
          </div>
        </FifthSection>
  
        <SixthSection>
          <div className="sixthSectionTitle">
            <h2>Abra novas portas para o seu futuro</h2>
            <div className="cardWithTitle">
              <img src="/images/card1.png" alt="" />
              <SixthSectionCard image="/images/card2.png" title="+ de 2.500 empresas e órgãos públicos conveniados" />
            </div>
            <div className="cardWithTitleDesktop">
              <SixthSectionCard image="/images/card1desk.png" title="Cursos com nota máxima na avaliação do MEC" />
              <SixthSectionCard image="/images/card2desk.png" title="+ de 2.500 empresas e órgãos públicos conveniados" />
              <SixthSectionCard image="/images/card3desk.png" title="Estágio remunerado desde os primeiros períodos" />
              <SixthSectionCard image="/images/card4desk.png" title="Professores mestres e doutores" />
            </div>
            <div className="cardsDots">
              <img className="dotsMobile" src="/images/dots.svg" alt="" />
              <img className="dotsDesktop" src="/images/dotsdesk.svg" alt="" />
            </div>
          </div>
        </SixthSection>
  
        <SeventhSection>
          <div className="seventhSectionTitle">
            <h2>Mais que educação, uma transformação</h2>
            <div className="cardWithTitle">
              <SeventhSectionCard image="/images/missao.png" title="Missão" subtitle="Promover a transformação humana, desenvolvendo competências e habilidades por meio de educação com propósito e tecnologia." />
              <SeventhSectionCard image="/images/visao.png" title="Visão" subtitle="Ser uma instituição educacional de referência no Brasil, reconhecida pela excelência de seus cursos, alunos e profissionais." />
              <SeventhSectionCard image="/images/valores.png" title="Valores" subtitle="Excelência e qualidade, ética e honestidade, transformação social, autonomia responsável." />
            </div>
            <div className="cardWithTitleDesktop">
              <SeventhSectionCard image="/images/missaodesk.png" title="Missão" subtitle="Promover a transformação humana, desenvolvendo competências e habilidades por meio de educação com propósito e tecnologia." />
              <SeventhSectionCard image="/images/visaodesk.png" title="Visão" subtitle="Ser uma instituição educacional de referência no Brasil, reconhecida pela excelência de seus cursos, alunos e profissionais." />
              <SeventhSectionCard image="/images/valoresdesk.png" title="Valores" subtitle="Excelência e qualidade, ética e honestidade, transformação social, autonomia responsável." />
            </div>
          </div>
        </SeventhSection>
  
        <EighthSection>
          <div className="eighthSectionTitle">
            <h2>Sua jornada é Única</h2>
            <p>Escolha a melhor modalidade para você</p>
            <div className="eighthSectionCards">
              <EigthSectionCard image="/images/photo1.png" title="GRADUAÇÃO" />
              <EigthSectionCard image="/images/photo2.png" title="PÓS ONLINE" />
              <EigthSectionCard image="/images/photo3.png" title="SEGUNDA GRADUAÇÃO" />
              <EigthSectionCard image="/images/photo4.png" title="DISCIPLINAS ISOLADAS" />
            </div>
  
            <div className="desktopCardSection">
              <EigthSectionCard image="/images/alunoDesk.png" title="GRADUAÇÃO" />
              <EigthSectionCard image="/images/aluno2desk.png" title="PÕS ONLINE" />
              <EigthSectionCard image="/images/aluno3desk.png" title="SEGUNDA GRADUAÇÃO" />
              <EigthSectionCard image="/images/aluno4desk.png" title="DISCIPLINAS ISOLADAS" />
            </div>
          </div>
        </EighthSection>
  
        <FeedbackSection>
          <div className="feedbackSectionTitle">
            <h2>Quem faz a escolha certa, não se arrepende</h2>
            <img src="/images/aluno.png" alt="" />
          </div>
          <img className="leftArrow" src="/images/leftArrow.svg" alt="" />
          <img className="rightArrow" src="/images/rightArrow.svg" alt="" />
          <div className="feedbackMessage">
            <div className="messageAndGoogle">
              <p>"{data}"</p>
              <div className="photoAndName">
                <img src="/images/aluno2.png" alt="" />
                <div className="textContainer">
                  <h4>TIAGO COSTA DA SILVA</h4>
                  <p>Segunda Graduação em Física</p>
                </div>
              </div>
              <img src="/images/google.svg" alt="" />
            </div>
          </div>
          <img className="retangularView" src="/images/retangular.svg" alt="" />
  
        </FeedbackSection>
  
        <DesktopFeedback>
          <div className="feebackSection">
            <div className="background1">
              <img src="/images/vector.svg" alt="" />
            </div>
            <div className="background2">
              <img src="/images/vector2.svg" alt="" />
            </div>
            <div className="feedbackTitle">
              <h2>Lado a lado com a sua evolução</h2>
            </div>
            <div className="feedbackCards">
              <DesktopCard video="/images/desktopCard.png" image="/images/student.png" name="PEDRO ALVARENGA ASSIS" course="Nome do curso" />
              <DesktopCard video="/images/desktopCard.png" image="/images/student.png" name="PEDRO ALVARENGA ASSIS" course="Nome do curso" />
              <DesktopCard video="/images/desktopCard.png" image="/images/student.png" name="PEDRO ALVARENGA ASSIS" course="Nome do curso" />
            </div>
          </div>
        </DesktopFeedback>
  
  
        <DesktopQuestions>
          <div className="titleAndQuestions">
            <h2>Perguntas Frequentes</h2>
            <div className="FAQ">
              <div className="questions">
                <p>O que é Graduação?</p>
                <img src="/images/x.svg" alt="" />
              </div>
              <div className="questions">
                <p>Como funciona a Graduação EaD?</p>
                <img src="/images/x.svg" alt="" />
              </div>
              <div className="questions">
                <p>Por que fazer o EaD?</p>
                <img src="/images/x.svg" alt="" />
              </div>
              <div className="questions">
                <p>Qual faculdade EaD escolher?</p>
                <img src="/images/x.svg" alt="" />
              </div>
              <div className="questions">
                <p>Qual curso EaD fazer?</p>
                <img src="/images/x.svg" alt="" />
              </div>
              <div className="questions">
                <p>Quem faz EaD pode fazer mestrado?</p>
                <img src="/images/x.svg" alt="" />
              </div>
              <div className="questions">
                <p>Quem faz faculdade EaD tem formatura?</p>
                <img src="/images/x.svg" alt="" />
              </div>
            </div>
          </div>
        </DesktopQuestions>
  
        <CoursesSection>
          <div className="sectionTitle">
            <h4>Graduação</h4>
            <div className="coursesDiv">
              <ul className="courseList">
                <div>
                  <li>Administração</li>
                  <li>Análise e Desenvolvimento de Sistemas</li>
                  <li>Artes Visuais</li>
                  <li>Arquitetura e Urbanismo</li>
                  <li>Biblioteconomia</li>
                  <li>Ciência da Computação</li>
                  <li>Ciências Biológicas</li>
                  <li>Ciências Contábeis</li>
                  <li>Ciências Sociais</li>
                  <li>Educação Especial</li>
                </div>
              </ul>
  
              <ul className="courseList2">
                <div>
                  <li>Bacharelado em Educação Física</li>
                  <li>Licenciatura em Educação Física</li>
                  <li>Ensino Religioso</li>
                  <li>Empreendedorismo</li>
                  <li>Engenharia Ambiental e Sanitária</li>
                  <li>Engenharia Civil</li>
                  <li>Engenharia de Controle e Automação</li>
                  <li>Engenharia de Produção</li>
                  <li>Engenharia Elétrica</li>
                  <li>Engenharia Mecânica</li>
                </div>
              </ul>
  
              <ul className="courseList">
                <div>
                  <li>Filosofia</li>
                  <li>Física</li>
                  <li>Geografia</li>
                  <li>Geoprocessamento</li>
                  <li>Gestão Ambiental</li>
                  <li>Gestão de Cidades Inteligentes</li>
                  <li>Gestão de Recursos Humanos</li>
                  <li>Gestão Financeira</li>
                  <li>Gestão Pública</li>
                  <li>História</li>
                </div>
              </ul>
  
              <ul className="courseList2">
                <div>
                  <li>Bacharelado em Letras-Libras</li>
                  <li>Licenciatura em Letras-Libras</li>
                  <li>Letras-Português</li>
                  <li>Letras-Português e Espanhol</li>
                  <li>Letras-Português e Inglês</li>
                  <li>Logística</li>
                  <li>Marketing</li>
                  <li>Matemática</li>
                  <li>Pedagogia</li>
                  <li>Processos Gerenciais</li>
                </div>
              </ul>
  
              <ul className="courseList">
                <div>
                  <li>Psicopedagogia</li>
                  <li>Publicidade e Propaganda</li>
                  <li>Química</li>
                  <li>Segurança no Trabalho</li>
                  <li>Serviço Social</li>
                  <li>Serviços Jurídicos e Notariais</li>
                  <li>Sistemas de Telecomunicações</li>
                  <li>Sistemas para Internet</li>
                  <li>Sistemas de Informação</li>
                  <li>Teologia</li>
                </div>
              </ul>
            </div>
  
            <div className="afterCoursesList">
              <div className="followUs">
                <h4>Siga nossa faculdade:</h4>
                <div className="iconsSection">
                  <img src="/images/facebook.svg" alt="" />
                  <img src="/images/instagram.svg" alt="" />
                  <img src="/images/youtube.svg" alt="" />
                </div>
              </div>
              <div className="appDownload">
                <h4>Baixe nosso App:</h4>
                <div className="storesIcons">
                  <img src="/images/playstore.svg" alt="" />
                  <img src="/images/appstore.svg" alt="" />
                </div>
              </div>
              <div className="mecSection">
                <h4>Consulte aqui o cadastro da Instituição no Sistema e-MEC</h4>
                <img src="/images/mec.png" alt="" />
              </div>
              <div className="mecSectionDesk">
                <h4>Consulte aqui o cadastro da Instituição no Sistema e-MEC</h4>
                <img src="/images/mecdesk.png" alt="" />
              </div>
            </div>
            <div className="lightMode"></div>
          </div>
          <div className="leanMore">
            <h4>Saiba mais da Faculdade Única</h4>
            <div className="learMoreContainer">
              <div className="learMoreCourse">
                <h4>Pós-Graduação</h4>
                <p>Ver nossos cursos</p>
              </div>
              <div className="learMoreCourse">
                <h4>Segunda Graduação</h4>
                <p>Ver nossos cursos</p>
              </div>
              <div className="learMoreCourse">
                <h4>Disciplinas Isoladas</h4>
                <p>Ver nossos cursos</p>
              </div>
              <div className="learMoreCourse">
                <h4>Cursos Livres</h4>
                <p>Ver nossos cursos</p>
              </div>
            </div>
            <div className="lightMode"></div>
          </div>
          <div className="aboutProminas">
            <div className="itemsList">
              <p>Teste vocacional</p>
              <p>Seja um embaixador</p>
              <p>Fale com a gente</p>
              <p>Quem somos</p>
              <p>Privacidade</p>
              <p>Termos de Uso</p>
              <p>Trabalhe Conosco</p>
            </div>
          </div>
  
        </CoursesSection>
  
        <Footer />
  
      </Container>
    )
  }