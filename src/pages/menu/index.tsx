import Header from "@/components/header";
import { Separator } from "@/components/ui/separator";
import CardMenu from "./components/cardMenu";
import money from "../../assets/money.png";
import qrCode from "../../assets/qrCode.png";
import cliente from "../../assets/cliente.png";
import gift from "../../assets/gift.png";
import AddPoint from "./addPoints";
import Rendem from "./reendem";

export default function MenuInicial() {
  return (
    <div className="w-full">
      <Header />
      <Separator className="mt-24 shadow-border px-4" />
      <div className="p-4">
        <div className="flex flex-col gap-2 mt-2">
          <AddPoint>
            <CardMenu title="ADICIONAR PONTOS" image={money} />
          </AddPoint>
          <Rendem>
            <CardMenu title="VALIDAR RESGATE" image={qrCode} />
          </Rendem>
          <a href="/cliente"><CardMenu title="CLIENTES" image={cliente} /></a>
          <a href="/premio"><CardMenu title="PRÊMIOS" image={gift} /></a>

        </div>
      </div>
    </div>
  )
}