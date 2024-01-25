function ProjectCard({ project }) {
  return (
    <div
      className="card text-dark bg-light mb-3  "
      style={{ maxWidth: "25rem" }}
    >
      <div className="card-header">{project.name}</div>
      <div className="card-body d-flex justify-content-between align-items-center">
        <h5 className="card-title  ">{project.name}</h5>
        <p className="card-text small">
          Status: <strong>{project.status} </strong>
        </p>
        <a className="btn btn-dark" href={`/projects/${project.id}`}>
          View
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
