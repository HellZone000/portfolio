export type ProjectType = 'CNC' | '3D Print' | 'CAD' | 'Electronics' | 'Other' | 'Engineering / Manufacturing' | 'Robotics' | '3D Printing';

export interface Project {
  id: string;
  title: string;
  date: string;
  type: ProjectType;
  description: { EN: string; IT: string; };
  fullDescription: { EN: string; IT: string; };
  techStack: string[];
  externalLinks?: { label: string; url: string }[];
  image: string;
  gallery?: string[];
  videoUrl?: string;
  featured: boolean;
  masterpiece: boolean;
  navbarFeatured: boolean;
  size: 'small' | 'medium' | 'large' | 'tall';
}

export const projects: Project[] = [
  {
    id: 'cnc-machine',
    title: 'Custom 3-Axis CNC',
    date: '2024-02',
    type: 'Engineering / Manufacturing',
    description: {
      EN: "3-Axis CNC milling machine designed from scratch. Steel frame, custom electronics, high precision.",
      IT: "Fresatrice a 3 assi progettata da zero. Telaio in acciaio, elettronica custom, alta precisione."
    },
    fullDescription: {
      EN: "This project was born from the goal of designing and building a fully custom CNC machine from scratch, as a practical application of the technical skills I had developed over the years. The mechanical structure was constructed using pickled steel tubing, cut, prepared and welded by hand, with particular attention to rigidity and geometric accuracy. Planarity was verified through diagonal checks and progressive measurements to ensure optimal alignment of all reference surfaces. \n\nThe work includes not only the mechanical aspect but also the complete electrical and electronic system of the machine. I designed and wired a full electrical panel integrating stepper motor drivers, a spindle inverter, ESP32-based control boards running FluidNC, dedicated power supplies, circuit breakers, and safety relays. I implemented emergency stop buttons, proximity sensors, a safety door-lock system, and interlock logic to ensure reliable and safe operation consistent with industrial automation standards. \n\nThe machine features a 3D touch probe for advanced probing operations, using coordinates acquired in the machine’s Cartesian plane to precisely locate centers, angles, and geometric references. I developed custom macros to streamline zeroing, centering, and surface or angle verification procedures, improving repeatability and workflow efficiency. \n\nThe work surface was designed with modularity in mind to simplify workpiece holding and adapt to different materials such as wood, plastics, and technical foams. This project represents the synthesis of my skill set: 3D modeling, welding, applied mechanics, electrical engineering, software configuration, automation, and problem solving. It is the result of an advanced DIY approach, carried out entirely independently, from concept to fully functional machine",
      IT: "Questo progetto nasce dall’obiettivo di progettare e costruire da zero una macchina CNC personalizzata, sviluppata come applicazione concreta delle mie competenze tecniche maturate negli anni. L’intera struttura è stata realizzata a partire da tubolari in acciaio decapato, tagliati, preparati e saldati manualmente, con particolare attenzione alla rigidità complessiva e alla precisione geometrica. La planarità è stata verificata tramite controllo delle diagonali e misurazioni progressive per garantire un allineamento ottimale dei piani di riferimento.\n\nIl lavoro include non solo la parte meccanica, ma anche l’intero sistema elettronico ed elettrico della macchina. Ho progettato e cablato un pannello elettrico completo, integrando driver per motori stepper, inverter per il mandrino, schede di controllo basate su ESP32 con firmware FluidNC, alimentatori dedicati, sistemi di protezione tramite magnetotermici e relè di sicurezza. Ho implementato pulsanti di emergenza (E-STOP), sensori di prossimità per la sicurezza, il controllo della chiusura della porta di lavorazione e logiche di interblocco per garantire un funzionamento affidabile e conforme alle buone pratiche dell’automazione.\n\nLa macchina impiega un tastatore 3D per operazioni avanzate di probing, sfruttando le coordinate rilevate nel piano cartesiano per determinare con precisione centri, angoli e altri riferimenti geometrici. Ho sviluppato macro dedicate per semplificare procedure di azzeramento, centratura e verifica di superfici e angoli, migliorando ripetibilità ed efficienza.\n\nIl piano di lavoro è stato progettato con criteri di modularità per facilitare il fissaggio del pezzo e adattarsi a materiali differenti, dal legno alle plastiche fino a schiume tecniche. Questo progetto rappresenta una sintesi del mio percorso: modellazione 3D, saldatura, meccanica applicata, elettrica, configurazione software, automazione e problem solving. È il risultato di un approccio DIY evoluto, sviluppato interamente in autonomia, dall’idea alla macchina funzionante."
    },
    techStack: ["Fusion 360", "FluidNC", "ESP32", "Steel Welding", "Electronics Design", "Macro Programming"],
    externalLinks: [
      // { label: "CAD Preview", url: "#" },
    ],
    // USA L'IMMAGINE DEL TELAIO VERDE COME COVER (image_11.png)
    image: "/images/cnc/frame-structure.jpg",
    // TUTTE LE ALTRE IMMAGINI NELLA GALLERIA
    gallery: [
      "/images/cnc/machine-enclosure.jpg", // image_15.png (Macchina finita nel box)
      "/images/cnc/milling-action.jpg",    // image_4.png (Lavorazione in corso)
      "/images/cnc/result-elephant.jpg",   // image_9.png (Elefante)
      "/images/cnc/result-woman.jpg",      // image_24.png (Donna)
      "/images/cnc/result-ship.jpg",       // image_31.png (Veliero)
      "/images/cnc/result-cuttingboard.jpg"// image_21.png (Tagliere)
    ], 
    videoUrl: "rlnyZ306_eU", 
    featured: true,
    masterpiece: true,
    navbarFeatured: true,
    size: 'large'
  },
  // ... ALTRI PROGETTI (lasciali pure come sono per ora) ...
  {
    id: 'automatic solar panel',
    title: 'automatic solar panel',
    date: '2023-11',
    type: 'Robotics',
    description: {
      EN: "Anthropomorphic robotic arm with kinematic control.",
      IT: "Braccio robotico antropomorfo con controllo cinematico."
    },
    fullDescription: {
      EN: "A 3D printed robotic arm driven by stepper motors. I wrote a custom inverse kinematics solver in Python to control the end-effector position in 3D space.",
      IT: "Braccio robotico stampato in 3D guidato da motori passo-passo. Ho scritto un solver di cinematica inversa in Python per controllare la posizione dell'end-effector nello spazio 3D."
    },
    techStack: ["Python", "Inverse Kinematics", "Stepper Motors", "PCB Design"],
    image: "/images/robot-cover.jpg",
    featured: true,
    masterpiece: false,
    navbarFeatured: true,
    size: 'medium'
  },
  {
    id: 'tumbler',
    title: 'tumbler',
    date: '2023-08',
    type: '3D Printing',
    description: {
      EN: "Parametric lamp generated with Voronoi algorithms.",
      IT: "Lampada parametrica generata con algoritmi Voronoi."
    },
    fullDescription: {
      EN: "An exploration of generative design. The mesh was created using Grasshopper algorithms to simulate organic cell growth.",
      IT: "Un'esplorazione del design generativo. La mesh è stata creata usando algoritmi Grasshopper per simulare la crescita cellulare organica."
    },
    techStack: ["Grasshopper", "Rhino 3D", "3D Printing"],
    image: "/images/lamp-cover.jpg",
    featured: true,
    masterpiece: false,
    navbarFeatured: true,
    size: 'tall'
  }
];

//water dripper
//vases
//soppalco