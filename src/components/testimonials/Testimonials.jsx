import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/uzairali19/',
      name: 'Uzair Ali',
      role: 'Full-Stack Web Developer. JavaScript | Rails | React | Redux. Improving open-source projects, one commit at a time.',
      test: 'As a developer and a problem solver, I think Denis is a great collaborative partner to have. I met Denis in some basic javascript & react projects and since then He has drastically progressed in him understanding of the development process. He always has a professional environment and has good audio and video quality which makes it easier to communicate with him.',
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/yishak-wesego/',
      name: 'Yishak Wesego',
      role: 'Full-stack developer | Technical Support Engineer at Microverse',
      test: "It was a pleasure collaborating with Denis on different projects. One of the things that I think is special about him is that He never settles, even after completing the projects He finds othim resources and strengthens him knowledge. Collaborating with him is easy and comfortable, it's like working with someone you've known for a long period of time.",
    },
    {
      id: 3,
      link: 'https://www.linkedin.com/in/akuu-khan/',
      name: 'akbar (Aku) Khan',
      role: 'Full Stack Developer| Ruby on Rails | PostgreSQL | JavaScript | React | Redux | Html&Css | Python.',
      test: 'I worked with Denis in the same team and him communication skills are very strong. him programming skill is one of the bests, given the time frame in the field. He is a good team player.  He will probably fit in most of the companies not only because He\'s a good team worker, but also because He has very good skills and I know He has much more potential to be shown.',
    },
    {
      id: 4,
      link: 'https://www.linkedin.com/in/isaicespedes/',
      name: 'Isai Céspedes',
      role: 'Full-Stack Web Developer. JavaScript | Rails | React | Redux.',
      test: "I mentored Denis some months ago, and I can say that He is one of those people that you love to work with. He was always interested in what I was trying to teach him, paying attention and always asking questions if something was not clear. When it comes to professional skills, He is really committed to work, always doing him best and going beyond the requirements of the project He's building.",
    },
    {
      id: 5,
      link: 'https://www.linkedin.com/in/hamzaalitarar/',
      name: 'Hamza Tarar',
      role: 'Software Developer',
      test: "Throughout all our collaborations, Denis has always conducted himself politely and kindly. He comes across as someone that's always willing to help and puts the team ahead of himself. But beneath this, I see a strength and determination to distinguish himself. He's not only someone I highly recommend but is also someone I greatly respect.",
    },
    {
      id: 6,
      link: 'https://www.linkedin.com/in/rex9/',
      name: 'Htet (Rex) Naing',
      role: 'Full Stack Developer | Mindful Mentor | Cheerful Team Player',
      test: "Denis is really cheerful and supportive person. I know him when He reviewed my resume. him feedback was so crystal clear and super effective for me. After that, even though He has no responsibility of reviewing my resume again. He helped me patiently when I ask him again and again. Denis is gifted in reviewing the work and giving advice to othims. I feel really lucky to have him as the reviewer of my resume.",
    },
  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials