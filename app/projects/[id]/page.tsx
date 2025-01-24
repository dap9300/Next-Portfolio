import { notFound } from "next/navigation";

const projects = [
  {
    id: 1,
    title: "Magazzino sul Po",
    description: `
      Come Social Media Manager/crossfunctional/specialist adv ho gestito la strategia digitale del Magazzino sul Po, storico locale culturale torinese, raggiungendo significativi risultati in termini di crescita della presenza digitale.

      Responsabilità principali:
      - Gestione completa strategie social media (Facebook e Instagram)
      - Pianificazione e ottimizzazione campagne advertising
      - Content strategy per eventi culturali e musicali
      - Analisi dati e reportistica
      - Coordinamento con agenzia esterna per advertising
      - Gestione del budget pubblicitario mensile
      - Ottimizzazione conversioni sito web

      Risultati chiave:
      - Incremento copertura Instagram: +536,5%
      - Crescita copertura Facebook: +164,4%
      - Gestione budget: 685,99€
      - Risultati: 267.050 utenti raggiunti, CPC ottimizzato 0,26-0,34€
      - Focus: costruzione base utenti e brand awareness
    `,
    imageBefore: "/images/magazzino-sul-po-before.jpg",
    imageAfter: "/images/magazzino-sul-po-after.jpg",
  },
  // Aggiungi altri progetti qui
];

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === parseInt(params.id));

  if (!project) {
    notFound();
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p style={{ whiteSpace: "pre-line" }}>{project.description}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "16px",
        }}
      >
        <img
          src={project.imageBefore}
          alt={`${project.title} - Before`}
          style={{ width: "48%", borderRadius: "8px" }}
        />
        <img
          src={project.imageAfter}
          alt={`${project.title} - After`}
          style={{ width: "48%", borderRadius: "8px" }}
        />
      </div>
    </div>
  );
}
