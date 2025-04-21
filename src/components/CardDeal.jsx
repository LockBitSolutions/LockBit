import { security } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Relatórios Técnicos <br className="sm:block hidden" /> e Planos de Ação.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Transformamos dados complexos em insights claros e acionáveis para sua equipe técnica e liderança.
      relatórios executivos e técnicos personalizados
      plano de ação com prioridades, prazos e orientações de correção
      apoio à tomada de decisões estratégicas em segurança
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={security} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
