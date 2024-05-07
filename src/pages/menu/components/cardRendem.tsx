import { FaCoins } from "react-icons/fa";

type Props = {
  image: string;
  title: string
  description: string
  points: number

}

export default function CardRendem({ image, title, description, points }: Props) {
  return (

    <div className=" w-48 rounded-xl border m-1">
      <div className="bg-slate-700 text-white p-2">
        <strong className="py-2">{title}</strong>
        <p className="text-xs py-2">{description}</p>
      </div>
      <div className="bg-slate-500/80 flex items-center p-1 gap-2 ">
            <p className="text-white font-semibold">{points}</p>
            <FaCoins size={15} color="white" />
          </div>
    </div>
  )
}