import Link from "next/link";

export default function ProjectCard({ project }: { project: any }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        margin: "16px 0",
        cursor: "pointer",
        transition: "transform 0.2s",
      }}
    >
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <img
        src={project.imageBefore}
        alt={`${project.title} - Before`}
        style={{ width: "100%", borderRadius: "8px" }}
      />
    </div>
  );
}
