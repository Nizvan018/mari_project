import Navbar from "../components/Navbar";
import Card from "../components/histories/Card";
import { useLocation } from "react-router-dom";

const histories = [
    {
        name: 'Sofía García',
        message: 'Sofía es una niña valiente de 7 años, lucha contra el cáncer con una sonrisa en su rostro. Diagnosticada el año pasado, ha enfrentado quimioterapia intensiva y varias cirugías con coraje inquebrantable. A pesar de los desafíos, su espíritu es inquebrantable y su determinación es inspiradora.'
    },
    {
        name: 'Lucas',
        message: 'Lucas, un niño de 6 años, fue diagnosticado con cáncer de huesos el año pasado. A pesar de su corta edad, ha mostrado una fuerza increíble mientras lucha contra la enfermedad. Con el apoyo inquebrantable de su familia y el equipo médico, Lucas ha enfrentado cirugías dolorosas y tratamientos de quimioterapia con valentía.'
    },
    {
        name: 'Isabella',
        message: 'Isabella es una niña de 10 años que ha estado luchando contra el cáncer cerebral desde los 8. A pesar de las numerosas cirugías y sesiones de radioterapia, su espíritu sigue siendo tan radiante como siempre. Isabella ha encontrado consuelo en la pintura, transformando sus experiencias en obras de arte que inspiran a otros.'
    }

]

export default function Histories() {
    const location = useLocation();
    const { title, description } = location.state || {};

    return (
        <div className="flex flex-col items-center">
            <Navbar />

            <main className="flex flex-col items-center gap-16 max-w-5xl p-12">
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-bold text-primary">{title}</h1>
                    <p>{description}</p>
                </div>

                {/* HISTOIRES */}
                <div className="flex flex-col gap-8">
                    {histories.map((history, index) => (
                        <Card key={index} name={history.name} message={history.message} />
                    ))}
                </div>
            </main>
        </div>
    )
}