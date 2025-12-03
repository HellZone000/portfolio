import React from 'react';
import Link from 'next/link';

export type ProjectType = 'CNC' | '3D Print' | 'CAD' | 'Electronics' | 'Other' | 'Engineering / Manufacturing' | 'Robotics' | 'Metal Art';

export interface Project {
  id: string;
  title: string;
  date: string;
  type: ProjectType;
  description: { EN: string; IT: string; };
  // MODIFICA CHIAVE: fullDescription ora accetta React.ReactNode (testo misto a link/html)
  fullDescription: { EN: React.ReactNode; IT: React.ReactNode; };
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
      EN: "3-Axis CNC milling machine designed from scratch. Aluminum & steel frame, custom electronics, high precision.",
      IT: "Fresatrice a 3 assi progettata da zero. Telaio in acciaio e alluminio, elettronica custom, alta precisione."
    },
    fullDescription: {
      EN: <>
        This project stems from the goal of designing and building a custom CNC machine from scratch, developed as a practical application of the technical skills I've honed over the years. The entire structure was fabricated from pickled steel tubing, manually cut, prepared, and welded with special attention paid to overall rigidity and geometric precision. Flatness was verified through diagonal checks and progressive measurements to ensure optimal alignment of the reference planes.<br/><br/>
        The work includes not just the mechanical part, but also the machine's entire electronic and electrical system. I designed and wired a complete electrical panel, integrating stepper motor drivers, a spindle inverter, ESP32-based control boards running FluidNC firmware, dedicated power supplies, and safety systems using circuit breakers and safety relays. I implemented emergency stop buttons (E-STOP), proximity sensors for safety, processing door closure monitoring, and interlock logic to ensure reliable operation compliant with good automation practices.<br/><br/>
        The machine employs a 3D touch probe for advanced probing operations, leveraging coordinates detected in the Cartesian plane to precisely determine centers, angles, and other geometric references. I developed dedicated macros to simplify zeroing, centering, and surface/angle verification procedures, improving repeatability and efficiency.<br/><br/>
        The worktable was designed with modularity in mind to facilitate workpiece clamping and adapt to different materials, from wood and plastics to technical foams. This project represents a synthesis of my journey: 3D modeling, welding, applied mechanics, electronics, software configuration, automation, and problem-solving. It is the result of an evolved DIY approach, developed entirely independently, from the idea to the functioning machine.
      </>,
      IT: <>
        Questo progetto nasce dall’obiettivo di progettare e costruire da zero una macchina CNC personalizzata, sviluppata come applicazione concreta delle mie competenze tecniche maturate negli anni. L’intera struttura è stata realizzata a partire da tubolari in acciaio decapato, tagliati, preparati e saldati manualmente, con particolare attenzione alla rigidità complessiva e alla precisione geometrica. La planarità è stata verificata tramite controllo delle diagonali e misurazioni progressive per garantire un allineamento ottimale dei piani di riferimento.<br/><br/>
        Il lavoro include non solo la parte meccanica, ma anche l’intero sistema elettronico ed elettrico della macchina. Ho progettato e cablato un pannello elettrico completo, integrando driver per motori stepper, inverter per il mandrino, schede di controllo basate su ESP32 con firmware FluidNC, alimentatori dedicati, sistemi di protezione tramite magnetotermici e relè di sicurezza. Ho implementato pulsanti di emergenza (E-STOP), sensori di prossimità per la sicurezza, il controllo della chiusura della porta di lavorazione e logiche di interblocco per garantire un funzionamento affidabile e conforme alle buone pratiche dell’automazione.<br/><br/>
        La macchina impiega un tastatore 3D per operazioni avanzate di probing, sfruttando le coordinate rilevate nel piano cartesiano per determinare con precisione centri, angoli e altri riferimenti geometrici. Ho sviluppato macro dedicate per semplificare procedure di azzeramento, centratura e verifica di superfici e angoli, migliorando ripetibilità ed efficienza.<br/><br/>
        Il piano di lavoro è stato progettato con criteri di modularità per facilitare il fissaggio del pezzo e adattarsi a materiali differenti, dal legno alle plastiche fino a schiume tecniche. Questo progetto rappresenta una sintesi del mio percorso: modellazione 3D, saldatura, meccanica applicata, elettrica, configurazione software, automazione e problem solving. È il risultato di un approccio DIY evoluto, sviluppato interamente in autonomia, dall’idea alla macchina funzionante.
      </>
    },
    techStack: ["Fusion 360", "FluidNC", "ESP32", "Steel Welding", "Electronics Design", "Macro Programming"],
    externalLinks: [],
    image: "/images/cnc/frame-structure.jpg",
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
      EN: <>
        This project represents a significant engineering evolution, transitioning from a rudimentary high-school prototype to a professional-grade mechatronic device. The primary focus was on enclosing the electronics, including the microcontroller, battery management system, and motor drivers—within a custom 3D-printed housing designed in Fusion360. This ensures wire protection and a clean aesthetic, while the integration of mechanical bearings significantly reduces friction and load on the stepper motors.<br/><br/>
        The control logic employs a differential comparator array of photoresistors. By actively comparing light intensity levels, the system adjusts the panel's azimuth and elevation to maintain a perfectly perpendicular alignment with the sun, thereby maximizing energy harvesting efficiency compared to static installations.<br/><br/>
        This iteration replaces a previous proof-of-concept that relied on a bulky array of four distinct photovoltaic panels separated by physical shaders to detect light direction based on voltage drops of each. The shift to photoresistors allowed for a more efficient sensor head and a more responsive tracking algorithm, marking a clear step up in design maturity.
      </>,
      IT: <>
        Questo progetto rappresenta una significativa evoluzione ingegneristica, passando da un prototipo scolastico rudimentale a un dispositivo meccatronico di livello professionale. L'obiettivo principale è stato l'integrazione dell'elettronica, inclusi microcontrollore, sistema di gestione della batteria e driver motori—all'interno di un alloggiamento personalizzato stampato in 3D e progettato su Fusion360. Ciò garantisce la protezione del cablaggio e un'estetica pulita, mentre l'integrazione di cuscinetti meccanici riduce drasticamente l'attrito e il carico sugli steppermotor.<br/><br/>
        La logica di controllo impiega una matrice di comparazione differenziale basata su fotoresistenze. Confrontando attivamente i livelli di intensità luminosa, il sistema regola l'azimut e l'elevazione del pannello per mantenere un allineamento perfettamente perpendicolare al sole, massimizzando così la raccolta energetica rispetto alle installazioni statiche.<br/><br/>
        Questa iterazione sostituisce un precedente proof-of-concept che si affidava a un ingombrante array di quattro distinti pannelli fotovoltaici separati da ombreggianti fisici per rilevare la direzione della luce in base ai cali di tensione di ognuno. Il passaggio alle fotoresistenze ha permesso di realizzare una testa sensore più efficiente e un algoritmo di tracciamento più reattivo, segnando un netto passo avanti nella maturità progettuale.
      </>
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
      EN: <>
        Executed a comprehensive mechanical overhaul of a 2004 KTM 125 EXC two-stroke engine, undertaken entirely independently. Without prior specific experience, the project involved a complete teardown to component level to assess wear and structural integrity. Key operations included piston replacement, gasket renewal, and the complex remediation of stripped threads on the aluminum block caused by previous maintenance failures.<br/><br/>
        The reassembly phase prioritized strict adherence to OEM torque specifications and tightening sequences. This project demonstrates the practical application of mechanical principles, the ability to interpret technical service manuals, and disciplined diagnostic problem-solving to restore the power unit to optimal operating conditions.
      </>,
      IT: <>
        Esecuzione di una revisione meccanica completa di un motore a due tempi KTM 125 EXC del 2004, intrapresa in totale autonomia. Senza esperienza specifica pregressa, il progetto ha comportato lo smontaggio completo a livello dei componenti per valutare l'usura e l'integrità strutturale. Le operazioni chiave hanno incluso la sostituzione del pistone, il rinnovo delle guarnizioni e il complesso ripristino di filettature spanate sul blocco in alluminio, causate da errori di manutenzione precedenti.<br/><br/>
        La fase di riassemblaggio ha prioritizzato la rigorosa adesione alle specifiche di coppia OEM e alle sequenze di serraggio. Questo progetto dimostra l'applicazione pratica dei principi meccanici, la capacità di interpretare i manuali di servizio tecnico e un approccio disciplinato al problem-solving diagnostico per riportare l'unità motrice a condizioni operative ottimali.
      </>
    },
    techStack: ["Internal Combustion Engines", "Mechanical Diagnostics", "Thread Repair", "Torque Specs", "Maintenance"],
    image: "/images/ktm_rebuild/finished.jpg",
    gallery: [
      "/images/ktm_rebuild/finished.jpg",
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
      EN: <>
        This project focused on the resurrection of a Honda GLR125 internal combustion engine acquired in a non-operative state. The primary engineering challenge lay in the wiring harness, which lacked schematic documentation; I performed a complete reverse-engineering of the electrical system using continuity testing to identify and map the ignition, charging, and ECU pinouts.<br/><br/>
        Mechanically, the project required sourcing and integrating essential missing components, including the high-voltage ignition coil, voltage regulator, and fuel pump assembly. The project concluded with the successful startup and tuning of the engine, which is now the designated power unit for an upcoming custom-fabricated drift kart chassis.
      </>,
      IT: <>
        Questo progetto si è concentrato sulla resurrezione di un motore a combustione interna Honda GLR125 acquisito in stato non operativo. La sfida ingegneristica principale risiedeva nel cablaggio, privo di schemi tecnici; ho eseguito un reverse-engineering completo dell'impianto elettrico tramite test di continuità per identificare e mappare i pinout di accensione, ricarica ed ECU.<br/><br/>
        Meccanicamente, il progetto ha richiesto il reperimento e l'integrazione di componenti essenziali mancanti, tra cui la bobina di accensione ad alta tensione, il regolatore di tensione e il gruppo pompa carburante. Il progetto si è concluso con l'avviamento e la messa a punto del motore, che è ora l'unità motrice designata per un futuro telaio drift kart di fabbricazione artigianale.
      </>
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
      EN: <>
        Designed to eliminate fuel spills and ergonomic difficulties during two-stroke refueling, in this project I utilized Fusion 360 to engineer a fully functional handheld dispensing system. The core mechanism repurposes an automotive fuel pump controlled by a custom-designed, spring-loaded trigger switch housed within the handle.<br/><br/>
        A critical engineering consideration was material compatibility: recognizing that standard PETG degrades upon contact with gasoline, the internal geometry was designed to route the fuel hose continuously through the shell, ensuring the fluid never contacts the structural plastic. The system includes a custom-engineered jerry can cap with an integrated breather valve and gasket, ensuring pressure equalization and a hermetic seal during operation.
      </>,
      IT: <>
        Progettato per eliminare i versamenti di carburante e le difficoltà ergonomiche durante il rifornimento dei motori a due tempi, in questo progetto ho utilizzato Fusion 360 per ingegnerizzare un sistema di erogazione portatile perfettamente funzionante. Il meccanismo centrale riutilizza una pompa carburante automotive, controllata da un interruttore a grilletto caricato a molla alloggiato nell'impugnatura.<br/><br/>
        Una considerazione ingegneristica critica è stata la compatibilità dei materiali: sapendo che il PETG standard si degrada a contatto con la benzina, la geometria interna è stata progettata per far passare il tubo del carburante attraverso il guscio senza interruzioni, garantendo che il fluido non tocchi mai la plastica strutturale. Il sistema include un tappo per tanica progettato su misura con valvola di sfiato e guarnizione integrate, assicurando l'equalizzazione della pressione e una tenuta ermetica durante l'uso.
      </>
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
      EN: <>
        This project explores the artistic application of industrial fabrication techniques. Constructed from 1.5mm mild steel sheet, structural chain, and pickled tubing, the composition relies on precise cold forming and TIG welding. Each petal was individually cut and manually shaped to achieve organic curvature before being welded to the stem. The heart-shaped frame was rigidized by welding specific chain links to maintain geometry without compromising the visual flow. The post-processing phase involved extensive rotary wire wheel abrasion to uniform the surface texture, followed by the application of a protective clear lacquer to prevent oxidation while preserving the raw metallic aesthetic.
      </>,
      IT: <>
        Questo progetto esplora l'applicazione artistica delle tecniche di fabbricazione industriale. Costruita partendo da lamiera di acciaio dolce da 1,5 mm, catena strutturale e tubi decapati, la composizione si basa sulla formatura a freddo e sulla saldatura TIG di precisione. Ogni petalo è stato tagliato singolarmente e modellato manualmente per ottenere una curvatura organica prima di essere saldato allo stelo. La cornice a forma di cuore è stata irrigidita saldando maglie specifiche della catena per mantenere la geometria senza compromettere il flusso visivo. La fase di post-elaborazione ha comportato un'estesa abrasione con spazzola rotativa per uniformare la texture superficiale, seguita dall'applicazione di una vernice trasparente protettiva per prevenire l'ossidazione preservando l'estetica metallica grezza.
      </>
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
      EN: <>
        I designed and manufactured this whiskey smoker using Fusion 360 and my <Link href="/projects/cnc-machine" className="text-indigo-400 hover:underline">custom CNC machine</Link>. The project presented a specific manufacturing challenge: machining complex dual-sided geometry on a standard 3-axis system. To address this, I engineered a two-sided milling operation. The process involved a critical flipping step. To secure the semi-finished part for the second side, I designed and 3D printed custom soft jaws, ensuring a rigid hold without surface damage. Once clamped, I executed a custom-scripted 3D probe routine to reference the central bore as the new machine zero, ensuring perfect concentricity between the top and bottom features.<br/><br/>
        I selected solid olive wood for its high density and aesthetic grain. The assembly features a precision fit for the stainless steel mesh where the wood chips are placed for burning. Finally, the piece is finished with food-grade mineral oil to ensure durability and thermal resistance.
      </>,
      IT: <>
        Ho progettato e realizzato questo affumicatore per whiskey utilizzando Fusion 360 e la mia <Link href="/projects/cnc-machine" className="text-indigo-400 hover:underline">macchina CNC</Link>. Il progetto presentava una specifica sfida di produzione: lavorare geometrie complesse su due lati con un sistema standard a 3 assi. Per superare questo limite, ho ingegnerizzato un'operazione di fresatura 'two-sided'. Il processo ha richiesto un passaggio critico di ribaltamento del pezzo. Per fissare il semilavorato durante la seconda fase, ho progettato e stampato in 3D delle soft jaws (morsetti sagomati) su misura. Una volta bloccato il pezzo, il fattore decisivo è stato l'allineamento: ho utilizzato una routine personalizzata per la sonda tastatrice 3D per referenziare il foro centrale come nuovo zero macchina, garantendo una concentricità perfetta tra le lavorazioni superiori e inferiori.<br/><br/>
        Fabbricato in legno d'ulivo massello per la sua densità e venatura estetica, l'assemblaggio include un alloggiamento preciso per la maglia in acciaio ed è rifinito con olio minerale alimentare per garantire durata e resistenza termica.
      </>
    },
    techStack: ["Fusion 360 CAM", "CNC Milling", "G-Code Programming", "Probing Routines", "Woodworking"],
    image: "/images/whiskey_smoker/closedsmoker.jpg",
    gallery: [
      "/images/whiskey_smoker/artistic.jpg",
      "/images/whiskey_smoker/closedsmoker.jpg",
      "/images/whiskey_smoker/opensmoker.jpg"
    ],
    videoUrl: "ltp_nKEQzCw",
    featured: false,
    masterpiece: false,
    navbarFeatured: false,
    size: 'tall'
  },
  {
    id: 'automatic-water-dripper',
    title: 'Automated Chameleon Dripper',
    date: '2025-11',
    type: 'Electronics',
    description: {
      EN: "Closed-loop water recirculation system with RTC scheduling, active pump protection, and custom 3D-printed enclosure.",
      IT: "Sistema di ricircolo acqua a circuito chiuso con programmazione RTC, protezione attiva della pompa e case stampato in 3D."
    },
    fullDescription: {
      EN: <>
        I designed and built this automated closed-loop hydration system specifically for a chameleon enclosure, ensuring a continuous but controlled water drip. The architecture features a dual-reservoir design: a lower reservoir houses a submersible pump and a float switch, while an upper reservoir regulates the drip rate. Water is collected, filtered, and returned to the bottom tank via gravity, creating a sustainable cycle.<br/><br/>
        The electronic control unit is powered by an Arduino Nano programmed in C++. It interfaces with a Real-Time Clock (RTC) module to schedule activation only during specific hours, and an OLED display provides real-time status updates. To handle the 12V pump load, I designed a driver circuit using a transistor-relay configuration with a flyback diode for inductive spike protection.<br/><br/>
        Safety logic is central to the firmware: the pump is hardware-interlocked by the float switch to prevent dry-running. Additionally, a software watchdog triggers a system alarm if the lower reservoir fails to refill within 30 minutes, indicating a potential leak or blockage. The entire electronics assembly is housed in a custom-designed, 3D-printed PETG enclosure with organized wire management.
      </>,
      IT: <>
        Ho progettato e costruito questo sistema di idratazione automatizzato a circuito chiuso specificamente per un terrario per camaleonti, garantendo un gocciolamento continuo ma controllato. L'architettura presenta un design a doppio serbatoio: un serbatoio inferiore ospita una pompa sommersa e un interruttore a galleggiante, mentre un serbatoio superiore regola la velocità di gocciolamento. L'acqua viene raccolta, filtrata e riportata al serbatoio inferiore per gravità, creando un ciclo sostenibile.<br/><br/>
        L'unità di controllo elettronica è gestita da un Arduino Nano programmato in C++. Si interfaccia con un modulo Real-Time Clock (RTC) per programmare l'attivazione solo in orari specifici, mentre un display OLED fornisce aggiornamenti di stato in tempo reale. Per gestire il carico della pompa a 12V, ho progettato un circuito di pilotaggio utilizzando una configurazione transistor-relè con un diodo flyback per la protezione dai picchi induttivi.<br/><br/>
        La logica di sicurezza è centrale nel firmware: la pompa è bloccata a livello hardware dall'interruttore a galleggiante per prevenire il funzionamento a secco. Inoltre, un watchdog software attiva un allarme di sistema se il serbatoio inferiore non si riempie entro 30 minuti, indicando una potenziale perdita o ostruzione. L'intera elettronica è alloggiata in un involucro in PETG progettato su misura e stampato in 3D, con una gestione ordinata del cablaggio.
      </>
    },
    techStack: ["Arduino Nano", "C++", "Power Electronics", "3D Printing PETG", "Sensors & Logic"],
    image: "/images/auto_dripper/openbox.jpg",
    gallery: [
      "/images/auto_dripper/finished.jpg",
      "/images/auto_dripper/openbox.jpg",
      "/images/auto_dripper/breadboard.jpg",
      "/images/auto_dripper/ciotola.jpg",
      "/images/auto_dripper/arduinonano.jpg"
    ],
    videoUrl: "",
    featured: true,
    masterpiece: false,
    navbarFeatured: false,
    size: 'tall'
  },
  {
  id: 'brain-and-tree',
  title: 'Brain and Tree',
  date: '2025-05',
  type: 'CNC',
  description: {
    EN: "Complex high-relief CNC carving of a brain-tree fusion in Lebanon Cedar, demonstrating advanced 3-axis machining capabilities.",
    IT: "Scultura CNC in alto rilievo su Cedro del Libano raffigurante una fusione cervello-albero. Dimostrazione di lavorazione avanzata a 3 assi."
  },
  fullDescription: {
    EN: <>This project was executed as the capstone work for my Scientific High School diploma, designed to thoroughly test and demonstrate the capabilities of my <Link href="/projects/cnc-machine" className="text-indigo-400 hover:underline">custom CNC machine</Link>. The objective was to transform a solid block of Lebanon Cedar into a complex deep-relief sculpture depicting the anatomical fusion of a human brain and a tree structure.\n\nThe manufacturing process required advanced CAM strategies in Fusion 360, orchestrating a sequence of aggressive roughing operations followed by high-resolution finishing passes and detailed engraving. The workflow tested the machine's rigidity and precision over a prolonged run time. Post-machining, the piece was hand-finished with beeswax to preserve the grain definition and provide a lasting sheen.\n\nThe final artwork was donated to the \"Erasmo da Rotterdam\" Institute in Nichelino, where it remains as a permanent installation.
    </>,
    IT: <>Questo progetto è stato realizzato come lavoro conclusivo per il mio diploma di Liceo Scientifico, progettato per testare a fondo e dimostrare le capacità della mia <Link href="/projects/cnc-machine" className="text-indigo-400 hover:underline">macchina CNC autocostruita</Link>. L'obiettivo era trasformare un blocco massello di Cedro del Libano in una complessa scultura in alto rilievo, raffigurante la fusione anatomica tra un cervello umano e una struttura arborea.\n\nIl processo produttivo ha richiesto strategie CAM avanzate in Fusion 360, orchestrando una sequenza di operazioni di sgrossatura aggressiva seguite da passate di finitura ad alta risoluzione e incisione dettagliata. Il flusso di lavoro ha testato la rigidità e la precisione della macchina su tempi di esecuzione prolungati. Dopo la lavorazione, il pezzo è stato rifinito a mano con cera d'api per preservare la definizione delle venature e garantire una lucentezza duratura.\n\nL'opera finale è stata donata all'Istituto \"Erasmo da Rotterdam\" di Nichelino, dove rimane come installazione permanente.
    </>,
  },
  techStack: ["Fusion 360 CAM", "CNC Milling", "Woodworking", "Surface Finishing", "Artistic Design"],
  image: "/images/brain_tree/finish.jpg",
  gallery: [
    "/images/brain_tree/finish.jpg",
    "/images/brain_tree/closeup.jpg",
    "/images/brain_tree/wideview.jpg",
    "/images/brain_tree/steps.jpg",
    "/images/brain_tree/roughing.jpg",
    "/images/brain_tree/block.jpg",
  ],
  videoUrl: "z0fctmtrybU",
  featured: false,
  masterpiece: false,
  navbarFeatured: false,
  size: 'medium'
  },
  {
    id: 'tumbler-gearbox',
    title: 'Tumbler Gearbox',
    date: '2023-08',
    type: '3D Print',
    description: {
      EN: "Parametric lamp generated with Voronoi algorithms.",
      IT: "Lampada parametrica generata con algoritmi Voronoi."
    },
    fullDescription: {
      EN: <>An exploration of generative design. The mesh was created using Grasshopper algorithms to simulate organic cell growth.</>,
      IT: <>Un'esplorazione del design generativo. La mesh è stata creata usando algoritmi Grasshopper per simulare la crescita cellulare organica.</>
    },
    techStack: ["Grasshopper", "Rhino 3D", "3D Printing"],
    image: "/images/lamp-cover.jpg",
    featured: true,
    masterpiece: false,
    navbarFeatured: true,
    size: 'tall'
  }
];

//vases

//soppalco

//garage

//bin covers

//ipad swivel

//mitutoio comparator box

//vacuum brush mount

//giglio