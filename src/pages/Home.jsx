import { Link } from "react-router-dom";

const lessons = [
  {
    title: "GSAP To()",
    path: "/gsap-to",
    description: "Animate from current state to new state",
  },
  {
    title: "GSAP From()",
    path: "/gsap-from",
    description: "Animate from a starting state",
  },
  {
    title: "GSAP FromTo()",
    path: "/gsap-fromto",
    description: "Animate from one state to another",
  },
  {
    title: "Timeline",
    path: "/gsap-timeline",
    description: "Control multiple animations",
  },
  {
    title: "Stagger",
    path: "/gsap-stagger",
    description: "Animate multiple elements one by one",
  },
  {
    title: "ScrollTrigger",
    path: "/scrolltrigger",
    description: "Animate on scroll",
  },
];

const Home = () => {
  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1>GSAP Learning</h1>

      <p style={{ marginBottom: "30px" }}>
        Click any lesson to start learning GSAP.
      </p>

      {lessons.map((lesson, index) => (
        <Link
          key={index}
          to={lesson.path}
          style={{
            display: "block",
            textDecoration: "none",
            color: "black",
            border: "1px solid #ddd",
            padding: "20px",
            marginBottom: "15px",
            borderRadius: "10px",
          }}
        >
          <h2 style={{color:"lightblue"}} >{lesson.title}</h2>

          <p style={{color:"gray"}}>{lesson.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default Home;