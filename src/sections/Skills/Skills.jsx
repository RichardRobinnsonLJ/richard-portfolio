import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Embedded C" />
        <SkillList src={checkMarkIcon} skill="Verilog" />
        <SkillList src={checkMarkIcon} skill="Python" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="LNA Design" />
        <SkillList src={checkMarkIcon} skill="Digital IC Design" />
        <SkillList src={checkMarkIcon} skill="Impedance matching network Design" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="ESP32" />
        <SkillList src={checkMarkIcon} skill="Arduino(atmega328p)" />
        <SkillList src={checkMarkIcon} skill="STM32" />
        <SkillList src={checkMarkIcon} skill="DE10 Nano" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="ADS" />
        <SkillList src={checkMarkIcon} skill="LTSpice" />
        <SkillList src={checkMarkIcon} skill="Cadence" />
        <SkillList src={checkMarkIcon} skill="Protocols(I2C,MQTT,SPI,USART)" />
      </div>
    </section>
  );
}

export default Skills;
