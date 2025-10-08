import DashboardHeader from "../../ui/DashboardHeader";
import Stats from "./Stats";
import Loading from "../../ui/Loading";
import useProposals from "../proposals/useProposals";
import useProjects from "../../hooks/useProjects";
import useUsers from "./useUsers";

function DashboardLayout() {
  const { isLoading: isLoading1, proposals } = useProposals();
  const { isLoading: isLoading2, projects } = useProjects();
  const { isLoading: isLoading3, users } = useUsers();

  if (isLoading1 || isLoading2 || isLoading3) return <Loading />;

  return (              
    <div>
      <DashboardHeader />
      <Stats projects={projects.length} proposals={proposals.length} users={users.length} />
    </div>
  );
}
export default DashboardLayout;