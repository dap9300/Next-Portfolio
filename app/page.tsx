import Link from "next/link";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Magazzino sul Po",
    description: "Gestione della strategia digitale e campagne advertising.",
    imageBefore: "/images/magazzino-sul-po-before.jpg",
    imageAfter: "/images/magazzino-sul-po-after.jpg",
  },
  // Aggiungi altri progetti qui
];

export default function Home() {
  return (
    <div>
      <h1>Il Mio Portfolio</h1>
      <div>
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`}>
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>
    </div>
  );
}
