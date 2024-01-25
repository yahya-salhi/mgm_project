import Clients from "../componets/Clients";
import Projects from "../componets/Projects";
import AddClientModal from "../componets/addClientModal";
import AddProjectModal from "../componets/AddProjectModal";
function Home() {
  return (
    <>
      <div className="d-flex gap-4 mb-4">
        <AddClientModal />
        <AddProjectModal />
      </div>

      <Projects />
      <hr />
      <Clients />
    </>
  );
}

export default Home;
