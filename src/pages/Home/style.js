import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;


  .desktopBackground {
    @media (min-width: 1440px) {
      height: 80.9rem;
  
      img:nth-child(1) {
        position: absolute;
      }

      .bannerMobile {
        display: none;
      }
    }

    @media (max-width: 1439px) {
      img:nth-child(4) {
        display: none;
      }
    }
  }
  
`;

export const Content = styled.div`
  width: 100%;
  height: 4.8rem;

  background: linear-gradient(0.25turn, #36415c, #4a5165);

  padding: 0 2.5rem;

  .navBar {
    display: flex;

    gap: 1.5rem;

    img {
      margin-top: 1.4rem;
    }

    input {
      margin-top: 1.4rem;
    }

    @media (min-width: 1440px) {
      display: none;
    }

  }

  .desktopContent {
    img {
      cursor: pointer;
    }

    display: flex;
    align-items: center;
    gap: 2.4rem;

    z-index: 1;

    input {
      width: 35rem;
      height: 4.8rem;
    }


    @media (max-width: 1439px) {
      display: none;
    }

  }

  @media (min-width: 1440px) {
    display: flex;
    align-items: center;
    height: 9.1rem;
    justify-content: center;

    background: rgba(73, 73, 73, 0.40);

    padding: 0 12.4rem;

    position: absolute;

    .menuOptions {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1.9rem;

      p {
        font-size: 1.5rem;
        font-weight: 500;
        color: #fff;
        cursor: pointer;
      }

      button {
        width: 17.8rem;
        height: 3.9rem;
        
        margin-left: 2.1rem;
        font-size: 1.2rem;
        border: 1px solid #FFF;
        border-radius: .3rem;
        background-color: transparent;
        color: #FFF;

        font-family: 'Krona One', serif;
      }
    }
  }


`;

export const Section = styled.div`
  .imageAndTitle {

    display: flex;
    flex-direction: column;
    
  .title {
    display: flex;
    flex-direction: column;

    padding: 0 2.5rem;

    margin-top: 33rem;

    position: absolute;

    h1 {
      font-size: 2.5rem;
      color: #fff;
      font-family: 'Krona One', serif;
    }

    p {
      margin-top: 1.4rem;
      font-size: 2.2rem;
      color: #fff;
    }
  }

  @media (min-width: 1040px) {
    display: none;
  }
  }


  .bannerMobile {
    @media (min-width: 1440px) {
      display: none;
    }
  }

  .bannerDesktop {
    width: 100%;
    z-index: 0;

    @media (max-width: 1439px) {
      display: none;
    }
  }

  .desktopSection {
    padding: 0 12.4rem;
    position: absolute;

    h2 {
      margin-top: 50rem;
      font-size: 6rem;
      color: #fff;
      font-family: 'Krona One', serif;
    }

    @media (max-width: 1439px) {
      display: none;
    }
  }


`;

export const SecondSection = styled.div`
    position: relative;
    top: -3vh;

    .imageMsg {

      position: absolute;
      
      h2 {
        margin-left: 5.2rem;
        margin-top: 5.8rem;
        
        font-weight: 600;
        font-size: 2rem;

        color: #fff;
      }

      @media (min-width: 1440px) {
        display: none;
      }
    }

    img {
      width: 100%;
    }

    img:nth-child(2) {
      @media (min-width: 1440px) {
        display: none;
      }
    }

    .desktopSection {
      position: absolute;

      h2 {
        font-size: 3.2rem;
        margin-top: 11.2rem;
        margin-left: 47rem;
        font-weight: 600;

        color: #fff;

        @media (min-width: 1500px) {
          margin-left: 62rem;
        }
      }

      @media (max-width: 1439px) {
        display: none;
      }
    }

    .desktopBanner {
      @media (max-width: 1439px) {
        display: none;
      }
    }

`;

export const ThirdSection = styled.div`
    padding: 0 3.5rem;

    .sectionTitle {
        display: flex;
        flex-direction: column;
        align-items: center;
        

        h2 {
          font-size: 2rem;
          font-family: 'Krona One', serif;

          @media (min-width: 1440px) {
            font-size: 3.2rem;
          }
        }

        p {
          text-align: center;
          margin-top: 2.6rem;
          font-size: 1.5rem;
          font-weight: 500;
          line-height: 1.95rem;

          @media (min-width: 1440px) {
            font-size: 2.2rem;
            font-weight: 500;
          }
        }
    }

    @media (min-width: 1440px) {
      padding: 0 12.4rem;
      margin-top: 9rem;
    }
`;

export const CardSection = styled.div`
    padding: 0 2.4rem;
    margin-top: 4.8rem;

    .cardDisplay {
      @media (max-width: 1439px) {
        :nth-child(2), :nth-child(3) {
          margin-top: 3.6rem;
        }
      }
    }

    @media (min-width: 1440px) {
        padding: 0 12.4rem;
        margin-top: 7.1rem;
        
        .cardDisplay {
          display: flex;
          justify-content: center;
          gap: 2rem;
        }
      }
`;

export const FifthSection = styled.div`
    margin-top: 9rem;
    padding: 0 2.4rem;

    .fifthSectionTitle {
      display: flex;
      flex-direction: column;
      align-items: center;

      h2 {
        text-align: center;
        font-size: 2rem;
        font-family: 'Krona One', serif;

        @media (min-width: 1440px) {
          text-align: start;
          font-size: 3.2rem;
        }
      }

      p {
        text-align: center;
        font-size: 1.5rem;
        font-weight: 500;

        margin-top: 3rem;

        @media (min-width: 1440px) {
          text-align: start;
          font-size: 2.2rem;
        }
      }

      img {
        margin-top: 3.4rem;
      }

      .desktopTitle {
        @media (min-width: 1440px) {
          display: flex;
          flex-direction: column;

          width: 58.7rem;
        }
      }

      @media (min-width: 1440px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .mobileNotebook {
          display: none;
        }
      }
    }

    @media (max-width: 1439px) {
      .desktopNotebook {
        display: none;
      }
    }

    @media (min-width: 1440px) {
      padding: 0 12.4rem;
    }
`;

export const SixthSection = styled.div`
  padding: 0 2.4rem;
  margin-top: 9.6rem;


  h2 {
    text-align: center;
    font-size: 2rem;
    font-family: 'Krona One', serif;

    @media (min-width: 1440px) {
      font-size: 3.2rem;
    }
  }

  .cardWithTitle {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 3.2rem;

    @media (min-width: 1440px) {
      display: none;
    }
  }

  .cardsDots {
    display: flex;
    justify-content: center;

    margin-top: 1.9rem;

    .dotsMobile {
      @media (min-width: 1440px) {
        display: none;
      }
    }

    .dotsDesktop {
      margin-top: 3.5rem;

      cursor: pointer;

      @media (max-width: 1439px) {
        display: none;
      }
    }
  }

  .cardWithTitleDesktop {
    display: flex;
    justify-content: center;
    gap: 1.8rem;
    margin-top: 6.5rem;

    @media (max-width: 1439px) {
      display: none;
    }
  }
`;

export const SeventhSection = styled.div`
  padding: 0 2.4rem;
  margin-top: 10.3rem;

  h2 {
    font-size: 2rem;
    font-family: 'Krona One', serif;

    text-align: center;

    @media (min-width: 1440px) {
      font-size: 3.2rem;
    }
  }

  .cardWithTitle {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5.2rem;


    @media (min-width: 1440px) {
      display: none;
    }
  }

  .cardWithTitleDesktop {
    margin-top: 7rem;
    
    @media (min-width: 1440px) {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 2rem;
    }

    @media (max-width: 1439px) {
      display: none;
    }
  }
  
  @media (min-width: 1440px) {
    padding: 0 12.4rem;
    margin-top: 17rem;
  }
`;

export const EighthSection = styled.div`
  margin-top: 9rem;

  @media (min-width: 1440px) {
    margin-top: 20rem;
  }

  .eighthSectionTitle {

    h2 {
      text-align: center;
      font-size: 2rem;
      font-family: 'Krona One', serif;

      @media (min-width:1440px) {
        font-size: 3.2rem;
      }
    }

    p {
      text-align: center;
      font-size: 1.5rem;
      margin-top: .3rem;

      @media (min-width: 1440px) {
        font-size: 3rem;
      }
    }
  }

  .eighthSectionCards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    margin-top: 4.1rem;
    

    @media (min-width: 1440px) {
      display: none;
    }
  }

  .desktopCardSection {
    display: flex;
    justify-content: center;
    margin-top: 8rem;


    @media (max-width: 1439px) {
      display: none;
    }
  }
