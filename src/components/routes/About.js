import React from "react"
import styled from "styled-components"
import Certification from "../Certification"
import TimeLine from "./TimeLine"
import Container from '../projects/Container'
import Carrousel from '../Carrousel'

const introCards = [
  {
    title: "Passion",
    description: "Self-taught programmer with curiosity since childhood.",
    image: "images/Passion.png"
  },
  {
    title: "Work Ethic",
    description: "Hardworking and disciplined, focused on delivering results.",
    image: "images/WorkEthic.png"
  },
  {
    title: "Team Player",
    description: "Thrives both independently and in group environments.",
    image: "images/TeamPlayer.png"
  },
  {
    title: "AI-Powered",
    description: "I leverage AI tools like ChatGPT and Copilot to boost productivity and code quality.",
    image: "images/AI.png"
  },
  {
    title: "Creative Problem Solver",
    description: "I often find 'unconventional' solutions that others might overlook.",
    image: "images/CreativeThinking.png"
  },
  {
    title: "Methodical & Results-Oriented",
    description: "I approach work with discipline and clear focus on achieving goals.",
    image: "images/Methodical.png"
  }
]

const certificationsData = [
  {
    title: "Build Apps Using React: Introducing React for Web Applications",
    company: "Skillsoft",
    date: "Aug. 2023",
    credentialId: "5523621",
    imagePath: "/images/certifications/Build Apps Using React Introducing React for Web Applications.png",
    skills: "Computer Science"
  },
  {
    title: "Build Apps Using React: Local Machine & Online Playgrounds",
    company: "Skillsoft",
    date: "Aug. 2023",
    credentialId: "5523692",
    imagePath: "/images/certifications/Build Apps Using React Local Machine & Online Playgrounds.png",
    skills: "Computer Science"
  },
  {
    title: "Navigating Software Testing Tools: Types of Software Testing Tools",
    company: "Skillsoft",
    date: "Aug. 2023",
    credentialId: "5509961",
    imagePath: "/images/certifications/Navigating Software Testing Tools Types of Software Testing Tools.png",
    skills: "Computer Science"
  },
  {
    title: ".NET Development with Visual Studio",
    company: "Skillsoft",
    date: "Jul. 2023",
    credentialId: "5421308",
    imagePath: "/images/certifications/NET Development with Visual Studio.png",
    skills: "C# · .NET Framework · Computer Science"
  },
  {
    title: "ASP.NET MVC Web Applications: Introduction",
    company: "Skillsoft",
    date: "Jul. 2023",
    credentialId: "5509907",
    imagePath: "/images/certifications/ASP.NET MVC Web Applications Introduction.png",
    skills: "C# · .NET Framework · Computer Science"
  },
  {
    title: "HTML5 with JavaScript & CSS3: Advanced CSS",
    company: "Skillsoft",
    date: "Jul. 2023",
    credentialId: "5351755",
    imagePath: "/images/certifications/HTML5 with JavaScript & CSS3 Advanced CSS.png",
    skills: "Computer Science"
  },
  {
    title: "MEAN Stack Development",
    company: "Skillsoft",
    date: "Jul. 2023",
    credentialId: "5313125",
    imagePath: "/images/certifications/MEAN Stack Development.png",
    skills: "Computer Science"
  },
  {
    title: "MongoDB Aggregation",
    company: "Skillsoft",
    date: "Jul. 2023",
    credentialId: "5367339",
    imagePath: "/images/certifications/MongoDB Aggregation.png",
    skills: "Computer Science"
  },
  {
    title: "MongoDB Querying",
    company: "Skillsoft",
    date: "Jul. 2023",
    credentialId: "5302759",
    imagePath: "/images/certifications/MongoDB Querying.png",
    skills: "Computer Science"
  },
  {
    title: "REST API with Java: REST APIs with POSTMAN & CRUD",
    company: "Skillsoft",
    date: "Jul. 2023",
    credentialId: "5367975",
    imagePath: "/images/certifications/REST API with Java REST APIs with POSTMAN & CRUD.png",
    skills: "Computer Science"
  },
  {
    title: "AWS Developer Associate 2022: Amazon Elastic Compute Cloud (EC2)",
    company: "Skillsoft",
    date: "Jun. 2023",
    credentialId: "5010674",
    imagePath: "/images/certifications/AWS Developer Associate 2022 Amazon Elastic Compute Cloud (EC2).png",
    skills: "Computer Science · Amazon Web Services (AWS)"
  },
  {
    title: "Introduction to Git",
    company: "Skillsoft",
    date: "Jun. 2023",
    credentialId: "5086974",
    imagePath: "/images/certifications/Introduction to Git.png",
    skills: "Computer Science"
  },
  {
    title: "Jenkins for DevOps: The Basics of Jenkins",
    company: "Skillsoft",
    date: "Jun. 2023",
    credentialId: "5073564",
    imagePath: "/images/certifications/Jenkins for DevOps The Basics of Jenkins.png",
    skills: "Computer Science"
  },
  {
    title: "Scrum Foundation: Scrum Certification & the Scrum Guide",
    company: "Skillsoft",
    date: "Jun. 2023",
    credentialId: "5021856",
    imagePath: "/images/certifications/Scrum Foundation Scrum Certification & the Scrum Guide.png",
    skills: "Computer Science"
  },
  {
    title: "Scrum Toolbox: Jira for Scrum",
    company: "Skillsoft",
    date: "Jun. 2023",
    credentialId: "5042690",
    imagePath: "/images/certifications/Scrum Toolbox Jira for Scrum.png",
    skills: "Computer Science"
  },
  {
    title: "Secure Programmer: Software Testing",
    company: "Skillsoft",
    date: "Jun. 2023",
    credentialId: "5023254",
    imagePath: "/images/certifications/Secure Programmer Software Testing.png",
    skills: "Computer Science"
  },
  {
    title: "Working with Git",
    company: "Skillsoft",
    date: "Jun. 2023",
    credentialId: "5102118",
    imagePath: "/images/certifications/Working with Git.png",
    skills: "Computer Science"
  },
  {
    title: "The Language of DevOps: DevOps Tools & Processes",
    company: "Skillsoft",
    date: "May. 2023",
    credentialId: "4804472",
    imagePath: "/images/certifications/The Language of DevOps DevOps Tools & Processes.png",
    skills: "Computer Science"
  },
  {
    title: "Python without Borders: HTML, CSS, Flask and MySQL",
    company: "Hola Mundo",
    date: "Nov. 2021",
    credentialId: "UC-05293651-db5c-42f6-ad31-a2172db20bad",
    imagePath: "/images/certifications/Python sin fronteras HTML, CSS, Flask y MySQL.jpg",
    skills: "HTML5 · Front-end Coding · Computer Science · Git · Design Patterns"
  },
]

