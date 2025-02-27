import "./Blog.css";

const cardData = [
  {
    img: "/public/Projectalert 1.png",
    title:
      "CELEBRATING PROJECT ALERT @25: 16 Days Activism 2024 & The Beijing Platform for Action +30",
    content:
      "November 25, 2024 Press Release CELEBRATING PROJECT ALERT @25: 16 Days Activism 2024 & The Beijing Platform for Action +30 Today November 25th, 2024 marks the commencement of the annual global campaign against gender-based violence, known as 16 Days of…",
    date: "projectalert / November 24, 2024",
  },

  {
    img: "/public/Projectalert 1 copy.png",
    title:
      "CELEBRATING PROJECT ALERT @25: 16 Days Activism 2024 & The Beijing Platform for Action +30",
    content:
      " November 25, 2024 Press Release CELEBRATING PROJECT ALERT @25: 16 Days Activism 2024 & The Beijing Platform for Action +30 Today November 25th, 2024 marks the commencement of the annual global campaign against gender-based violence, known as 16 Days of…",
    date: "projectalert / November 24, 2024",
  },

  {
    img: "/public/Projectalert 1 copy 2.png",
    title:
      "CELEBRATING PROJECT ALERT @25: 16 Days Activism 2024 & The Beijing Platform for Action +30",
    content:
      "November 25, 2024 Press Release CELEBRATING PROJECT ALERT @25: 16 Days Activism 2024 & The Beijing Platform for Action +30 Today November 25th, 2024 marks the commencement of the annual global campaign against gender-based violence, known as 16 Days of…",
    date: "projectalert / November 24, 2024",
  },

  {
    img: "/public/Projectalert 1 copy 3.png",
    title:
      "CELEBRATING PROJECT ALERT @25: 16 Days Activism 2024 & The Beijing Platform for Action +30",
    content:
      "November 25, 2024 Press Release CELEBRATING PROJECT ALERT @25: 16 Days Activism 2024 & The Beijing Platform for Action +30 Today November 25th, 2024 marks the commencement of the annual global campaign against gender-based violence, known as 16 Days of…",
    date: "projectalert / November 24, 2024",
  },

  {
    img: "/public/Projectalert 1 copy 4.png",
    title:
      "CELEBRATING PROJECT ALERT @25: 16 Days Activism 2024 & The Beijing Platform for Action +30",
    content:
      "November 25, 2024 Press Release CELEBRATING PROJECT ALERT @25: 16 Days Activism 2024 & The Beijing Platform for Action +30 Today November 25th, 2024 marks the commencement of the annual global campaign against gender-based violence, known as 16 Days of…",
    date: "projectalert / November 24, 2024",
  },

  {
    img: "/public/Projectalert 1 copy 5.png",
    title:
      "CELEBRATING PROJECT ALERT @25: 16 Days Activism 2024 & The Beijing Platform for Action +30",
    content:
      "November 25, 2024 Press Release CELEBRATING PROJECT ALERT @25: 16 Days Activism 2024 & The Beijing Platform for Action +30 Today November 25th, 2024 marks the commencement of the annual global campaign against gender-based violence, known as 16 Days of…",
    date: "projectalert / November 24, 2024",
  },

  {
    img: "/public/Projectalert 1 copy 6.png",
    title:
      "CELEBRATING PROJECT ALERT @25: 16 Days Activism 2024 & The Beijing Platform for Action +30",
    content:
      "November 25, 2024 Press Release CELEBRATING PROJECT ALERT @25: 16 Days Activism 2024 & The Beijing Platform for Action +30 Today November 25th, 2024 marks the commencement of the annual global campaign against gender-based violence, known as 16 Days of…",
    date: "projectalert / November 24, 2024",
  },

  {
    img: "/public/Projectalert 1 copy 7.png",
    title:
      "CELEBRATING PROJECT ALERT @25: 16 Days Activism 2024 & The Beijing Platform for Action +30",
    content:
      "November 25, 2024 Press Release CELEBRATING PROJECT ALERT @25: 16 Days Activism 2024 & The Beijing Platform for Action +30 Today November 25th, 2024 marks the commencement of the annual global campaign against gender-based violence, known as 16 Days of…",
    date: "projectalert / November 24, 2024",
  },

  {
    img: "/public/Projectalert 1.png",
    title:
      "CELEBRATING PROJECT ALERT @25: 16 Days Activism 2024 & The Beijing Platform for Action +30",
    content:
      "November 25, 2024 Press Release CELEBRATING PROJECT ALERT @25: 16 Days Activism 2024 & The Beijing Platform for Action +30 Today November 25th, 2024 marks the commencement of the annual global campaign against gender-based violence, known as 16 Days of…",
    date: "projectalert / November 24, 2024",
  },
];
const Linkdata = [
  {
    first:
      "LAGOS STATE DOMESTIC AND SEXUAL VIOLENCE AGENCY ORGANIZES ONE-DAY STAKEHOLDER ENGAGEMENT",
    second: "https://download%20project%20newsletter-april-june-2024/",
    third: "Project Newsletter April - June 2024",
  },
  {
    first:
      "PROJECT ALERT ENGAGES STAKEHOLDERS IN ADVOCACY VISIT FOR JUSTICE REFORM",
    second:
      "https://projectalertnig.org/wp-content/uploads/2024/05/Project-Newsletter-January-March-2024.pdf",
    third: "Project Newsletter January -March 2024:",
  },
  {
    first:
      "PROJECT ALERT COMMENCED SENSITISATIO OF STUDENTS IN ACADEMIC INSTITUTIONS IN AKWAIBOM AND CROSS RIVER STATE",
    second:
      "https://projectalertnig.org/wp-content/uploads/2024/02/Project-Newsletter-October-December-2023.pdf",
    third: "Project Newsletter October - December 2023:",
  },
  {
    first:
      "EU-UN SPOTLIGHT TEAM ORGANISES JOINT EVALUATION ON SUSTAINABILITY STRATEGIES WITH IMPLEMENTING PARTNERS",
    second:
      "https://projectalertnig.org/wp-content/uploads/2024/02/Project-Newsletter-July-September-2023.pdf",
    third: "Project Newsletter July-September 2023",
  },
  {
    first: "STAKEHOLDER CONVENING MEETING ON PRIVATE SECTOR-LED GBV FUND",
    second:
      "https://projectalertnig.org/wp-content/uploads/2024/02/Project-Newsletter-April-June-2023.pdf",
    third: "Project Newsletter April-June 2023",
  },
  {
    first: "PROJECT ALERT COMMEMORATES INTERNATIONAL WOMEN’S DAY",
    second:
      "https://projectalertnig.org/wp-content/uploads/2024/02/Project-Newsletter-January-March-2023.pdf",
    third: "Project Newsletter January - March 2023",
  },
  {
    first:
      "PROJECT ALERT HOLDS RESEARCHWORKSHOPS ON SEXUAL VIOLENCEIN ACADEMIC INSTITUTIONS.",
    second:
      "https://projectalertnig.org/wp-content/uploads/2024/02/Project-Newsletter-October-December-2022.pdf",
    third: "Project Newsletter October - December 2022",
  },
];

