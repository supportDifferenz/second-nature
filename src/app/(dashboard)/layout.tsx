import DashboardLayout from "@/components/templates/DashboardLayout";
// import ProtectedRoute from "@/components/templates/ProtectedRoute";
import ProtectedRoute from "@/components/templates/ProtectedRoute";

// export default function DashboardSectionLayout({ children }: { children: React.ReactNode }) {
//   return <DashboardLayout>{children}</DashboardLayout>;
// } 

export default function DashboardSectionLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute>
      <DashboardLayout>{children}</DashboardLayout>
    </ProtectedRoute>
  ) 
} 


// import DashboardLayout from "@/components/templates/DashboardLayout";

// export default function DashboardSectionLayout({ children }: { children: React.ReactNode }) {
//   return <DashboardLayout>{children}</DashboardLayout>;
// } 