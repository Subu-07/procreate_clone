import type { Metadata } from "next";
import "../globals.css";
export const metadata: Metadata = {
  title: "Procreate® - The most powerful and intuitive digital illustration app available for iPad.",
  description: "The most powerful and intuitive digital illustration app available for iPad.",
};

export default function ProcreteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (    
      <section className="">
        {children}
      </section>    
  );
}
