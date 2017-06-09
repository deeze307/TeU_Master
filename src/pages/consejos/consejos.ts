import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { ConsejosDetalle } from '../consejos/consejos-detalle';

@Component({
  selector: 'page-consejos',
  templateUrl: 'consejos.html'
})
export class Consejos {
  rootPage: any;
  selectedItem:any;
  items: Array<{ title: string, desc: string }>;

  public backgroundImage = "assets/img/background/BG_TeU_SIN_TEXTO.jpg";

  constructor(public navCtrl: NavController) {
    this.rootPage = Consejos;
    this.items = [
      {
        title: 'Puntualidad',
        desc: 'Impuntualidad implica tanto llegar con demasiada antelación como llegar demasiado tarde. En el primer caso, se puede interpretar como un signo de ansiedad. En el segundo, se puede interpretar como irresponsabilidad o desinterés. Si se presenta una complicación que conlleva a una demora se debe llamar y avisar, amén de pedir disculpas ni bien se concreta el encuentro con el entrevistador.'
      },
      {
        title: 'Veracidad en las Respuestas',
        desc: 'Un buen entrevistador puede darse cuenta facilmente si el candidato está mintiendo con el contenido de su CV y durante la entrevista. Si se revela su falta de veracidad, se convierte en un motivo inapelable de descarte de la persona.'
      },
      {
        title: 'Indagar en el Proceso',
        desc: 'No realizar preguntas sobre como sigue el proceso, tiempo estimado o expectativas de la empresa. Esto demuestra poco interés por el puesto a cubrir. Hay que procurar conocer la siguiente etapa y saber como se comunica el proximo paso.'
      },
      {
        title: 'Conocimiento de la Empresa',
        desc: 'No poseer información básica de la empresa representa poco interés por el puesto a cubrir; es necesario conocer la industria y un minimo de la historia de la empresa en cuestión.'
      },
      {
        title: 'Comunicación No Verbal',
        desc: 'El cuerpo "dice" mucho más que las palabras. Es importante una postura erguida y un tono de voz firme y convincente. Si bien, la entrevista puede ser un momento incomodo para los candidatos, hacer contacto visual permanentemente con el entrevistador es tambien mostrar respeto e interés. Mover mucho las manos y el cuerpo es signo de ansiedad.'
      },
      {
        title: 'No Generar Interrupciones',
        desc: 'Mirar el reloj a cada rato, un papel, el celular o estar inquieto hacen que el foco de la entrevista cabien. Hay que procurar atencion al entrevistador, nunca dejar el celular prendido y menos atender una llamada.'
      },
      {
        title: 'Ni falta de expresividad ni exceso de confianza',
        desc: 'Si bien mostrarse demasiado reservado o con evasivas no es adecuado, un ambiente distendido de entrevista no debe hacer que el candidato se confunda y cruce el umbral de la informalidad. No olvidar que siempre lo estan evaluando.'
      },
      {
        title: 'Uso Correcto del Lenguaje',
        desc: 'De mismo modo que el punto anterior, el lenguaje y los términos que se emplean deben ser formales; términos burdos, coloquiales o descorteses pueden dañar la imagen del candidato.'
      },
      {
        title: 'No criticar al empleo o compañeros anteriores',
        desc: 'Hay que recordar que las industrias son chicas y hoy en día es posible acceder a todo tipo de información. Si se puede hablar de una experiencia poco positiva dentro de una organización pero sin sumarle opiniones o apreciaciones personales negativas.'
      },
      {
        title: 'No Centrarse en la Remuneración',
        desc: 'En una primera entrevista se lo ve como un punto negativo dado que aún no están claras las responsabilidades del puesto ni las aptitudes personales. La entrevista se centra en la historia del candidato y las aptitudes para el puesto.'
      },
    ]
  }

  itemTapped(event, item) {
    this.navCtrl.push(ConsejosDetalle,{
      item:item
    });
  }
}
