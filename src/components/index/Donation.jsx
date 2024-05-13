import { FaTiktok, FaFacebookF, FaYoutube, FaPaypal } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useForm } from "react-hook-form";

export default function Donation() {
    const { register, handleSubmit, formState: { errors }, trigger } = useForm();

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    });

    const handleChange = async (e) => {
        let input = e.target.value.replace(/\s/g, ""); // Elimina los espacios en blanco
        input = input.replace(/[^0-9]/g, ""); // Elimina cualquier caracter que no sea un número
        let formattedInput = "";

        for (let i = 0; i < input.length; i++) {
            if (i > 0 && i % 4 === 0) {
                formattedInput += " "; // Agrega un espacio cada 4 caracteres
            }
            formattedInput += input[i];
        }

        if (formattedInput.length <= 19) {
            e.target.value = formattedInput;
        }

        await trigger('cardNumber');
    };

    return (
        <section className="flex gap-8 w-full p-4 bg-cream">
            {/* CONTACT */}
            <div className="flex flex-col gap-8 w-5/12 p-8 text-white text-sm bg-primary">
                <h3 className="text-xl font-semibold">Recolectando Sonrisas</h3>
                <p>Oaxaca, CP 68000</p>

                <div>
                    <p className="font-semibold">Email:</p>
                    <p>recolectandosonrisasdonae.com</p>
                </div>

                <div>
                    <p className="font-semibold">Teléfono:</p>
                    <p>123-456-7890</p>
                </div>

                <div className="flex flex-col gap-3">
                    <p className="text-lg font-semibold">Follow Us</p>
                    <div className="flex gap-2">
                        <FaTiktok />
                        <FaFacebookF />
                        <FaXTwitter />
                        <FaYoutube />
                    </div>
                </div>
            </div>

            {/* FORM */}
            <div className="flex justify-center w-7/12 p-8 bg-white">
                <div className="flex flex-col gap-2 w-full max-w-sm">
                    <h3 className="text-primary text-xl font-bold">Realizar Donación</h3>

                    <form className="flex flex-col gap-6">
                        {/* NAME */}
                        <div className="flex flex-col gap-2 text-sm">
                            <label>Nombre completo</label>
                            <input {...register('name')} type="text" className="form-animated" />
                        </div>

                        {/* EMAIL */}
                        <div className="flex flex-col gap-2 text-sm">
                            <label>Email *</label>
                            <input {...register('email', {
                                required: {
                                    value: true,
                                    message: 'Introduzca su correo electrónico'
                                },
                                pattern: {
                                    value: /^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,4}$/,
                                    message: 'El correo no es válido'
                                }
                            })} type="text" className={`form-animated ${errors.email ? 'bg-red-50' : ''}`} />
                            {errors.email && (
                                <span className="text-xs font-medium text-red-500">{errors.email.message}</span>
                            )}
                        </div>

                        {/* CARD NUMBER */}
                        <div className="flex flex-col gap-2 text-sm">
                            <label>Número de tarjeta *</label>
                            <div className="flex gap-1">
                                <div className="background-input pb-px">
                                    <input {...register('cardNumber', {
                                        required: {
                                            value: true,
                                            message: 'Introduzca el número de tarjeta'
                                        },
                                        validate: (value) => {
                                            const regex = /^\d{16}$/;

                                            if (regex.test(value.replace(/\s/g, ""))) {
                                                return true
                                            } else {
                                                return 'El número de tarjeta no es válido'
                                            }
                                        }
                                    })} onChange={handleChange} maxLength={19} type="text" className={`outline-none text-base font-medium w-[140px] ${errors.cardNumber ? 'bg-red-50' : ''}`} />
                                </div>
                            </div>
                            {errors.cardNumber && (
                                <span className="text-xs font-medium text-red-500">{errors.cardNumber.message}</span>
                            )}
                        </div>

                        <div className="flex flex-col gap-2 text-sm">
                            <label>Fecha de expiración - CVV *</label>
                            <div className="flex gap-20">
                                <div className="flex gap-1">
                                    {/* DATE */}
                                    <input {...register('month', {
                                        required: {
                                            value: true,
                                            message: 'Introduzca la fecha'
                                        },
                                        min: {
                                            value: 1,
                                            message: 'El mes no es válido'
                                        },
                                        max: {
                                            value: 12,
                                            message: 'El mes no es válido'
                                        }
                                    })} type="text" className={`form w-[20px] ${errors.month ? 'bg-red-50' : ''}`} />
                                    <p>/</p>
                                    <input {...register('year', {
                                        required: {
                                            value: true,
                                        },
                                        min: {
                                            value: 24,
                                            message: 'El año no es válido'
                                        }
                                    })} type="text" className={`form w-[20px] ${errors.year ? 'bg-red-50' : ''}`} />
                                </div>
                                {/* CVV */}
                                <input {...register('cvv', {
                                    required: {
                                        value: true,
                                        message: 'Introduzca el CVV'
                                    },
                                    pattern: {
                                        value: /^[0-9]{3}$/,
                                        message: 'El CVV no es válido'
                                    }
                                })} type="text" maxLength={3} className={`form w-[30px] ${errors.year ? 'bg-red-50' : ''}`} />
                            </div>
                            {errors.month && (
                                <span className="text-xs font-medium text-red-500">{errors.month.message}</span>
                            )}
                            {errors.year && (
                                <span className="text-xs font-medium text-red-500">{errors.year.message}</span>
                            )}
                            {errors.cvv && (
                                <span className="text-xs font-medium text-red-500">{errors.cvv.message}</span>
                            )}
                        </div>

                        <div className="flex flex-col gap-2 text-sm">
                            <p>Otra forma de pago:</p>
                            <FaPaypal size={24} />
                        </div>

                        {/* MESSAGE */}
                        <div className="flex flex-col gap-2 text-sm">
                            <label>Deja un mensaje...</label>
                            <input {...register('message')} type="text" className="form-animated" />
                        </div>

                        <button onClick={onSubmit} className="mt-4 primary-extended">Enviar</button>
                    </form>
                </div>
            </div>
        </section>
    )
}