import { TimelineItem } from "./TimelineItem";

const events = [
  {
    year: "1942",
    title: "Isaac Asimov y las Tres Leyes de la Robótica",
    description: "Introducción de las célebres Tres Leyes de la Robótica en la literatura de ciencia ficción, estableciendo principios éticos fundamentales para máquinas inteligentes.",
    image:"/metafora_robotica_responsable.jpg"
  },
  {
    year: "1943",
    title: "McCulloch y Pitts",
    description: "Publicación del primer modelo matemático de una neurona artificial como unidad lógica de una red neuronal, sentando las bases de las redes neuronales computacionales.",
    image:"/redes_neuronales.png"
  },
  {
    year: "1944",
    title: "Colossus",
    description: "Construcción de Colossus, utilizada para descifrar códigos alemanes durante la Segunda Guerra Mundial, demostrando el potencial de la computación electrónica.",
    image:"/colossus.jpg"
  },
  {
    year: "1945",
    title: "Von Neumann y la arquitectura EDVAC",
    description: "Presentación de la arquitectura de programa almacenado, pilar de las computadoras modernas.",
    image:"/EDVAC.avif"
  },
  { 
    year: "1946", 
    title: "ENIAC — Computadora electrónica", 
    description: "Desarrollo de ENIAC, una de las primeras computadoras electrónicas de propósito general, marcando un hito en la infraestructura tecnológica para el procesamiento de información.", 
    image: "/ENIAC.jpg" 
  },
  {
    year: "1947", 
    title: "Alan Turing — Teoría de la computación", 
    description: "Formalización del concepto de máquina universal capaz de realizar cualquier cálculo lógico, sentando las bases teóricas para el razonamiento automatizado.",
    image:"/Alan-Turing.webp"
  },
  {
    year: "1948", 
    title: "Claude Shannon — Teoría matemática de la información", 
    description: "Formulación de un marco matemático para la transmisión y procesamiento de señales digitales, base para la lógica de computadoras y telecomunicaciones.", 
    image:"/claude-shannon.webp"
  },
  {
    year: "1948", 
    title: "Norbert Wiener — Cibernética", 
    description: "Desarrollo de la cibernética, disciplina que estudia control y comunicación en seres vivos y máquinas, introduciendo conceptos aplicables a computadoras inteligentes.", 
    image:"/CyberneticsBook.jpg"
  },
  {
    year: "1949", 
    title: "Donald Hebb — Aprendizaje Hebbiano", 
    description: "Publicación de 'The Organization of Behavior', postulando que las conexiones entre neuronas se fortalecen con la repetición, concepto clave para el aprendizaje automático.", 
    image:"/donaldhebb-thumb.jpg"
  },
  { 
    year: "1940-1949", 
    title: "Consolidación de bases conceptuales y tecnológicas", 
    description: "Década marcada por la convergencia de avances tecnológicos, teóricos y modelos interdisciplinarios que sentaron las bases conceptuales para la futura inteligencia artificial.", 
    image: "/IA-found.webp" 
  }
];

export const Timeline: React.FC = () => {
  return (
    <section className="w-full flex justify-center py-10 px-4">
      <div className="max-w-3xl w-full">
        {events.map((event, index) => (
          <TimelineItem
            key={index}
            year={event.year}
            title={event.title}
            description={event.description}
            image={event.image}
          />
        ))}
      </div>
    </section>
  );
};
