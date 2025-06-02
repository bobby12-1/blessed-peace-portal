
import { ReactNode } from "react";
import { AppSidebar } from "./AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <AppSidebar />
      <main className="flex-1 overflow-auto">
        <div className="p-4">
          <SidebarTrigger className="mb-4" />
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
