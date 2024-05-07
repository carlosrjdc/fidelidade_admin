import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import CardUser from "./components/cardUser"
import HeaderCardUser from "./components/headerClient"
import CreateCliente from "./components/createClient"


export default function ClientePage() {
  return (<div>
    <Header />
    <Separator className="mt-24 shadow-border px-4" />
    <div className="text-sm sm:text-lg mt-4 px-4">
      <div className="">
        <h1 className="font-bold uppercase">Clientes</h1>
      </div>
      <div className="flex justify-between items-center ">
        <Input className="w-96" placeholder="Buscar cliente" />
        <div className="flex gap-2">
          <Input placeholder="Classificar por" />
          <CreateCliente>
            <div className="p-2 text-white bg-indigo-600 rounded-lg font-semibold">ADD</div>
          </CreateCliente>
        </div>
      </div>
      <div className="mt-16">
        <HeaderCardUser />
        <div className="mt-1 flex flex-col gap-2">
          <CardUser name="Carlos Rosa" saldo={1000} status={true} telephone="21979617942" />
          <CardUser name="Roberto Rosa" saldo={1000} status={false} telephone="21995262234" />
          <CardUser name="Murilo Rosa" saldo={1000} status={true} telephone="21979617942" />
          <CardUser name="Rafael Rosa" saldo={1000} status={true} telephone="21979617942" />
        </div>
      </div>
    </div>
  </div>)
}