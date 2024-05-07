'use client'
import QrCode from "@/components/ui/qrCode";
import { useState } from "react";

export default function QrCodeRendem() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <QrCode funcao={() => { }} setOpen={setOpen} />
    </div>
  )
}