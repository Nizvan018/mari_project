export default function Header() {
    return (
        <section className="flex flex-col items-center gap-4">
            {/* HEADER */}
            <div className="flex gap-4">
                <img src="images/boy_rainbow.jpg" alt="A boy with a rainbow draw" className="min-h-full w-8/12 object-cover -scale-x-100" />
                <div className="flex flex-col gap-6 w-4/12 p-4 bg-cream">
                    <div className="flex flex-col gap-6 pb-4 border-b border-primary">
                        <h1 className="text-4xl font-bold text-custom_orange">Recolectando Sonrisas</h1>
                        <p className="w-full text-center text-primary text-sm font-bold">Con tu ayuda marcaremos la diferencia en la vida de estos grandes guerreros</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-primary text-sm text-justify">Recolectando sonrisas ofrece una vía segura y transparente para realizar donaciones para tratamientos médicos vitales. Con historias personales conmovedoras, un proceso de donación fácil y seguro, y un seguimiento transparente del progreso del tratamiento, cada contribución marca un paso hacia la esperanza y la curación.</p>
                        <button className="primary-extended">Join Us</button>
                    </div>
                </div>
            </div>

            {/* MESSAGE */}
            <p className="max-w-2xl text-center text-primary text-4xl font-bold">¡Juntos, podemos ser parte del cambio y brinda apoyo y solidaridad a estas familias en su lucha!</p>
        </section>
    )
}