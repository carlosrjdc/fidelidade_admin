import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ReactNode } from "react";

type Props = {
  children: ReactNode
}

export default function AddPoint({ children }: Props) {
  return (
    <Drawer>
      <DrawerTrigger>
        {children}
      </DrawerTrigger>
      <DrawerContent className="h-5/6 flex flex-col gap-2 p-2">
        <h1 className="font-bold py-2">Adicionar Pontos</h1>
        <Input className="py-8" placeholder="Telefone" />
        <Input className="py-8" placeholder="Pontos" />
        <Input className="py-8" placeholder="Validar pontos" />
        <Button>Cadastrar</Button>
      </DrawerContent>
    </Drawer>
  )
}