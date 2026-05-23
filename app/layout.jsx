
import "./globals.css";

export const metadata = {
  title: "Tamooh Premium",
  description: "Luxury One Product Website"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