const skills = [
  {
    name: "React",
    icon: "/images/skills/React.svg",
    description: "Frontend library for building UI components."
  },
  {
    name: "JavaScript",
    icon: "/images/skills/JavaScript.svg",
    description: "Dynamic programming language for web development."
  },
  {
    name: "MongoDB",
    icon: "/images/skills/MongoDB.svg",
    description: "NoSQL database for scalable and flexible applications."
  },
  {
    name: "HTML5",
    icon: "/images/skills/HTML5.svg",
    description: "Markup language for structuring web content."
  },
  {
    name: "CSS3",
    icon: "/images/skills/CSS3.svg",
    description: "Style sheet language for designing web pages."
  },
  {
    name: "Git",
    icon: "/images/skills/Git.svg",
    description: "Version control system for tracking code changes."
  },
  {
    name: "Node.js",
    icon: "/images/skills/Nodejs.svg",
    description: "JavaScript runtime for building scalable backend applications."
  },
  {
    name: "Express",
    icon: "/images/skills/Express.svg",
    description: "Web framework for Node.js to build APIs and web servers."
  }
]

const interestsCards = [
  {
    title: "Reading",
    description: "Exploring novels, especially sci-fi and fantasy worlds.",
    image: "images/Interests/Reading.png"
  },
  {
    title: "Gaming",
    description: "Immersing in video games for fun and inspiration.",
    image: "images/Interests/Gaming.png"
  },
  {
    title: "Programming",
    description: "Building projects and experimenting with code as a hobby.",
    image: "images/Interests/Programming.png"
  }
]

