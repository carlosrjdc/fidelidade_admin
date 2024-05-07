'use client'
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { ReactNode } from "react";

type Props = {
  children: ReactNode
}

export default function CreatePremio({ children }: Props) {
  return (
    <Dialog>
      <DialogTrigger>
        {children}
      </DialogTrigger>
      <DialogContent>
        <div className=" px-4 py-2 flex flex-col gap-2">
          <Label>Nome</Label>
          <Input placeholder="Nome" />
          <Label>Descrição</Label>
          <Input placeholder="Descrição" />
          <Label>Pontos</Label>
          <Input placeholder="Pontos" />
          <Label>Validar Pontos</Label>
          <Input placeholder="Pontos..." />
          <Label>Upload</Label>
          <Input type="file" />
          <Button>Cadastrar</Button>

        </div>
      </DialogContent>
    </Dialog>
  )
}