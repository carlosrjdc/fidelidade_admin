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
  return (<div className="grid grid-cols-4 sm:grid-cols-5 text-center justify-between items-center py-2 px-2 border rounded-md">
    <div>{id}</div>
    <div className="flex items-center   sm:ml-16 gap-4">
      <img className="sm:h-16 sm:w-16 w-8 h-8 rounded-full " alt="" src={imagem}/>
      <div>{title}</div>
    </div>

    <div className="sm:fixed hidden">{description}</div>
    <div>{pontos}</div>

    <div className="flex items-center justify-center"><CiMenuKebab /></div>
  </div>)
}