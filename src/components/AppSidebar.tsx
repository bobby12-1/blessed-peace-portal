
import { Home, FileText, BookOpen, Image, Contact, Receipt, Calendar } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "About", url: "/about", icon: FileText },
  { title: "Academics", url: "/academics", icon: BookOpen },
  { title: "Gallery", url: "/gallery", icon: Image },
  { title: "Contact", url: "/contact", icon: Contact },
  { title: "Registration", url: "/registration", icon: Calendar },
  { title: "Receipt", url: "/receipt", icon: Receipt },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar className="border-r border-orange-200">
      <SidebarHeader className="border-b border-orange-200 p-6">
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-900">Blessed Peace</h2>
          <p className="text-sm text-orange-600 font-medium">International Kiddies College</p>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-orange-700 font-semibold">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    className={`hover:bg-orange-50 hover:text-orange-700 transition-colors ${
                      location.pathname === item.url ? 'bg-orange-100 text-orange-700 font-medium' : ''
                    }`}
                  >
                    <Link to={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