const Blog = () => {
  return (
    <div className="mainBody">
      <Header/>
      <div className="blog_Hero">
        <div className="header"></div>
        <div className="Page-title">
        <h2>BLOG</h2>
        <h1>In the news & E-newsletter</h1>
        </div>

      </div>
      <div className="card_holder">
        {cardData.map((i, index) => (
          <div className="card" key={index}>
            <div className="card_img">
              <img src={i.img} alt="" />
            </div>
            <div className="card_title">
              <h3>{i.title}</h3>
            </div>
            <div className="card_content">
              <p>{i.content}</p>
            </div>
            <div className="card_date">
              <p>{i.date}</p>
            </div>
          </div>
        ))}
        <div className="dot-holder">
          <span className="dot"></span>
          <span className="dot2"></span>
        </div>
        <div className="section">
          <div className="latter">
            <p>Newslatter </p>
          </div>
          <div className="our">
            <h2>Our Newslatter</h2>
          </div>
        </div>
        <section className="LinkBody">
          { Linkdata.map((item, index)=>(

          <div className="LinkCard" key={index}>
            <div className="tit">{item.first}</div>
            <div className="see">
              <a href={item.second}>see more</a>
            </div>
            <div className="foot">{item.third}</div>
          </div>
           ))}

        </section>
        <div className="footer">
          <Filter/>
        </div>
      </div>
    </div>
  );
};

export default Blog;
