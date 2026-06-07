import { BarChart3, CircleAlert, Network, PanelsTopLeft, ReceiptText, Users2 } from "lucide-react";

export const navigationItems = [
  { href: "/executive-dashboard", label: "Executive Dashboard", icon: PanelsTopLeft },
  { href: "/trade-monitor", label: "Trade Monitor", icon: BarChart3 },
  { href: "/exceptions-dashboard", label: "Exceptions Dashboard", icon: CircleAlert },
  { href: "/fix-connectivity-monitor", label: "FIX Connectivity Monitor", icon: Network },
  { href: "/settlement-monitor", label: "Settlement Monitor", icon: ReceiptText },
  { href: "/client-360", label: "Client 360", icon: Users2 }
];
