import React from 'react';
import { useForm } from 'react-hook-form'
import { Button } from '../button';

/**
 * Signup form values.
 */
export interface SignupFormValues {
    email: string;
    name: string;
    password: string;
    passwordRepeat: string;
}

/**
 * Signup form props.
 */
export interface SignupFormProps {
    showSignUp: boolean;
    onSubmit(data: SignupFormValues): void;
    handleSignUp(): void;
}

/**
 * Signup form component.
 * 
 * @param onSubmit When the form is submitted
 */
export const SignUp: React.FC<SignupFormProps> = ({ showSignUp, handleSignUp, onSubmit }) => {
    const { errors, register, watch, handleSubmit } = useForm<SignupFormValues>({
        defaultValues: { email: '', name: '', password: '', passwordRepeat: '' }
    });

    const emailRegister = register({
        required: {
            value: true,
            message: 'Ce champ est requis'
        },
        pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'Ce champ doit contenir une adresse mail'
        }
    });
    const nameRegister = register({
        required: {
            value: true,
            message: 'Ce champ est requis'
        },
    });
    const passwordRegister = register({
        required: {
            value: true,
            message: 'Ce champ est requis'
        }
    });
    const passwordRepeatRegister = register({
        required: {
            value: true,
            message: 'Ce champ est requis'
        },
        validate: {
            value: value => value === watch('password') || 'Les mots de passe ne correspondent pas'
        }
    });

    return (
        <form onSubmit={handleSubmit(data => onSubmit(data))}>
            <div className="flex flex-col justify-center items-center mx-auto lg:mt-4 mt-2">
                <div>
                    <input className="border border-black m-2 p-4 w-80 rounded focus:outline-none text-gray-800" ref={emailRegister} type="text" name="email" placeholder="Adresse Email" />
                    {errors.email && <small>{errors.email.message}</small>}
                </div>
                <div>
                    <input className="border border-black m-2 p-4 w-80 rounded focus:outline-none text-gray-800" ref={nameRegister} type="text" name="name" placeholder="Nom" />
                    {errors.name && <small>{errors.name.message}</small>}
                </div>
                <div>
                    <input className="border border-black m-2 p-4 w-80 rounded focus:outline-none text-gray-800" ref={passwordRegister} type="password" name="password" placeholder="Mot de passe" />
                    {errors.password && <small>{errors.password.message}</small>}
                </div>
                <div>
                    <input className="border border-black m-2 p-4 w-80 rounded focus:outline-none text-gray-800" ref={passwordRepeatRegister} type="password" name="passwordRepeat" placeholder="Mot de passe" />
                    {errors.passwordRepeat && <small>{errors.passwordRepeat}</small>}
                </div>
                <button className="border border-black mt-8 p-2 rounded bg-secondary-dark w-60 waves-effect mb-12 lg:mb-0" type="submit">Inscription</button>
                <Button onClick={handleSignUp}>
                    {showSignUp ? `S'inscrire` : `Se connecter`}
                </Button>
            </div>
        </form>
    );
}