`;

export const FeedbackSection = styled.div`
    background: linear-gradient(90deg, #7500FF 10.24%, #7500FF 14.24%, #A68BFF 110.24%);

    border-bottom-width: 10.5rem;
    border-bottom-style: solid;
    border-bottom-color: #7500FF;


    img {
      z-index: 0;

    }

    @media (min-width: 1440px) {
      display: none;
    }

    .leftArrow {
      position: absolute;
      margin-top: 30rem;
      margin-left: .5rem;

      @media (min-width: 376px) {
        display: none;
      }
    }

    .rightArrow {
      position: absolute;
      margin-top: 30rem;
      margin-left: 36rem;

      @media (min-width: 376px) {
        display: none;
      }
    }

    .feedbackSectionTitle {
        position: absolute;
        display: flex;
        padding: 0 2.4rem;

        img {
          position: absolute;
          border-radius: 50%;

          margin-top: 8.7rem;
          margin-left: 3.8rem;
          z-index: 1;
        }

        h2 {
          z-index: 1;
          margin-top: 4rem;
          font-size: 2rem;
          text-align: center;
          color: #fff;
          font-family: 'Krona One', serif;
          font-weight: 400;
        }
    }

    .feedbackMessage {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

        width: 90%;
        height: 41rem;
        margin-left: 2.1rem;
        margin-top: 13.5rem;
        position: absolute;
        padding: 3.9rem 5rem;
        border: 1px solid rgba(166, 139, 255, 0.20);
        border-radius: 10px; 

        background: rgba(166, 139, 255, 0.40);
        filter: drop-shadow(10.71px 10.71px 21.42px rgba(0, 0, 0, 0.20));
        backdrop-filter: blur(16.065000534057617px);

        .messageAndGoogle {
            width: 25.4rem;
            height: 30.7rem;

            p {
              text-align: center;
              font-size: 0.9rem;
              font-weight: 300;
              line-height: 1.35rem;
              color: #fff;
          }

          display: flex;
          flex-direction: column;

          img:nth-child(3) {
            margin-top: 1.2rem;
            margin-left: 1.5rem;
            width: 20.8rem;
          }
        }

        .photoAndName {
          display: flex;

          gap: 1.2rem;

          margin-top: 5rem;

          .textContainer {
            display: flex;
            flex-direction: column;
            margin-top: .6rem;
          }

          h4 {
            font-size: 1rem;
            color: #fff;
          }

          p {
            margin-top: .9rem;
            font-size: .7rem;
            color: #fff;
          }

          img {
            border-radius: 50%;
          }
        }
}
`;

export const DesktopFeedback = styled.div`
    height: 612px;
    background: linear-gradient(90deg, #7500FF 10.24%, #7500FF 14.24%, #A68BFF 110.24%);

    padding: 0 12.4rem;

    @media (max-width: 1439px) {
      display: none;
    }


    .feedbackTitle {
      h2 {
        padding-top: 10rem;
        text-align: center;
        font-size: 3.2rem;
        color: #fff;
        font-family: 'Krona One', serif;
      }
    }

    .background1 {
      position: absolute;
      right: 0;
      z-index: 0;
      
    }

    .background2 {
      position: absolute;
      right: 0;
      z-index: 0;
    }

    .feedbackCards {
      display: flex;
      justify-content: center;
      gap: 2rem;

      position: relative;

      margin-top: 5rem;

      backdrop-filter: blur(16.065000534057617px);

    }


`;

export const DesktopQuestions = styled.div`
    padding: 0 12.4rem;

    @media (max-width: 1439px) {
      display: none;
    }

    .titleAndQuestions {
      padding-top: 8rem;

      h2 {
        text-align: center;
        font-size: 3.2rem;
        font-family: 'Krona One', serif;
      }

      .FAQ {
        display: flex;
        flex-direction: column;
        margin-top: 4%;

        
        
        
        .questions {
          
          display: flex;
          justify-content: space-between;
          
          border-bottom-width: 2px;
          border-bottom-style: solid;
          border-bottom-color: white;
          
          p {
            cursor: pointer;
            margin-top: 3.6rem;
            margin-bottom: 3rem;
            font-size: 1.8rem;
            font-weight: 500;
          }

          img {
            cursor: pointer;
          }
        }

      }
    }
`;

export const CoursesSection = styled.div`
    margin-bottom: 6.4rem;

    .sectionTitle {
      padding: 0 2.4rem;

      @media (min-width: 1440px) {
        padding: 0 12.4rem;
      }

       h4 {
        font-size: 1.2rem;
        font-weight: 700;
        margin-top: 2.1rem;

        @media (min-width: 1440px) {
          font-size: 2rem;
          margin-top: 14rem;
        }
       }

       .coursesDiv {

        display: flex;
        flex-wrap: wrap;
        gap: 2rem;


        @media (min-width: 1440px) {
          display: flex;
          flex-wrap: nowrap;
          justify-content: center;
          gap: 3.2rem;
          margin-top: 5rem;
        }

         .courseList {
          width: 15.2rem;
          margin-top: 2.7rem;
          list-style-type: none;

          @media (min-width: 1440px) {
            margin-top: 0;
            width: 24.2rem;
          }
         }
  
         .courseList li {
          font-size: 1rem;
          font-weight: 500;
          line-height: 20px;

          cursor: pointer;

          @media (min-width: 1440px) {
            font-size: 1.2rem;
            line-height: 3.5rem;
          }
         }

         .courseList2 {
          width: 15.3rem;
          margin-top: 2.7rem;
          list-style-type: none;

          @media (min-width: 1440px) {
            margin-top: 0;
            width: 24.2rem;
          }
         }

         .courseList2 li {

          font-size: 1rem;
          font-weight: 500;
          line-height: 20px;

          cursor: pointer;

          @media (min-width: 1440px) {
            font-size: 1.2rem;
            line-height: 3.5rem;
          }
         }

         .courseList2:nth-child(4) {
          margin-top: 8.9rem;

          @media (min-width: 1440px) {
            margin-top: 0;
          }
         }

         .courseList:nth-child(5) {
          margin-top: 2rem;

          @media (min-width: 1440px) {
            margin-top: 0;
          }
         }

       }

       .afterCoursesList {

        @media (min-width: 1440px) {
          display: flex;
          justify-content: space-between;
          align-items: normal;
          width: 100%;
          margin-bottom: 4.3rem;
        }

        h4 {
          font-weight: 700;
          font-size: 1.2rem;

          @media (min-width: 1440px) {
            font-size: 2rem;
          }
        }

         .iconsSection {
            display: flex;
            align-items: center;
            margin-top: .9rem;
            gap: .7rem;

            cursor: pointer;

            @media (min-width: 1440px) {
              img {
                width: 5rem;
              }
            }
         }
       }

       .appDownload {
        margin-top: 3rem;


        @media (min-width: 1440px) {
          margin-top: 0;
        }

        .storesIcons {
          display: flex;
          margin-top: 0.6rem;
          gap: .5rem;

          cursor: pointer;

          @media (min-width: 1440px) {
              img {
                width: 18rem;
              }
            }
        }
       }

       .mecSectionDesk {
          display: flex;
          gap: 4.5rem;

          h4 {
            width: 25.6rem;
          }

        
        @media (max-width: 1439px) {
          display: none;
        }
       }

       .mecSection {
          width: 14.7rem;
          margin-top: 3rem;

          @media (min-width: 1440px) {
            display: none;
          }

          h4 {
            font-size: 1.2rem;
            font-weight: 700;
          }

          img {
            margin-top: 2.4rem;
            margin-bottom: 3.3rem;
          }

       }

        border-bottom-width: 2px;
        border-bottom-style: solid;
        border-bottom-color: white;

    }

    .leanMore {
      padding: 0 2.4rem;
      margin-top: 2.2rem;

      @media (min-width: 1440px) {
        padding: 0 12.4rem;
        margin-top: 6rem;
      }

      .learMoreContainer {
        @media (min-width: 1440px) {
          display: flex;
          justify-content: space-between;
        }
      }

      h4 {
        font-size: 1.2rem;
        font-weight: 700;

        @media (min-width: 1440px) {
          font-size: 2rem;
        }
      }

      

        border-bottom-width: 2px;
        border-bottom-style: solid;
        border-bottom-color: white;

      .learMoreCourse {
        margin-top: 3rem;

        p {
          font-size: 1rem;
          font-weight: 500;

          margin-top: .6rem;
          cursor: pointer;

          @media (min-width: 1440px) {
            font-size: 1.8rem;
          }
        }

        p:nth-child(2) {
          margin-bottom: 3rem;

          @media (min-width: 1440px) {
            margin-bottom: 6rem;
          }
        }
      }
    }

    .lightMode {
        border-bottom-width: 2px;
        border-bottom-style: solid;
        border-bottom-color: #000;
      }

    .itemsList {
      display: flex;
      flex-direction: column;
      margin-top: 1.9rem;
      padding: 0 2.4rem;

      @media (min-width: 1440px) {
        padding: 0 12.4rem;
        flex-direction: row;
        justify-content: space-between;
      }

      p {

        font-size: 1rem;
        font-weight: 500;

        cursor: pointer;

        margin-top: .6rem;

        @media (min-width: 1440px) {
          font-size: 1.4rem;
        }
      }
    }
`;