import { Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { DarkModeProvider } from "./context/DarkModeContext";
import CompleteProfile from "./pages/CompleteProfile";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import OwnerLayout from "./features/owner/OwnerLayout";
import OwnerDashboard from "./pages/OwnerDashboard";
import FreelancerLayout from "./features/freelancer/freelancerLayout";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import Proposals from "./pages/Proposals";
import SubmittedProjects from "./pages/SubmittedProjects";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProtectedRoute from "./ui/ProtectedRoute";
import NotAccess from "./ui/NotAccess";
import AboutMe from "./ui/AboutMe";
import AdminDashboard  from "./pages/AdminDashboard";
import AdminLayout from "./features/admin/AdminLayout";
import Users from "./pages/Users";


const queryClient = new QueryClient();

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Toaster />
        <div>
          <Routes>
            <Route path="/auth" element={<Auth/>} />
            <Route path="/auth/complete-profile" element={<CompleteProfile />} />

            {/* owner: */}
            <Route path="/owner" element={
              <ProtectedRoute>
                <OwnerLayout />
              </ProtectedRoute>}>
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<OwnerDashboard />} />
              <Route path="projects" element={<Projects />} />
              <Route path="projects/:id" element={<Project />} />
            </Route>

            {/* freelancer: */}
            <Route path="/freelancer" element={
              <ProtectedRoute>
                <FreelancerLayout />
              </ProtectedRoute>}>
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<FreelancerDashboard />} />
              <Route path="projects" element={<SubmittedProjects />} />
              <Route path="proposals" element={<Proposals />} />
            </Route>

            {/* admin: */}
              <Route path="/admin" element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>}>
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="users" element={<Users />} />
                <Route path="projects" element={<SubmittedProjects />} />
              <Route path="proposals" element={<Proposals />} />
            </Route>


            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/not-access" element={<NotAccess />} />
            <Route path="/about-me" element={<AboutMe />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;

// --------------------------------------------
// solutios:
// 1.axios
// 2.react query
// 3.usefetch

// we use the best solution : react query
// --------------------------------------------
// react queri's methods :
// 1.useQuery => get
// 2.useMutation => post,put,delete,..
// --------------------------------------------
// authenticate : who is she/he ?
// authorized : permission-access based role
