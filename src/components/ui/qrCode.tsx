"use client";
import { Html5Qrcode } from "html5-qrcode";
import { Dispatch, ReactNode, useEffect, useState } from "react";

export default function QrCode({
  funcao,
  setOpen
}: {
  funcao: (result:string)=> void
  setOpen: Dispatch<boolean>;
}) {
  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    const scanner = new Html5Qrcode("reader");
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };
    scanner.start({ facingMode: "environment" }, config, success, error);
    async function success(result: any) {
      setScanResult(result);
      scanner.stop();
      setTimeout(()=>{funcao(result)},500)
      setOpen(false)
      scanner.clear();
    }

    function error(err: any) {
      console.warn(err);
    }
  }, []);

  return scanResult ? <div>Sucess:{scanResult}</div> : <div id="reader"></div>;
}
