
"use client";
import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";

export default function Navbar(){
  const [open,setOpen]=useState(false);

  return(
    <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md border-b border-yellow-500 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold text-yellow-600">Tamooh</h1>

        <div className="hidden md:flex gap-8">
          <a href="#">Home</a>
          <a href="#product">Product</a>
          <a href="#story">Story</a>
          <a href="#distributor">Distributor</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <ShoppingBag className="text-yellow-600"/>
          <button onClick={()=>setOpen(!open)} className="md:hidden">
            {open ? <X/> : <Menu/>}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white p-6 flex flex-col gap-4">
          <a href="#">Home</a>
          <a href="#product">Product</a>
          <a href="#story">Story</a>
          <a href="#distributor">Distributor</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </nav>
  )
}
