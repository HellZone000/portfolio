export type ProjectType = 'CNC' | '3D Print' | 'CAD' | 'Electronics' | 'Other' | 'Engineering / Manufacturing' | 'Robotics' | 'Metal Art';

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
    title: 'DIY CNC Machine',
    date: '2024-02',
    type: 'CNC', 
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
      "/images/cnc/machine-enclosure.jpg",
      "/images/cnc/milling-action.jpg",    
      "/images/cnc/result-elephant.jpg",   
      "/images/cnc/result-woman.jpg",    
      "/images/cnc/result-ship.jpg",      
      "/images/cnc/result-cuttingboard.jpg"
    ], 
    videoUrl: "rlnyZ306_eU", 
    featured: true,
    masterpiece: true,
    navbarFeatured: true,
    size: 'large'
  },
  // ... ALTRI PROGETTI
  // Smart solarpanel
  {
  id: 'dual-axis-solar-tracker',
  title: 'Solar Tracker',
  date: '2023-11',
  type: 'Electronics',
  description: {
    EN: "Autonomous dual-axis system optimizing solar energy efficiency via active light detection and precision 3D-printed mechanics.",
    IT: "Sistema autonomo di inseguimento solare a doppio asse. Ottimizza l'efficienza energetica tramite rilevamento attivo e meccanica stampata in 3D."
  },
  fullDescription: {
    EN: "This project represents a significant engineering evolution, transitioning from a rudimentary high-school prototype to a professional-grade mechatronic device. The primary focus was on enclosing the electronics, including the microcontroller, battery management system, and motor drivers—within a custom 3D-printed housing designed in Fusion360. This ensures wire protection and a clean aesthetic, while the integration of mechanical bearings significantly reduces friction and load on the stepper motors.\n\nThe control logic employs a differential comparator array of photoresistors. By actively comparing light intensity levels, the system adjusts the panel's azimuth and elevation to maintain a perfectly perpendicular alignment with the sun, thereby maximizing energy harvesting efficiency compared to static installations.\n\nThis iteration replaces a previous proof-of-concept that relied on a bulky array of four distinct photovoltaic panels separated by physical shaders to detect light direction based on voltage drops of each. The shift to photoresistors allowed for a more efficient sensor head and a more responsive tracking algorithm, marking a clear step up in design maturity.",
    IT: "Questo progetto rappresenta una significativa evoluzione ingegneristica, passando da un prototipo scolastico rudimentale a un dispositivo meccatronico di livello professionale. L'obiettivo principale è stato l'integrazione dell'elettronica, inclusi microcontrollore, sistema di gestione della batteria e driver motori—all'interno di un alloggiamento personalizzato stampato in 3D e progettato su Fusion360. Ciò garantisce la protezione del cablaggio e un'estetica pulita, mentre l'integrazione di cuscinetti meccanici riduce drasticamente l'attrito e il carico sugli steppermotor.\n\nLa logica di controllo impiega una matrice di comparazione differenziale basata su fotoresistenze. Confrontando attivamente i livelli di intensità luminosa, il sistema regola l'azimut e l'elevazione del pannello per mantenere un allineamento perfettamente perpendicolare al sole, massimizzando così la raccolta energetica rispetto alle installazioni statiche.\n\nQuesta iterazione sostituisce un precedente proof-of-concept che si affidava a un ingombrante array di quattro distinti pannelli fotovoltaici separati da ombreggianti fisici per rilevare la direzione della luce in base ai cali di tensione di ognuno. Il passaggio alle fotoresistenze ha permesso di realizzare una testa sensore più efficiente e un algoritmo di tracciamento più reattivo, segnando un netto passo avanti nella maturità progettuale."
  },
  techStack: ["Arduino", "C++", "Fusion 360", "3D Print", "Mechatronics"],
  image: "/images/solarpanel/background.jpg",
  gallery: [
      "/images/solarpanel/finished.jpg", 
      "/images/solarpanel/wiring.jpg",   
      "/images/solarpanel/sectionview.jpg",   
      "/images/solarpanel/cadexploded.jpg",    
      "/images/solarpanel/cadmodel.jpg",   
      "/images/solarpanel/frontprototype.jpg",      
      "/images/solarpanel/backprototype.jpg",       
    ], 
  featured: true,
  masterpiece: false,
  navbarFeatured: true,
  size: 'tall'
  },
  // KTM engine rebuild
  {
  id: 'ktm-125-engine-rebuild',
  title: 'KTM Engine Rebuild',
  date: '2024-09',
  type: 'Engineering / Manufacturing',
  description: {
    EN: "Independent full engine teardown and rebuild, including piston replacement, thread repair, gaskets replacement, and precision assembly to factory specs.",
    IT: "Smontaggio e ricostruzione completa autonoma del motore: sostituzione pistone, ripristino filettature, sostituizione guarnizioni e assemblaggio di precisione secondo specifiche di fabbrica."
  },
  fullDescription: {
    EN: "Executed a comprehensive mechanical overhaul of a 2004 KTM 125 EXC two-stroke engine, undertaken entirely independently. Without prior specific experience, the project involved a complete teardown to component level to assess wear and structural integrity. Key operations included piston replacement, gasket renewal, and the complex remediation of stripped threads on the aluminum block caused by previous maintenance failures.\n\nThe reassembly phase prioritized strict adherence to OEM torque specifications and tightening sequences. This project demonstrates the practical application of mechanical principles, the ability to interpret technical service manuals, and disciplined diagnostic problem-solving to restore the power unit to optimal operating conditions.",
    IT: "Esecuzione di una revisione meccanica completa di un motore a due tempi KTM 125 EXC del 2004, intrapresa in totale autonomia. Senza esperienza specifica pregressa, il progetto ha comportato lo smontaggio completo a livello dei componenti per valutare l'usura e l'integrità strutturale. Le operazioni chiave hanno incluso la sostituzione del pistone, il rinnovo delle guarnizioni e il complesso ripristino di filettature spanate sul blocco in alluminio, causate da errori di manutenzione precedenti.\n\nLa fase di riassemblaggio ha prioritizzato la rigorosa adesione alle specifiche di coppia OEM e alle sequenze di serraggio. Questo progetto dimostra l'applicazione pratica dei principi meccanici, la capacità di interpretare i manuali di servizio tecnico e un approccio disciplinato al problem-solving diagnostico per riportare l'unità motrice a condizioni operative ottimali."
  },
  techStack: ["Internal Combustion Engines", "Mechanical Diagnostics", "Thread Repair", "Torque Specs", "Maintenance"],
  image: "/images/ktm_rebuild/finished.jpg",
  gallery: [
      "/images//ktm_rebuild/finished.jpg", 
      "/images/ktm_rebuild/karteroff.jpg", 
      "/images/ktm_rebuild/cylinderoff.jpg", 
      "/images/ktm_rebuild/engine.jpg", 
      "/images/ktm_rebuild/strippedktm.jpg", 
  ],
  featured: true,
  masterpiece: false,
  navbarFeatured: false,
  size: 'medium'
  },
  // Honda engine rebuild
  {
  id: 'honda-glr125-engine-restoration',
  title: 'Honda Engine Restoration',
  date: '2025-10',
  type: 'Engineering / Manufacturing',
  description: {
    EN: "Complete engine restoration and reverse-engineering of a Honda GLR125's hareness without technical documentation.",
    IT: "Restauro completo motore e reverse-engineering elettrico dell'hareness di un Honda GLR125 in assenza di documentazione tecnica."
  },
  fullDescription: {
    EN: "This project focused on the resurrection of a Honda GLR125 internal combustion engine acquired in a non-operative state. The primary engineering challenge lay in the wiring harness, which lacked schematic documentation; I performed a complete reverse-engineering of the electrical system using continuity testing to identify and map the ignition, charging, and ECU pinouts.\n\nMechanically, the project required sourcing and integrating essential missing components, including the high-voltage ignition coil, voltage regulator, and fuel pump assembly. The project concluded with the successful startup and tuning of the engine, which is now the designated power unit for an upcoming custom-fabricated drift kart chassis.",
    IT: "Questo progetto si è concentrato sulla resurrezione di un motore a combustione interna Honda GLR125 acquisito in stato non operativo. La sfida ingegneristica principale risiedeva nel cablaggio, privo di schemi tecnici; ho eseguito un reverse-engineering completo dell'impianto elettrico tramite test di continuità per identificare e mappare i pinout di accensione, ricarica ed ECU.\n\nMeccanicamente, il progetto ha richiesto il reperimento e l'integrazione di componenti essenziali mancanti, tra cui la bobina di accensione ad alta tensione, il regolatore di tensione e il gruppo pompa carburante. Il progetto si è concluso con l'avviamento e la messa a punto del motore, che è ora l'unità motrice designata per un futuro telaio drift kart di fabbricazione artigianale."
  },
  techStack: ["Reverse Engineering", "Electrical Diagnostics", "Internal Combustion Engines", "Wiring Harness Design", "System Integration"],
  image: "/images/honda_rebuild/background.jpg",
  gallery: [
      "/images/honda_rebuild/closeuphareness.jpg", 
      "/images/honda_rebuild/hareness.jpg", 
      "/images/honda_rebuild/fuelpump.jpg", 
      "/images/honda_rebuild/pinion.jpg", 
      "/images/honda_rebuild/sidedirty.jpg", 
      "/images/honda_rebuild/frontdirty.jpg", 
      "/images/honda_rebuild/package.jpg"
  ],
  videoUrl: "mGn4c5E9y-I", 
  featured: true,
  masterpiece: false,
  navbarFeatured: false,
  size: 'medium'
  },
  // Fuel dispenser
  {
  id: '3d-printed-fuel-dispenser',
  title: 'Fuel Pump',
  date: '2025-11',
  type: '3D Print',
  description: {
    EN: "Ergonomic 3D-printed fuel nozzle with integrated electric pump for precision spill-free motorcycle refueling.",
    IT: "Pistola erogatrice stampata in 3D con pompa elettrica integrata per rifornimenti moto precisi e senza perdite."
  },
  fullDescription: {
    EN: "Designed to eliminate fuel spills and ergonomic difficulties during two-stroke refueling, in this project I utilized Fusion 360 to engineer a fully functional handheld dispensing system. The core mechanism repurposes an automotive fuel pump controlled by a custom-designed, spring-loaded trigger switch housed within the handle.\n\nA critical engineering consideration was material compatibility: recognizing that standard PETG degrades upon contact with gasoline, the internal geometry was designed to route the fuel hose continuously through the shell, ensuring the fluid never contacts the structural plastic. The system includes a custom-engineered jerry can cap with an integrated breather valve and gasket, ensuring pressure equalization and a hermetic seal during operation.",
    IT: "Progettato per eliminare i versamenti di carburante e le difficoltà ergonomiche durante il rifornimento dei motori a due tempi, in questo progetto ho utilizzato Fusion 360 per ingegnerizzare un sistema di erogazione portatile perfettamente funzionante. Il meccanismo centrale riutilizza una pompa carburante automotive, controllata da un interruttore a grilletto caricato a molla alloggiato nell'impugnatura.\n\nUna considerazione ingegneristica critica è stata la compatibilità dei materiali: sapendo che il PETG standard si degrada a contatto con la benzina, la geometria interna è stata progettata per far passare il tubo del carburante attraverso il guscio senza interruzioni, garantendo che il fluido non tocchi mai la plastica strutturale. Il sistema include un tappo per tanica progettato su misura con valvola di sfiato e guarnizione integrate, assicurando l'equalizzazione della pressione e una tenuta ermetica durante l'uso."
  },
  techStack: ["Fusion 360", "PETG 3D Printing", "Fluid Dynamics", "Automotive Parts", "Rapid Prototyping"],
  image: "/images/fuel_pump/cad2.jpg",
  gallery: [
      "/images/fuel_pump/finished.jpg",
      "/images/fuel_pump/switchcloseup.jpg",
      "/images/fuel_pump/cad2.jpg",
      "/images/fuel_pump/cad.jpg",
      "/images/fuel_pump/tankcap.jpg",
      "/images/fuel_pump/section.jpg"
  ],
  videoUrl: "vQqMiEAs4IA", 
  featured: false,
  masterpiece: false,
  navbarFeatured: false,
  size: 'medium'
  },
  //metal hearth
  {
  id: 'welded-rose-sculpture',
  title: 'Welded Steel Rose',
  date: '2025-02',
  type: 'Metal Art',
  description: {
    EN: "Hand-fabricated steel sculpture featuring manual sheet forming, precision TIG welding, and mirror surface finishing.",
    IT: "Scultura in acciaio realizzata a mano tramite formatura della lamiera, saldatura TIG di precisione e finitura a specchio."
  },
  fullDescription: {
    EN: "This project explores the artistic application of industrial fabrication techniques. Constructed from 1.5mm mild steel sheet, structural chain, and pickled tubing, the composition relies on precise cold forming and TIG welding. Each petal was individually cut and manually shaped to achieve organic curvature before being welded to the stem. The heart-shaped frame was rigidized by welding specific chain links to maintain geometry without compromising the visual flow. The post-processing phase involved extensive rotary wire wheel abrasion to uniform the surface texture, followed by the application of a protective clear lacquer to prevent oxidation while preserving the raw metallic aesthetic.",
    IT: "Questo progetto esplora l'applicazione artistica delle tecniche di fabbricazione industriale. Costruita partendo da lamiera di acciaio dolce da 1,5 mm, catena strutturale e tubi decapati, la composizione si basa sulla formatura a freddo e sulla saldatura TIG di precisione. Ogni petalo è stato tagliato singolarmente e modellato manualmente per ottenere una curvatura organica prima di essere saldato allo stelo. La cornice a forma di cuore è stata irrigidita saldando maglie specifiche della catena per mantenere la geometria senza compromettere il flusso visivo. La fase di post-elaborazione ha comportato un'estesa abrasione con spazzola rotativa per uniformare la texture superficiale, seguita dall'applicazione di una vernice trasparente protettiva per prevenire l'ossidazione preservando l'estetica metallica grezza."
  },
  techStack: ["TIG Welding", "Sheet Metal Forming", "Surface Finishing", "Metal Fabrication", "Creative Design"],
  image: "/images/metal_rose/rosecloseup.jpg",
  gallery: [
      "/images/metal_rose/rosecloseup.jpg",
      "/images/metal_rose/finished.jpg",
      "/images/metal_rose/rosemade.jpg",
      "/images/metal_rose/rose.jpg",
      "/images/metal_rose/parts.jpg",
      "/images/metal_rose/leaves.jpg",
      "/images/metal_rose/weldedchain.jpg",
      "/images/metal_rose/chain.jpg"
  ],
  featured: false,
  masterpiece: false,
  navbarFeatured: false,
  size: 'medium'
  },
  // Whiskey smoker
  {
  id: 'cnc-whiskey-smoker',
  title: 'Whiskey Smoker',
  date: '2025-06',
  type: 'CNC',
  description: {
    EN: "Precision 2-sided CNC machining of olive wood, featuring custom probing logic for perfect alignment.",
    IT: "Lavorazione CNC su 2 lati in legno d'ulivo, con logica di tastatura 3D custom per un allineamento perfetto."
  },
  fullDescription: {
    EN: "I designed and manufactured this whiskey smoker using Fusion 360 and my custom CNC router. The project presented a specific manufacturing challenge: machining complex dual-sided geometry on a standard 3-axis system. To address this, I engineered a two-sided milling operation. The critical success factor was the alignment strategy; after flipping the stock, I utilized a custom-scripted 3D probe routine to reference the central bore as the new machine zero, ensuring perfect concentricity between the top and bottom features. \n\nI selected solid olive wood for its high density and aesthetic grain. The assembly features a precision fit for the stainless steel mesh where the wood chips are placed for burning. Finally, the piece is finished with food-grade mineral oil to ensure durability and thermal resistance.",
    IT: "Ho progettato questo affumicatore per whiskey utilizzando Fusion 360 e l'ho realizzato con la mia CNC. Il progetto presentava una sfida di produzione: lavorare geometrie complesse su due lati con un sistema standard a 3 assi. Per superare questo problema ho progettato un'operazione di fresatura 'two-sided'. Il fattore critico di successo è stato la strategia di allineamento dopo aver capovolto il pezzo; ho scritto una routine personalizzata per la sonda tastatrice 3D per referenziare il foro centrale come nuovo zero macchina, garantendo una concentricità perfetta tra le lavorazioni superiori e inferiori. \n\nHo scelto come materiale il legno d'ulivo massello per la sua densità e venatura estetica, l'assemblaggio invece include un alloggiamento preciso per la maglia in acciaio, su cui verranno posizionati i trucioli da bruciare. Infine rifinito con olio minerale alimentare per garantire durata e resistenza termica."
  },
  techStack: ["Fusion 360 CAM", "CNC Milling", "G-Code Programming", "Probing Routines", "Woodworking"],
  image: "/images/whiskey_smoker/closedsmoker.jpg",
  gallery: [
      "/images/whiskey_smoker/closedsmoker.jpg",
      "/images/whiskey_smoker/opensmoker.jpg"
  ],
  videoUrl: "", 
  featured: false,
  masterpiece: false,
  navbarFeatured: false,
  size: 'tall'
  },
  // tumbler gearbox
  {
    id: 'tumbler-gearbox',
    title: 'tumbler gearbox',
    date: '2023-08',
    type: '3D Print',
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
//garage
//bin covers
//ipad swivel
//mitutoio comparator box
//vacuum brush mount
//whiskey smoker