import styles from './SobreMim.module.css'

import PostModelo from 'componentes/PostModelo'
import fotoCapa from "assets/flay-leigos-de-escala-e-pesos.jpg"
import fotoSobreMim from "assets/sobre.jpg"

export default function SobreMim() {

  return (
    <PostModelo
      fotoCapa={fotoCapa}
      titulo="Sobre Mim"
    >
      <h3 className={styles.subtitulo}> Oi, tudo bem? </h3>

      <img
        src={fotoSobreMim}
        alt="Desenho"
        className={styles.fotoSobreMim}
      />

        <p className={styles.paragrafo}>
        Acredito que a alimentação é um dos pilares fundamentais para uma vida saudável e que cada indivíduo possui necessidades nutricionais únicas, que devem ser consideradas ao se planejar uma dieta. 
        Por isso, trabalho com abordagem individualizada, buscando compreender as particularidades de cada um dos meus pacientes e oferecendo soluções personalizadas para seus objetivos.

        </p>
        <p className={styles.paragrafo}>
        Neste website, quero compartilhar meu conhecimento e experiência, oferecendo dicas práticas e informações úteis para ajudá-lo a ter uma alimentação mais saudável e equilibrada. 
        Acredito que pequenas mudanças na rotina alimentar podem fazer grande diferença na saúde e no bem-estar, e é por isso que estou aqui para ajudá-lo a alcançar seus objetivos.
        </p>


    </PostModelo>

  )
}
