import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import CarPremio from "./components/cardPremio"
import HeaderCarPremio from "./components/headerPremio"
import CreatePremio from "./components/createPremio"


export default function PremioPage() {
  return (<div>
    <Header />
    <Separator className="mt-24 shadow-border px-4" />
    <div className="mt-4 px-4">
      <div className="">
        <h1 className="font-bold uppercase">Premios</h1>
      </div>
      <div className="flex justify-between items-center ">
        <Input className="w-96" placeholder="Premio" />
        <div className="flex gap-2">
          <Input placeholder="Classificar por" />
          <CreatePremio>
            <div className="p-2 text-white bg-indigo-600 rounded-lg font-semibold">ADD</div>
          </CreatePremio>
        </div>
      </div>
      <div className="mt-16">
        <HeaderCarPremio />
        <div className="mt-1 flex flex-col gap-2">
          <CarPremio id="1" description="Corte de Cabelo" pontos={200} title="Cabelo" imagem="https://img.freepik.com/fotos-gratis/cliente-fazendo-o-corte-de-cabelo-em-um-salao-de-barbearia_1303-20861.jpg"  />
          <CarPremio id="2" description="Corte de Barba" pontos={300} title="Barba" imagem="https://i.pinimg.com/736x/96/58/bf/9658bf0d5f88fcd27009908a7b4fce5f.jpg"  />
          <CarPremio id="3" description="Terapia Barba" pontos={450} title="Barbaterapia" imagem="https://i0.wp.com/barbeirocampinas.com.br/wp-content/uploads/2017/01/barboterapia3.jpg?w=1040"  />
        </div>
      </div>
    </div>
  </div>)
}