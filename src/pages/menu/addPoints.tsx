import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ReactNode } from "react";

type Props = {
  children: ReactNode
}

export default function AddPoint({ children }: Props) {
  return (
    <Dialog>
      <DialogTrigger>
        {children}
      </DialogTrigger>
      <DialogContent>
        <h1 className="font-bold py-2">Adicionar Pontos</h1>
        <Input placeholder="Telefone" />
        <Input placeholder="Pontos" />
        <Input placeholder="Validar pontos" />
        <Button>Cadastrar</Button>
      </DialogContent>
    </Dialog>
  )
}