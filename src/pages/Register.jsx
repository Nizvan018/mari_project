import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const navigation = useNavigate();

    const onSubmit = handleSubmit((data) => {
        console.log('Correcto!', data); // Aquí va el código para inciar sesión
        navigation('/login');
    });

    return (
        <main className="flex justify-center items-center h-screen px-12 py-8 bg-cream">
            {/* FORM */}
            <section className="flex flex-col gap-16 p-8 w-full max-w-lg bg-white">
                <h1 className="text-4xl font-bold text-primary">Crea una cuenta</h1>

                <form className="flex flex-col gap-6">
                    {/* NAME */}
                    <div className="flex flex-col gap-2">
                        <label>Nombre(s) *</label>
                        <input {...register('name', {
                            required: {
                                value: true,
                                message: 'Nombre requerido'
                            },
                            minLength: {
                                value: 2,
                                message: 'El nombre es muy corto'
                            },
                            maxLength: {
                                value: 100,
                                message: 'El nombre es muy largo'
                            }
                        })} type="text" className={`${errors.name ? 'bg-red-50' : ''} form-animated`} />
                        {errors.name && (
                            <span className="text-xs font-medium text-red-500">{errors.name.message}</span>
                        )}
                    </div>

                    <div className="flex gap-4">
                        {/* FIRST NAME */}
                        <div className="flex flex-col gap-2 w-full">
                            <label>Apellido paterno *</label>
                            <input {...register('firstName', {
                                required: {
                                    value: true,
                                    message: 'Apellido paterno requerido'
                                },
                                minLength: {
                                    value: 2,
                                    message: 'El apellido paterno es muy corto'
                                },
                                maxLength: {
                                    value: 80,
                                    message: 'El apellido paterno es muy largo'
                                }
                            })} type="text" className={`${errors.firstName ? 'bg-red-50' : ''} form-animated`} />
                            {errors.firstName && (
                                <span className="text-xs font-medium text-red-500">{errors.firstName.message}</span>
                            )}
                        </div>

                        {/* FIRST NAME */}
                        <div className="flex flex-col gap-2 w-full">
                            <label>Apellido paterno *</label>
                            <input {...register('lastName', {
                                required: {
                                    value: true,
                                    message: 'Apellido materno requerido'
                                },
                                minLength: {
                                    value: 2,
                                    message: 'El apellido materno es muy corto'
                                },
                                maxLength: {
                                    value: 80,
                                    message: 'El apellido materno es muy largo'
                                }
                            })} type="text" className={`${errors.lastName ? 'bg-red-50' : ''} form-animated`} />
                            {errors.lastName && (
                                <span className="text-xs font-medium text-red-500">{errors.lastName.message}</span>
                            )}
                        </div>
                    </div>

                    <div className="flex gap-4">
                        {/* EMAIL */}
                        <div className="flex flex-col gap-2 w-full">
                            <label>Email *</label>
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

                        {/* USERNAME */}
                        <div className="flex flex-col gap-2 w-full">
                            <label>Nombre de usuario *</label>
                            <input {...register('userName', {
                                required: {
                                    value: true,
                                    message: 'Nombre de usuario requerido'
                                },
                                minLength: {
                                    value: 3,
                                    message: 'El nombre de usuario es muy corto'
                                },
                                maxLength: {
                                    value: 50,
                                    message: 'El nombre de usuario es demasiado largo'
                                }
                            })} type="text" className={`${errors.userName ? 'bg-red-50' : ''} form-animated`} />
                            {errors.userName && (
                                <span className="text-xs font-medium text-red-500">{errors.userName.message}</span>
                            )}
                        </div>
                    </div>

                    <div className="flex gap-4">
                        {/* PASSWORD */}
                        <div className="flex flex-col gap-2 w-full">
                            <label>Contraseña *</label>
                            <input {...register('password', {
                                required: {
                                    value: true,
                                    message: 'Contraseña requerida'
                                },
                                minLength: {
                                    value: 8,
                                    message: 'La contraseña es muy corta'
                                },
                                maxLength: {
                                    value: 100,
                                    message: 'La contraseña es muy larga'
                                }
                            })} type="password" className={`${errors.password ? 'bg-red-50' : ''} form-animated`} />
                            {errors.password && (
                                <span className="text-xs font-medium text-red-500">{errors.password.message}</span>
                            )}
                        </div>

                        {/* CONFIRM PASSWORD */}
                        <div className="flex flex-col gap-2 w-full">
                            <label>Confirmar contraseña</label>
                            <input {...register('confirmPassword', {
                                required: {
                                    value: true,
                                    message: 'Confirmar contraseña requerida'
                                },
                                validate: (value) => {
                                    if (value == watch('password')) {
                                        return true;
                                    } else {
                                        return 'La contraseña no coincide';
                                    }
                                }
                            })} type="password" className={`${errors.confirmPassword ? 'bg-red-50' : ''} form-animated`} />
                            {errors.confirmPassword && (
                                <span className="text-xs font-medium text-red-500">{errors.confirmPassword.message}</span>
                            )}
                        </div>
                    </div>

                    {/* PHONE */}
                    <div className="flex flex-col gap-2">
                        <label>Número de teléfono (10 dígitos) *</label>
                        <input {...register('phone', {
                            required: {
                                value: true,
                                message: 'Número de teléfono requerido'
                            },
                            minLength: {
                                value: 10,
                                message: 'El número de teléfono no es válido'
                            },
                            maxLength: {
                                value: 10,
                                message: 'El número de teléfono no es válido'
                            },
                            onChange: (e) => {
                                console.log(e.target.value);

                                const newValue = e.target.value.replace(/\D/g, '');
                                e.target.value = newValue;
                            }
                        })} type="tel" maxLength={10} className={`${errors.phone ? 'bg-red-50' : ''} w-[160px] form-animated`} />
                        {errors.phone && (
                            <span className="text-xs font-medium text-red-500">{errors.phone.message}</span>
                        )}
                    </div>

                    <div className="flex flex-col items-center gap-4 mt-4">
                        <button onClick={onSubmit} className="primary-extended">Join Us!</button>
                        <span className="text-sm">¿Ya tienes una cuenta?, <a href="/login" className="underline font-bold text-primary">Log in</a></span>
                    </div>
                </form>
            </section>
        </main>
    )
}