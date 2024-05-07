import { Badge } from "@/components/ui/badge";
import { CiMenuKebab } from "react-icons/ci";

type Props = {
  id: string
  imagem: string
  title: string
  description: string
  pontos: number
}

export default function cardPremio({ id, imagem, description, pontos, title }: Props) {
  return (<div className="grid grid-cols-5 text-center justify-between items-center py-2 px-2 border rounded-md">
    <div>{id}</div>
    <div className="flex items-center   ml-16 gap-4">
      <img className="h-16 rounded-full w-16" alt="" src={imagem}/>
      <div>{title}</div>
    </div>

    <div>{description}</div>
    <div>{pontos}</div>

    <div className="flex items-center justify-center"><CiMenuKebab /></div>
  </div>)
}