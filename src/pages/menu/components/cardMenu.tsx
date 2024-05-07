import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image"
import { FaArrowRightLong } from "react-icons/fa6";

type Props = {
  title: string
  image: StaticImageData
}
export default function CardMenu({ title, image }: Props) {
  return (
    <div className="flex relative justify-between items-center border rounded-lg">
      <div className="flex w-full items-center">
        <Image src={image} alt="Logo" className="w-32 rounded-full" />
        <div className="flex items-center gap-4">
          <h1 className="font-bold">{title}</h1>
        </div>
      </div>
      <div className="absolute -right-2 flex items-center justify-center rounded-md bg-indigo-400 w-8 h-8"><FaArrowRightLong /></div>
    </div>
  )
}