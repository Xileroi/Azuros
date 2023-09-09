import { ReactNode } from "react";
import { Footer } from "./parts/Footer";
import { NavigationBar } from "./parts/NavigationBar";

interface WebsiteProps {
  children: ReactNode;
}

export function Website(props: WebsiteProps) {
  const { children } = props;

  return (
    <div className="min-h-full bg-gray-800 flex flex-1 flex-col">
      <NavigationBar />
      <main className="flex-1 text-white">{children}</main>
      <Footer />
    </div>
  );
}