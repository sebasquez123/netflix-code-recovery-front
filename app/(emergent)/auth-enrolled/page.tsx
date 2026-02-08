'use client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

import { BorderBeam } from '../../components/magicui/border-beam';
import ShineBorder from '../../components/magicui/shine-border';
import { Companies } from '../../components/companies';
import { Button, buttonVariants } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { cn } from '../../utils/micelane';

interface FormData {
  email: string;
}

function DistrinetPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  // Variables para mostrar tarjetas condicionalmente
  const showUpdateCard = false; // Cambia a false para ocultar
  const showCodeCard = false; // Cambia a false para ocultar
  const hasError = true; // Cambia a false cuando no hay error
  const searchedEmail = 'camilomoto344+ctg8@gmail.com'; // Email buscado

  const onSubmit = (data: FormData) => {
    console.log('Email:', data.email);
    // Aquí puedes agregar tu lógica
  };
  return (
    <>
      <Companies />
      <section className="space-y-6 pb-8 pt-0 md:pb-12 md:pt-10 lg:py-1 flex flex-col items-center px-4 md:px-0">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <ShineBorder
            className="text-center capitalize bg-muted px-2 md:px-4 py-1.5 text-sm md:text-lg font-medium absolute mx-4 md:mx-0"
            color={['#6022ff', '#f21a42', '#7bd1ff']}
          >
            Bienvenido a Distrinet Internacional ✨
          </ShineBorder>

          <h1 className="font-heading text-3xl sm:text-3xl md:text-4xl lg:text-5xl mt-20">
            El mejor lugar para encontrar tus plataformas streaming favoritas.
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Ingresa tu correo electronico a continuacion para consultar
            <br />
            <span className="text-[#6022ff] underline">
              Actualizacion de Hogar
            </span>{' '}
            &/o{' '}
            <span className="text-[#6022ff] underline">
              Codigo de inicio de sesion
            </span>{' '}
            <br />
            de <br />
          </p>
        </div>
        <div>
          <img
            src={`/icons/companies/netflix-4.svg`}
            className="h-10 w-40 dark:brightness-0 dark:invert"
            alt={'Netflix'}
          />{' '}
        </div>

        <div className="relative rounded-xl mx-auto justify-center flex flex-col items-center max-w-[90vw] lg:max-w-[1600px] min-w-[85%] min-h-[500px] overflow-hidden p-12 border bg-background">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-[90%] relative z-10"
          >
            <div className="space-y-4">
              <label
                htmlFor="email"
                className="text-base md:text-lg font-medium block"
              >
                Consulta tus códigos aqui abajo:
              </label>
              <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-stretch md:items-start">
                <div className="flex-1">
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    className="h-14 md:h-16 text-base md:text-lg"
                    {...register('email', {
                      required: 'El correo es requerido',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Correo inválido',
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="h-14 md:h-16 px-8 md:px-12 text-base md:text-lg w-full md:w-auto"
                >
                  Consultar
                </Button>
              </div>
            </div>
          </form>
          <BorderBeam
            size={250}
            duration={12}
            delay={9}
            className="pointer-events-none"
          />
          <div className="mt-8 w-[90%] relative z-10 flex flex-col gap-4 justify-left text-lg font-medium block">
            <p>Resultados de busqueda:</p>
          </div>

          {/* Mensaje de error cuando no se encuentran códigos */}
          {hasError && !showUpdateCard && !showCodeCard && (
            <div className="mt-8 w-[90%] relative z-10 bg-red-50 dark:bg-red-950 border-2 border-red-500 rounded-lg p-4 md:p-8 flex flex-col items-center gap-4">
              <div className="text-red-600 dark:text-red-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-red-700 dark:text-red-300">
                Código no encontrado
              </h3>
              <p className="text-sm md:text-base text-center text-red-600 dark:text-red-400 px-2">
                No se encontró ningún código reciente para{' '}
                <span className="font-semibold break-all">{searchedEmail}</span>
              </p>
              <p className="text-xs md:text-sm text-center text-red-600/80 dark:text-red-400/80 max-w-md px-2">
                Asegúrate de haber solicitado el código primero y espera unos
                segundos para que llegue.
              </p>
            </div>
          )}

          {/* Tarjetas condicionales */}
          {(showUpdateCard || showCodeCard) && (
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-8 w-[90%] relative z-10">
              {showUpdateCard && (
                <div className="flex-1 bg-red-50 dark:bg-red-950 border-2 border-red-500 rounded-lg p-6 flex flex-col items-center gap-4">
                  <div className="text-red-600 dark:text-red-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
                      <path d="M12 3v6" />
                    </svg>
                  </div>
                  <p className="text-base text-center font-medium text-red-700 dark:text-red-300">
                    Actualización de Hogar
                  </p>
                  <Button
                    variant="outline"
                    size="default"
                    className="border-red-500 text-red-600 hover:bg-red-100 dark:hover:bg-red-900"
                  >
                    Ver Detalles
                  </Button>
                </div>
              )}

              {showCodeCard && (
                <div className="flex-1 bg-red-50 dark:bg-red-950 border-2 border-red-500 rounded-lg p-6 flex flex-col items-center gap-4">
                  <div className="text-red-600 dark:text-red-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <p className="text-base text-center font-medium text-red-700 dark:text-red-300">
                    Código de Inicio
                  </p>
                  <Button
                    variant="outline"
                    size="default"
                    className="border-red-500 text-red-600 hover:bg-red-100 dark:hover:bg-red-900"
                  >
                    Obtener Código
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default DistrinetPage;
