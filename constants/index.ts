import {
  LayoutDashboard,
  WalletMinimal,
  User,
  Library,
  MessageSquareWarning,
  Heart,
  Box,
  CalendarDays,
  NotepadText
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
    { src: "/assets/linkedin_logo.png", alt: "linkedin", name: "linkedin" }
  ]

export const farmerLinks = [
  { name: "Dashboard", path: "/app", icon: LayoutDashboard },
  { name: "Products", path: "/app/products", icon: Box },
  { name: "Favorites", path: "/app/favorites", icon: Heart },
  { name: "Loans", path: "/app/loans", icon: WalletMinimal },
  { name: "E-Learning", path: "/app/e-learning", icon: Library },
  { name: "Complaints", path: "/app/complaints", icon: MessageSquareWarning },
  { name: "Calender", path: "/app/calender", icon: CalendarDays },
  { name: "Invoice", path: "/app/invoice", icon: NotepadText },
  { name: "Profile", path: "/app/profile", icon: User }
]
