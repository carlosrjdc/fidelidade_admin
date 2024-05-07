import { Badge } from "@/components/ui/badge";
import { CiMenuKebab } from "react-icons/ci";

type Props = {
  telephone: string
  name: string
  saldo: number
  status: boolean
}

export default function CardUser({ name, saldo, status, telephone }: Props) {
  return (<div className="grid grid-cols-5 text-center justify-between items-center py-2 px-2 border rounded-md">
    <div>{telephone}</div>
    <div>{name}</div>
    <div>{saldo}</div>
    {status ? <div className="flex items-center justify-center">
      <Badge className="bg-green-400 text-black">ativo</Badge>
    </div> : <div className="flex items-center justify-center">
      <Badge className="bg-red-400 text-black">Inativo</Badge>
    </div>}
    <div className="flex items-center justify-center"><CiMenuKebab /></div>
  </div>)
}