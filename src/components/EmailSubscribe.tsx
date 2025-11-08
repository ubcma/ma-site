"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

export default function EmailSubscribe() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter an email address");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setEmail("");
    
    toast.success("Email successfully submitted!");
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <input
        type="email"
        placeholder="your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-white w-full pl-10 pr-32 py-4 rounded-full placeholder:text-gray-300 placeholder:font-bold placeholder:text-2xl focus:outline-none focus:ring-2 focus:ring-white"
      />
      <Button
        type="submit"
        size="lg"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-ma-red hover:bg-ma-red hover:brightness-90 font-bold rounded-full px-10 text-2xl"
      >
        submit
      </Button>
    </form>
  );
}