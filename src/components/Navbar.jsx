import { CiSearch } from "react-icons/ci";
import { FaRegPaperPlane, FaUserCircle, FaChevronDown } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";

export default function Navbar() {
    const onClick = () => {
        // LÓGICA PARA EL BOTÓN DE BUSCAR
    }

    return (
        <nav className="flex flex-col w-full">
            {/* PARTE MORADA */}
            <div className="flex items-center justify-between px-12 py-4 text-white bg-primary">
                <p className="text-sm">
                    <a href="" className="underline">Click here</a> for all the lastest updates
                </p>

                <div className="flex gap-2 items-center px-2 py-1 border border-white">
                    <CiSearch className="cursor-pointer" onClick={onClick} />
                    <input type="text" placeholder="Search..." className="text-sm outline-none text-white bg-transparent" />
                </div>
            </div>

            {/* LINKS DE NAVEGACIÓN */}
            <div className="flex items-center px-12 py-4 gap-4">
                <div className="flex gap-2 items-center w-full">
                    <FaRegPaperPlane size={40} className="text-red-500" />
                    <div className="flex flex-col justify-between gap-2">
                        <p className="text-primary font-bold">Recolectando Sonrisas</p>
                        <p className="text-sm text-primary">RecolectandoSonrisasDonae.com</p>
                    </div>
                </div>

                <ul className="flex gap-4 text-sm text-primary text-nowrap">
                    <li>
                        <a href="" className="hover:underline">Stay Informed</a>
                    </li>
                    <li>
                        <a href="" className="hover:underline">Communicate</a>
                    </li>
                    <li>
                        <a href="" className="hover:underline">Shared Gallery</a>
                    </li>
                    <li>
                        <a href="" className="hover:underline">Groups</a>
                    </li>
                    <li>
                        <a href="" className="hover:underline">Support</a>
                    </li>
                </ul>

                <div className="flex gap-2 items-center">
                    <FaBell className="text-primary cursor-pointer" size={18} />
                    <FaUserCircle className="text-primary cursor-pointer" size={18} />
                    <FaChevronDown className="text-primary cursor-pointer" size={14} />
                </div>
            </div>
        </nav>
    )
}