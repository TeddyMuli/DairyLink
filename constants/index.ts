import {
  LayoutDashboard,
  WalletMinimal,
  User,
  Library,
  MessageSquareWarning,
  Bell,
  HandHelping
} from 'lucide-react';

export const menus = [
    { title: "Home", path: "/" },
    { title: "Features", path: "/#features" },
    { title: "About", path: "/#about" },
    { title: "Team", path: "/#team" },
    { title: "Contacts", path: "/#contacts" },
    { title: "Login", path: "/auth/login" },
    { title: "Register", path: "/auth/register" }
  ];

export const providers = [
    { src: "/assets/fb_logo.png", alt: "facebook", name: "facebook" },
    { src: "/assets/google_logo.png", alt: "google", name: "google" },
    { src: "/assets/linkedin_logo.png", alt: "linkedin", link: "linkedin" }
  ]

export const farmerLinks = [
  { name: "Dashboard", path: "/app", icon: LayoutDashboard },
  { name: "Loans", path: "/app/loans", icon: WalletMinimal },
  { name: "E-Learning", path: "/app/e-learning", icon: Library },
  { name: "Complaints", path: "/app/complaints", icon: MessageSquareWarning },
  { name: "Services", path: "/app/services", icon: HandHelping },
  { name: "Notifications", path: "/app/notifications", icon: Bell },
  { name: "Profile", path: "/app/profile", icon: User }
]
