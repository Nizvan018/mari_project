import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = handleSubmit((data) => {
        console.log('Correcto!', data); // Aquí va el código para inciar sesión
        navigate('/');
    });

    return (
        <main className="flex justify-center items-center h-screen px-12 py-8 bg-cream">
            <section className="flex w-full max-w-lg md:max-w-xl">
                {/* SECCIÓN PARA AGREGAR UNA IMAGEN O TEXTO DE BIENVENIDA */}
                <div className="hidden md:block w-1/2 bg-primary">
                    {/* <img src="" alt=""> */}
                </div>

                {/* FORM */}
                <div className="flex flex-col gap-16 p-8 w-full md:w-1/2 bg-white">
                    <h1 className="text-4xl font-bold text-primary">Log In</h1>

                    <form className="flex flex-col gap-6">
                        {/* EMAIL */}
                        <div className="flex flex-col">
                            <label>Email</label>
                            <input {...register('email', {
                                required: {
                                    value: true,
                                    message: 'Email requerido'
                                },
                                pattern: {
                                    value: /^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,4}$/,
                                    message: 'El email no es válido'
                                }
                            })} type="text" className={`${errors.email ? 'bg-red-50' : ''} form-animated`} />
                            {errors.email && (
                                <span className="text-xs font-medium text-red-500">{errors.email.message}</span>
                            )}
                        </div>

                        {/* PASSWORD */}
                        <div className="flex flex-col">
                            <label>Contraseña</label>
                            <input {...register('password', {
                                required: {
                                    value: true,
                                    message: 'Contraseña requerida'
                                }
                            })} type="password" className={`${errors.password ? 'bg-red-50' : ''} form-animated`} />
                            {errors.password && (
                                <span className="text-xs font-medium text-red-500">{errors.password.message}</span>
                            )}
                        </div>

                        <div className="flex flex-col items-center gap-4 mt-4">
                            <button onClick={onSubmit} className="primary-extended">Log In</button>
                            <span className="text-sm">¿No tienes cuenta?, <a href="/register" className="underline font-bold text-primary">Join us!</a></span>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}