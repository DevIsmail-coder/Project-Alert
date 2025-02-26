import "./Blog.css";

const cardData = [
  { img: "/public/Project Alert NGO (1)", title: "y kjvh", content: "o", date: "jhuf" },
  { img: "/Project Alert NGO (2).jpg", title: "jjbj", content: "ppkej", date: "jhuer" },
  { img: "/Project Alert NGO (3).jpg", title: "msdhj", content: "uhydf", date: "opir" },
  { img: "/Project Alert NGO (4).jpg", title: "kjohgu", content: "khduf", date: "ki" },
  { img: "/Project Alert NGO (5).jpg", title: "ll hmrjg", content: "juhfi", date: "jwuhf" },
  { img: "/Project Alert NGO (6).jpg", title: "knuihg.", content: "hgfduy", date: "knuqh" },
  { img: "/Project Alert NGO (7).jpg", title: "lo vuer", content: "jsij", date: "guhfu" },
  { img: "/Project Alert NGO (8).jpg", title: "i jg", content: "kmfewi", date: "mdvn" },
  { img: "/Project Alert NGO (9).jpg", title: "pbhh", content: "mdhfi", date: "kfhu" },
];

const Blog = () => {
  return (
    <>
      <div className="Header"> </div>
      <div className="Blog">
        <div className="BlogText">
          <div className="blog">
            <h1>BLOG</h1>
          </div>
          <div className="news">
            <h1>In the news & E-newsletter </h1>
          </div>
        </div>
        <div className="BlogEmpty"></div>
      </div>
      <div className="CardBody">
        {cardData.map((item, index) => (
          <div className="card" key={index}>
            <div className="imgHolder">
              <img src={item.img} alt="" />
            </div>
            <div className="title">{item.title}</div>
            <div className="content">{item.content}</div>
            <div className="date">{item.date}</div>
          </div>
        ))}
      </div>
    
    </>
  );
};

export default Blog;
