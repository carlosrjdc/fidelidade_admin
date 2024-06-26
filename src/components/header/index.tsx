import Image from "next/image"
import header from "../../assets/header.jpg"
import { FaPowerOff } from "react-icons/fa6";
import { Button } from "../ui/button"


export default function Header() {
  return (
    <header className=" w-screen ">
      <div className="relative">
        <div>
          <Image src={header} alt="Logo" className="w-full" />
          <div className="absolute -bottom-20 flex items-center w-full justify-between gap-2 px-2 sm:px-16 ">
            <div className="flex items-center gap-4">
              <img className="  w-24 bg-white rounded-full" src="https://cdn3d.iconscout.com/3d/premium/thumb/man-9251877-7590869.png?f=webp" alt="Logo" />
              <h1 className="font-bold">CARLOS ROSA</h1>
            </div>
            <div>
              <Button className="flex gap-2 bg-red-400">
                <FaPowerOff size={20} />
                Sair
              </Button>
            </div>
          </div>

        </div>
      </div>
    </header>
  )
}