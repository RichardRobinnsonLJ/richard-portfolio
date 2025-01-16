import styles from './ProjectsStyles.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.sliderContainer}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <ProjectCard
              src={viberr}
              link="https://github.com/RichardRobinnsonLJ/filter_design.git"
              h3="Filter Design"
              p="Design filters like LPF,HPF,BPF and Band stop filter"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              src={fitLift}
              link="https://github.com/RichardRobinnsonLJ/Guardian_Of_Authenticity"
              h3="Guardian Of Authenticity(GOA)"
              p="Detects deepfake in both image and video"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              src={hipsster}
              link="https://github.com/RichardRobinnsonLJ/Incd_and_death_rate_prediciton/tree/main/Final_Deliverables"
              h3="Incd & Death Predictor"
              p="Used to predict the incd and death rate"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              src={fitLift}
              link="https://github.com/Ade-mir/company-landing-page-2"
              h3="FitLift"
              p="Fitness App"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              src={viberr}
              link="https://github.com/Ade-mir/company-landing-page-2"
              h3="Viberr"
              p="Streaming App"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              src={fitLift}
              link="https://github.com/Ade-mir/company-landing-page-2"
              h3="FitLift"
              p="Fitness App"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Projects;
