import { useQuery } from "@apollo/client";
import Spinner from "./Spinner";
import { GET_PROJECTS } from "../queries/projectQueries";
import ProjectCard from "./ProjectCard";
function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);
  if (loading) return <Spinner />;
  if (error) return <p className="mt-4">somathing went wrong</p>;
  return (
    <>
      {data.projects.length > 0 ? (
        <div className="row mt-4 flex gap-3">
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No projects</p>
      )}
    </>
  );
}

export default Projects;
