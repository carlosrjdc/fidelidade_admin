import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ReactNode } from "react";
import CardRendem from "./components/cardRendem";
import { ScrollArea } from "@/components/ui/scroll-area";
import QrCodeRendem from "./components/qrCodeRendem";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

type Props = {
  children: ReactNode
}

export default function Rendem({ children }: Props) {
  return (
    <Drawer>
      <DrawerTrigger>
        {children}
      </DrawerTrigger>
      <DrawerContent className=" sm:w-[900px]">
        <h1>RESGATAR</h1>
        <Tabs className="w-full" defaultValue="manual">
          <TabsList className="w-full">
            <TabsTrigger value="automatico">Automatico</TabsTrigger>
            <TabsTrigger value="manual">Manual</TabsTrigger>
          </TabsList>
          <TabsContent className=" flex flex-col gap-2" value="manual">
            <strong>Manual</strong>
            <Input placeholder="Telefone" />
            <Input placeholder="Buscar" />

            <ScrollArea className="h-96">

              <div className="flex flex-wrap gap-2 items-center justify-center mt-4">
                <CardRendem
                  image="https://i0.wp.com/www.canalmasculino.com.br/wp-content/uploads/2017/12/corte-cabelo-masculino-baguncado-liso-17-570x419.jpg?resize=570%2C419"
                  title="Corte de Cabelo"
                  description="Corte de cabelo completo"
                  points={800} />
                <CardRendem
                  image="https://i.pinimg.com/474x/67/a3/c6/67a3c6dfe6326cc353585ec48f0b88b6.jpg"
                  title="Barba"
                  description="Barba Completa"
                  points={400} />
                <CardRendem
                  image="https://media.gettyimages.com/id/526651763/pt/foto/homem-suas-sobrancelhas-cortados-na-barbearia.jpg?s=612x612&w=gi&k=20&c=Ekwh8Xu1KuxteIoQBAKCc81rnoh9ywm3PYj6UJ23p6M="
                  title="Sobrancelha"
                  description=""
                  points={250} />
                <CardRendem
                  image="https://img.freepik.com/fotos-premium/homem-fazendo-as-unhas-na-barbearia_138670-3825.jpg"
                  title="Unhas"
                  description="Unhas feitas"
                  points={300} />
              </div>
            </ScrollArea>
      <Button>Resgatar</Button>
          </TabsContent>
          <TabsContent value="automatico">
            <div className="my-4">
              <strong>Codigo Resgate</strong>
              <Input placeholder="Codigo" />
            </div>
            <QrCodeRendem />
          </TabsContent>
        </Tabs>

      </DrawerContent>
    </Drawer>
  )
}