const StyledLink = styled.a`
  color: #007bff;
  text-decoration: underline;
  font-size: 1rem;
  font-weight: normal;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #0056b3;
  }
`

const AboutPageContainer = styled.div`
  padding: 20px;
  height: auto;
  color: #E0E0E0;
`

const Cert = styled.div`
  background-color: #3B3F46;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-radius: 8px;
  padding: 10px;
`

const SectionTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 15px;
  border-bottom: 2px solid #55F5ED;
  padding-bottom: 5px;
  color: #55F5ED;
`

const SectionText = styled.p`
  margin-top: 16px;
  margin-bottom: 5rem;
  line-height: 1.6;
  color: white;
  font-size: 1rem;
  text-align: justify;
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-top: 12px;
  }
`

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  @media (max-width: 1024px) { grid-template-columns: repeat(3, 1fr); }
  @media (max-width: 768px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 480px) { grid-template-columns: 1fr; }
`

const Card = styled.div`
  background: #0f1724;
  padding: 12px;
  border-radius: 10px;
  display: flex;
  gap: 12px;
  align-items: center;
  box-shadow: 0 6px 16px rgba(2,6,23,0.25);
`

const Icon = styled.img`
  height: 44px;
  width: auto;
  object-fit: contain;
  border-radius: 8px;
`

const AboutPage = () => {
  return (
    <AboutPageContainer>
      <h1 style={{ fontSize: '3rem' }}>About Me</h1>
      <SectionTitle>Brief Introduction</SectionTitle>
        <Container cards={introCards}/>
      <SectionTitle>Professional Experience</SectionTitle>
        <TimeLine/>
      <SectionTitle>Education</SectionTitle>
      <SectionText style={{ marginBottom:'2rem' }}>
        <ul>
          <li>🏫 Bachelor's degree in high school education at "Liceo de Curridabat". 🧠</li>
          <li>🎓 Diploma in Computer Science · UNED · Currently studying. 📜</li>
          <li>📚 I have completed several online courses and certifications in various programming languages and technologies, which can be found bellow. 🖥️</li>
        </ul>
       </SectionText>
       <SectionTitle>Certifications</SectionTitle>
       <Cert>
       {certificationsData.map((certification, index) => (
         <Certification
           key={index}
           title={certification.title}
           company={certification.company}
           date={certification.date}
           credentialId={certification.credentialId}
           imagePath={certification.imagePath}
           skills={certification.skills}
         />
       ))}</Cert>
       <SectionTitle>Skills</SectionTitle>
        <Grid>
          {skills.map(s => (
            <Card key={s.title} aria-label={s.title}>
            <Icon src={s.icon} alt={s.title} />
            <div>
              <strong>{s.title}</strong>
              <div style={{fontSize:12, opacity:0.8, display:'inline-block' }}>{s.description}</div>
            </div>
            </Card>
          ))}
        </Grid>
       <SectionTitle>Interests</SectionTitle>
       <Carrousel cards={interestsCards}/>
       <SectionTitle>Professional Goals</SectionTitle>
       <SectionText>
        My short-term goals are to work for a programming company and build knowledge with my colleagues. My long-term goals are to become a senior developer to be able to help other people with their programming problems.
       </SectionText>
       <SectionTitle>Languages</SectionTitle>
       <SectionText>
        I'm fluent in both English and Spanish, with strong spoken and written communication skills in both languages.
       </SectionText>
   </AboutPageContainer>
  )
}

export default AboutPage
