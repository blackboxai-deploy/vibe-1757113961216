import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/auth-context";
import { Toaster } from "@/components/ui/sonner";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "VolleyBook - Club de Voleibol",
  description: "Sistema de gestión completo para clubes de voleibol. Gestiona miembros, reservas de cancha, eventos y estadísticas.",
  keywords: ["voleibol", "club deportivo", "gestión", "reservas", "miembros"],
  authors: [{ name: "VolleyBook Team" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#1e40af",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={dmSans.variable}>
      <head>
        <link rel="icon" href="/volleyball-icon.svg" />
        <meta name="theme-color" content="#1e40af" />
      </head>
      <body className={`${dmSans.className} antialiased bg-slate-50 text-slate-900`}>
        <AuthProvider>
          {children}
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'white',
                color: '#0f172a',
                border: '1px solid #e2e8f0',
              },
            }}
          />
        </AuthProvider>
      </body>
    </html>
  );
}