import cover from '../assets/cover1.jpg'
export default function Home() {
  return (
    <div>
      <img src={cover} className='cover'/>
      <h2>Hey folks</h2>
      <p>Hi there! I am Manjot Kaur, a<mark className='mark-orange'> web developer </mark> and designer who enjoys creating clean, smart, and effective websites. Currently, I am pursuing my computer engineering degree at Thapar Institute of Engineering & Technology, Patiala.</p>
      
      <p>I have a huge passion for exploring various tech domains, from <mark className='mark-pink'>  UI/UX </mark> design to the fascinating realms of <mark className='mark-blue'> AI/ML </mark>. I am always on the lookout for new challenges and love experimenting with fresh ideas and technologies. Whether it is designing a user-friendly interface or developing a complex algorithm, I enjoy every bit of the journey.</p>
      
      <p>In addition to my academic pursuits, I share my tech insights and experiences on Twitter <mark className='mark-yellow'> (@kaurmanjot20).</mark> It is my little corner of the internet where I connect with fellow tech enthusiasts, exchange ideas, and contribute to the tech community. I believe in continuous learning and growth, and Twitter is a fantastic platform for that.</p>

      <p>My approach to <mark className='mark-green'> web development </mark> is simple: build websites that are not only visually appealing but also highly functional. I strive to create digital experiences that users love and find easy to navigate. I believe that good design is about solving problems and making users lives easier.</p>

      <p>When I am not coding or designing, I enjoy collaborating with like-minded individuals on exciting projects. I find great joy in working as part of a team and bringing innovative ideas to life.</p> 
      
      <p>If you are passionate about technology and looking to create something remarkable,<mark className='mark-purple'> let us connect </mark>and see what we can build together!</p>
    </div>
  )
}
