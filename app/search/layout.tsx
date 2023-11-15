import { Inter } from "next/font/google";
import "./../globals.css";
import SearchHeader from "../components/SearchHeader";

const inter = Inter({ subsets: ["latin"] });

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
