"use client";

import { copyTextToClipboard } from "@/lib/utils";
import { Copy } from "lucide-react";

export default function CopyTextButton({ text, label }: { text: string, label: string}) {

  return (
    
              <button
                className="inline-flex items-center gap-2 px-4 py-2 text-neutral-600 border border-neutral-300 hover:opacity-80 rounded-full text-sm font-medium cursor-pointer  transition-colors duration-200"
                onClick={() => copyTextToClipboard(text)}
              >
                {label}
                <Copy className="w-4 h-4" />
              </button>
  );
}