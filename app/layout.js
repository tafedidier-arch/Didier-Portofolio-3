import "./globals.css";
import { LangProvider } from "@/context/LangContext";

export const metadata = {
  title: "Didier Romuald TAFE — Chef de Projet / Project Manager",
  description:
    "Portfolio professionnel de Didier Romuald TAFE — Futur Chef de Projet basé à Val-d'Or, Québec.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
