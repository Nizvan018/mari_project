export default function Testimony() {
    return (
        <section className="relative flex w-full items-center">
            <div className="w-2/3 p-12 bg-cream">
                <div className="flex flex-col items-center gap-8 w-2/3">
                    <h3 className="text-primary text-xl font-bold">Ella es Sofía García</h3>

                    <div className="flex flex-col gap-4 text-sm text-primary text-center">
                        <p>Sofía es una niña valiente de 7 años, lucha contra el cáncer con una sonrisa en su rostro. Diagnosticada el año pasado, ha enfrentado quimioterapia intensiva y varias cirugías con coraje inquebrantable. A pesar de los desafíos, su espíritu es inquebrantable y su determinación es inspiradora.</p>
                        <p>Necesita seguir un tratamiento de quimioterapia continua, junto con terapias complementarias y medicamentos para controlar el dolor y los efectos secundarios. Además, requiere consultas regulares con especialistas y exámenes de seguimiento para monitorear su progreso.</p>
                        <p>Con tu generosidad, podremos proporcionar los tratamientos necesarios y el apoyo emocional que necesita para seguir luchando y mantener viva la esperanza.</p>
                    </div>
                    <button className="primary-extended">Empieza a donar</button>
                </div>
            </div>

            <img src="images/girl_and_mom.jpg" alt="Girl and mom" className="absolute h-4/5 w-1/2 object-cover right-0" />
        </section>
    )
}