import React from 'react';
import Bio from './Bio';

class TeamPage extends React.Component {
  state = {
    bios: [
      {
        name: 'Elizabeth Chapman',
        role: 'Project Co-Lead',
        intro: 'Art, architecture and neuroscience are Elizabeth\'s parallel interests. After graduating from MIT, she opened an architectural practice, now in its 35th year, and collaborated in the Art and Neuroscience studio at Lafayette College in Pennsylvania. An instructor at the University of Southern Maine, Olli, Elizabeth teaches Perception Through the Lens of Sensory Neuroscience where her passion is multi sensory spatial perceptions. Like so many of us, Elizabeth is anxious Covid will have a lasting impact on our engagement with the arts.  The idea that \'sense perceptions are the foundation of mindfulness\' inspired Elizabeth\'s proposal to a Covid response group at MIT. The group has developed a web tool to support wellbeing through a cluster of activities.  Elizabeth is honored to be working with a talented international team of software designers on the Senses and Art Project as we help members of the community develop our inner resources for engagement with the arts while remaining safe. '
      },
      {
        name: 'Omar Costilla-Reyes',
        role: 'Project Co-Lead',
        intro: 'Omar Costilla-Reyes is a postdoctoral researcher at the institute for medical and engineering sciences at MIT. Omar is working at the intersection of digital health and artificial intelligence.  Omar’s interest in founding the senses and art project is to create a space for the community to explore its senses and the intersection to the art to enable a place for mental healing in a world of distress due to the pandemic.  Omar is part of the MIT Museum Studio and Compton Gallery community and has contributed in projects at the intersection of art, neuroscience and artificial intelligence.'
      },
      {
        name: 'Tong Kong',
        role: 'Technical Leader',
        intro: 'Tong is a software engineer and musician. She graduated from Wesleyan University with a double major in Computer Science and Music. Currently, she is pursuing a master\'s degree in Computer Science at University of Pennsylvania. Tong is adventurous and is always looking for meaningful problems to solve. She was the producer for Evo, an educational game that teaches kids about evolution through fun adventures. She was also the first author of a bioinformatics research paper that uses a data driven approach to provide insights into biodiversity among viruses. As a musician, she is proficient in more than ten kinds of instruments and has been performing actively all year round. She has also collaborated with theater productions, film makers and game producers to compose music for various media forms. She specializes in east Asian music and has given educational workshops at local schools and language programs. '
      },
      {
        name: 'Bruno Bedón',
        role: 'Software Engineer',
        intro: 'Bruno is a Data Scientist, he earned a bachelor\'s degree in Computer Science from the National University of Engineering (UNI) in Perú. He participated in different hackathon competitions related with software development and data analysis, his research spans many aspects of programming language implementation, software tools, software development environments, artificial intelligence and machine learning algorithms. His most recent work was about process automation of analytical tasks and cluster analysis using demographic and geographical data. He is currently part of the second generation of students in the Aporta’s Advanced Program in Data Science and Global Skills, which supports a cohort of Peruvians through the MIT (IDSS) MicroMasters Program in Statistics and Data Science.'
      },
      {
        name: 'Miguel Mejía',
        role: 'Software Engineer',
        intro: 'Miguel is a data scientist, bachelor’s degree in computer science from the National University of Engineering - Lima, Peru. Currently, He is a co-researcher of bioinspired architectures in the computer science department, he is co-author in a paper of a novel bioinspired architecture for information processing tasks called hypernetwork architecture, he also participates in natural language processing projects for sentiment analysis. He has knowledge in the software cycle for the implementation of services - backend. Passionate about solving significant problems, his passion is to find patterns in large data sets.'
      },
      {
        name: 'Khushbu Kshirsagar',
        role: 'Designer',
        intro: 'Khushbu is an engineer, educator and researcher currently pursuing her masters in S.T.E.M. Education at Tufts University. She is specializing in designing hands-on learning experiences using math and mechanics. Khushbu is also a researcher at the Tufts University Center for Engineering Education and Outreach where she is designing a curriculum for middle-school students to create biorobots – artifacts inspired by biomimicry.  In her role as a maker, Khushbu is obsessed with researching and designing technologies to promote and empower tinkering, mainly in informal settings such as museums and playgrounds. She has experiences of working as a production engineer at Bosch Ltd, managing a maker space in India and designing S.T.E.M.-based games and toys for kids as a product designer at a start-up firm called Smartivity. While her primary focus is the intersection of art, design and technology, Khushbu loves playing basketball and petting dogs.'
      },
      {
        name: 'Elizabeth Mendoza Tenorio',
        role: 'UX Designer',
        intro: 'Social communicator and designer by National University of San Marcos (Perú) who loves technology and projects with a positive impact on people.'
      },
      {
        name: 'Rita Wolf',
        role: 'Narrator',
        intro: 'RITA WOLF is an actress and theatre producer in both the UK and the US. She recently collaborated with Richard Nelson on The Michaels (part one of a two part cycle) at the Public Theatre in NYC. She is also a Founder Member of KALI Theatre Company in London.'
      },
    ]
  }
  render() {
    const { bios } = this.state;
    return (
      <div className='team-page'>
        {bios.map(b => (
          <Bio
            name={b.name}
            role={b.role}
            intro={b.intro}
            style={{ marginLeft: 'auto', marginRight: 'auto' }}
          />
        ))}
      </div>
    );
  }
}

export default TeamPage;