import styles from './ProjectsStyles.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
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
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={false} // Disable Swiper's autoplay since we're using CSS animation
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
              src={freshBurger}
              link="https://github.com/RichardRobinnsonLJ/impedance_matching/tree/main"
              h3="Impedance matching"
              p="To Calculate and Design impedance matching network"
            />
            </SwiperSlide>
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
              src={freshBurger}
              link="https://github.com/RichardRobinnsonLJ/impedance_matching/tree/main"
              h3="Impedance matching"
              p="To Calculate and Design impedance matching network"
            />
            </SwiperSlide>
        </Swiper>
        <p> &lt;- Drag right or left to see more -&gt;</p>
      </div>
    </section>
  );
}

export default Projects;
