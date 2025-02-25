"use client"

import Navbar from "@/components/Navbar";
import { ReactNode } from "react";
import StoreProvider from "./StoreProvider";
import MobileNav from "@/components/ui/MobileNav";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <StoreProvider>
      <main className="bg-silver min-h-[100vh] relative overflow-x-hidden">
        <Navbar />
        <MobileNav />
        { children }
      </main>
    </StoreProvider>
  )
}
