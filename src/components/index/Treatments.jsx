import { GiFallingStar } from "react-icons/gi";
import { PiParkLight } from "react-icons/pi";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

// CANCER INFORMATION:
const cancerTitle = "Guerreros con cáncer";
const cancerDescription = "El cáncer es una batalla que enfrentan valiéntemente muchos niños cada día. Con tu ayuda, podemos brindarles el tratamiento y el apoyo que necesitan para enfrentarse a este desafío con coraje y esperanza. Cada donación marca la diferencia en la vida de estos guerreros, ofreciéndoles la oportunidad de una vida más saludable y feliz.";

export default function Treatments() {
    const navigation = useNavigate();

    const goToHistories = (title, description) => {
        navigation('/histories', { state: { title: title, description: description } });
    }

    return (
        <section className="flex flex-col items-center w-full gap-12">
            <h2 className="text-primary text-3xl font-bold">Tratamientos para apoyar</h2>

            <div className="flex gap-6">
                {/* CÁNCER */}
                <div className="flex flex-col gap-4 items-center w-1/3 px-4 py-8 bg-cream">
                    <GiFallingStar className="text-custom_orange" size={48} />
                    <button onClick={() => goToHistories(cancerTitle, cancerDescription)} className="primary">{cancerTitle}</button>
                    <p className="text-primary text-sm text-center">{cancerDescription}</p>
                </div>

                {/* FIBROSIS QUÍSTICA */}
                <div className="flex flex-col gap-4 items-center w-1/3 px-4 py-8 bg-cream">
                    <PiParkLight className="text-custom_orange" size={48} />
                    <button className="primary">Fibrosis quística</button>
                    <p className="text-primary text-sm text-center">La fibrosis quística es una enfermedad genética que afecta los pulmones y el sistema digestivo de los niños, pero juntos podemos marcar la diferencia. Tu donación ayuda a proporcionar tratamientos vitales y apoyo a estos valientes luchadores, permitiéndoles respirar más fácilmente y vivir una vida plena y activa.</p>
                </div>

                {/* ENFERMEDADES AUTOINMUNES */}
                <div className="flex flex-col gap-4 items-center w-1/3 px-4 py-8 bg-cream">
                    <FaHandHoldingHeart className="text-custom_orange" size={48} />
                    <button className="primary">Enfermedades autoinmunes</button>
                    <p className="text-primary text-sm text-center">Las enfermedades autoinmunes como la artritis reumatoide juvenil, el lupus y la enfermedad de Crohn pueden afectar profundamente la vida de los niños, pero tú puedes ser parte de la situación. Con tu generosidad, podemos ofrecer tratamientos innovadores y apoyo emocional a estos niños, ayudándoles a enfrentar sus desafíos con valentía y determinación.</p>
                </div>
            </div>

            <button className="primary-extended">Empieza a donar</button>
        </section>
    )
}