import React from 'react';
import { useForm } from 'react-hook-form'
import { Button } from '../button';

/**
 * Signin form values.
 */
export interface SigninFormValues {
    email: string;
    password: string;
}

/**
 * Signin form props.
 */
export interface SigninFormProps {
    showSignUp: boolean;
    onSubmit(data: SigninFormValues): void;
    handleSignUp(): void;
}

/**
 * Signin form component.
 * 
 * @param onSubmit When the form is submitted
 */
export const SignIn: React.FC<SigninFormProps> = ({ showSignUp, onSubmit, handleSignUp }) => {
    const { register, errors, handleSubmit } = useForm<SigninFormValues>({
        defaultValues: { email: '', password: '' }
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
    const passwordRegister = register({
        required: {
            value: true,
            message: 'Ce champ est requis'
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
                    <input className="border border-black m-2 p-4 w-80 mt-8 rounded focus:outline-none text-gray-800" ref={passwordRegister} type="password" name="password" placeholder="Mot de passe" />
                    {errors.password && <small>{errors.password.message}</small>}
                </div>

                <button className="border border-black mt-8 p-2 rounded bg-secondary-dark w-60 waves-effect mb-12 lg:mb-0" type="submit">Connexion</button>
                <Button onClick={handleSignUp}>
                    {showSignUp ? `S'inscrire` : `Se connecter`}
                </Button>
            </div>

        </form>
    );
}