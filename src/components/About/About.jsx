import { motion } from "motion/react";
import { FaHeart, FaUserMd, FaAward, FaPaw } from "react-icons/fa";
import { fromLeft, fromRight, fromBottom, headingVariant } from "@/utils/animations";
import "./About.css";

const PILLARS = [
  {
    icon: FaHeart,
    title: "Cuidado con Amor",
    text: "Cada paciente es tratado como si fuera parte de nuestra familia. El amor y la dedicación guían cada consulta.",
  },
  {
    icon: FaUserMd,
    title: "Equipo Experto",
    text: "Profesionales veterinarios con años de experiencia y formación continua para brindarte la mejor atención.",
  },
  {
    icon: FaAward,
    title: "Excelencia Clínica",
    text: "Tecnología de punta, diagnósticos precisos y tratamientos eficaces respaldados por la ciencia veterinaria.",
  },
  {
    icon: FaPaw,
    title: "Para Toda la Familia",
    text: "Desde cachorros hasta adultos mayores, acompañamos a tu mascota en cada etapa de su vida.",
  },
];

const About = () => (
  <section id="Nosotras" className="about-section">
    <div className="about-wrapper">
      <motion.div
        variants={headingVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="about-badge"
      >
        <FaPaw size={14} />
        <span>Quiénes somos</span>
      </motion.div>

      <div className="about-content">
        <motion.div className="about-text-col" {...fromLeft(0)}>
          <h2 className="about-title">
            Más que una veterinaria,<br />
            <span className="about-title-accent">un hogar para tu mascota.</span>
          </h2>
          <p className="about-lead">
            En <strong>ADAPets</strong> creemos que la salud animal no es solo
            una cuestión médica, sino un acto de amor. Nacimos con el propósito
            de acompañar a las familias con una atención cálida, honesta y de
            primer nivel.
          </p>
          <p className="about-body">
            Nuestro equipo trabaja todos los días con la convicción de que cada
            animal merece lo mejor. Desde la primera consulta hasta los
            tratamientos más complejos, estamos presentes para que tu compañero
            de vida esté sano, feliz y bien cuidado.
          </p>

          <motion.div className="about-stat-row" {...fromBottom(0.3)}>
            {[
              { value: "+500", label: "Pacientes atendidos" },
              { value: "8+", label: "Años de experiencia" },
              { value: "100%", label: "Compromiso con tu mascota" },
            ].map((s) => (
              <div key={s.label} className="about-stat">
                <span className="about-stat-value">{s.value}</span>
                <span className="about-stat-label">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div className="about-pillars-col" {...fromRight(0.1)}>
          {PILLARS.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              className="about-pillar"
              {...fromBottom(i * 0.1)}
            >
              <div className="about-pillar-icon">
                <Icon size={20} />
              </div>
              <div>
                <h3 className="about-pillar-title">{title}</h3>
                <p className="about-pillar-text">{text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
