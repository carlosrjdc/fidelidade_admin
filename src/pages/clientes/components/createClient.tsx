'use client'
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { ReactNode } from "react";

type Props = {
  children: ReactNode
}

export default function CreateCliente({ children }: Props) {
  return (
    <Dialog>
      <DialogTrigger>
        {children}
      </DialogTrigger>
      <DialogContent>
        <div className=" px-4 py-2 flex flex-col gap-2">
          <Label>Telefone</Label>
          <Input placeholder="Telefone" />
          <Label>Nome</Label>
          <Input placeholder="Nome" />
          <Label>Nome</Label>
          <Input placeholder="Aniversário" />
          <Label>Pontos Boas Vindas</Label>
          <Input placeholder="Pontos..." />
          <Label>Validar Pontos boas vindas</Label>
          <Input placeholder="Pontos..." />
          <Button>Cadastrar</Button>

        </div>
      </DialogContent>
    </Dialog>
  )
}