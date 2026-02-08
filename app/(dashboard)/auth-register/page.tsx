'use client';

import axios, { AxiosError } from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { Suspense, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import FormError from '~/app/components/form-error';
import { ScreenLoader } from '~/app/components/loader';
import { RouteNames } from '~/app/constants/routes';
import {
  emailRules,
  outlookRegex,
  requiredRules,
} from '~/app/constants/validation-rules';
import { absoluteUrl } from '~/app/utils/micelane';
import { formatTime } from '~/app/utils/timeformat';

import { BorderBeam } from '../../components/magicui/border-beam';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';

interface FormData {
  email: string;
}
const authApiUrl = absoluteUrl('/auth/request-access');
const emailWindow = absoluteUrl('/auth/email-window');
const reportUrl = absoluteUrl('/database/download-excel');
function AuthPage() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const confirmAccess = searchParams.get('artifact') === 'legacy';
  const token = searchParams.get('token');

  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [portalToken, setPortalToken] = useState<string | null>(null);
  const [isRequesting, setIsRequesting] = useState(false);
  const initialTime = 60;
  const [timeLeft, setTimeLeft] = useState(initialTime);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    const fetchAuthToken = async () => {
      try {
        if (!confirmAccess || !token) throw new Error('No valid page access.');
        const response = await axios.get(`${authApiUrl}?gateToken=${token}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.status !== 200 && response.status !== 201)
          throw new Error('Failed to request approval.');

        toast.success('User authorized!');

        setTimeLeft(response.data.expiresIn);
        setPortalToken(response.data.portalToken);
        setAuthorized(true);
      } catch (error) {
        if (error instanceof AxiosError)
          toast.error('Failed to authorize user');
        else if (error instanceof Error) toast.error(error.message);
        router.replace(RouteNames.netflix);
      } finally {
        setLoading(false);
      }
    };

    fetchAuthToken();
  }, [confirmAccess, token]);

  useEffect(() => {
    if (!authorized || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [authorized, timeLeft]);

  const downloadReport = async () => {
    try {
      setIsRequesting(true);
      const response = await axios.get(reportUrl, {
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${portalToken}`,
        },
        responseType: 'blob',
      });
      if (response.status !== 200 && response.status !== 201)
        throw new Error('Failed to request report.');

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'email-db.xlsx');
      document.body.appendChild(link);
      link.click();

      link.parentNode?.removeChild(link);
      window.URL.revokeObjectURL(url);
      toast.success('Report is being downloaded!');
    } catch (error) {
      if (error instanceof AxiosError) toast.error('Failed to download report');
      else if (error instanceof Error) toast.error(error.message);
    } finally {
      setIsRequesting(false);
    }
  };

  const onSubmit = async (data: FormData) => {
    try {
      setIsRequesting(true);
      const email = data.email.trim();
      if (!email) throw new Error(requiredRules.required);

      if (!outlookRegex.test(email)) {
        const confirmed = window.confirm(
          'Remember, out of outlook emails may not work properly, do you want to proceed with this email?'
        );
        if (!confirmed) return;
      }

      const response = await axios.get(`${emailWindow}/${email}`, {
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${portalToken}`,
        },
      });
      if (response.status !== 200 && response.status !== 201)
        throw new Error('Failed to request approval.');

      window.open(response.data.url, '_blank');
    } catch (error) {
      if (error instanceof AxiosError)
        toast.error('Failed to request enrollment');
      else if (error instanceof Error) toast.error(error.message);
    } finally {
      setIsRequesting(false);
    }
  };

  if (loading) return <ScreenLoader />;

  return (
    authorized && (
      <div className="space-y-6 pb-8 pt-0 md:pb-12 pt-10 lg:pt-10 lg:py-1 flex flex-col items-center px-4 md:px-0">
        <div className=" relative rounded-xl mx-auto justify-center flex flex-col items-center max-w-[90vw] lg:max-w-[1600px] min-w-[85%] min-h-[500px] overflow-hidden p-12 border bg-background">
          <div
            id="download-report"
            className={`absolute top-4 ${timeLeft > 0 ? 'right-[6rem]' : 'right-[13rem]'} z-20`}
          >
            <Button
              disabled={isRequesting || !authorized || timeLeft <= 0}
              onClick={downloadReport}
              variant="outline"
              className="bg-background/90 backdrop-blur-sm border-2 w-[12rem] border-primary hover:bg-primary/10 shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Descargar Reporte
            </Button>
          </div>

          <div
            id="timer"
            className="absolute top-4 right-4 z-20 bg-background/90 backdrop-blur-sm border-2 border-primary rounded-lg px-4 py-2 shadow-lg"
          >
            <div className="flex flex-col items-center gap-1">
              <span
                className={`text-sm font-bold tabular-nums ${timeLeft <= 10 ? 'text-red-500' : 'text-primary'}`}
              >
                {timeLeft > 0 && formatTime(timeLeft)}
                {timeLeft === 0 && (
                  <span className="text-sm text-red-500">
                    Need to reauthorize
                  </span>
                )}
              </span>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-[90%] relative z-10"
          >
            <div className="space-y-4">
              <label
                htmlFor="email"
                className="text-base md:text-lg font-medium block"
              >
                Escanea tu correo para registrarlo a la base de datos y
                habilitar los accesos:
                <hr />
                <span className="text-sm text-muted-foreground">
                  solo debe ingresar un correo por solicitud, acepte la pantalla
                  de consentimiento y verifique que todo haya salido bien.
                </span>
              </label>
              <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-stretch md:items-start">
                <div className="flex-1">
                  <Input
                    disabled={isRequesting || !authorized || timeLeft <= 0}
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    className="h-14 md:h-16 text-base md:text-lg"
                    {...register('email', emailRules)}
                  />
                  <FormError
                    errors={errors}
                    field="email"
                    className="text-sm text-red-500 mt-1"
                  />
                </div>
                <Button
                  disabled={isRequesting || !authorized || timeLeft <= 0}
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
            size={500}
            duration={12}
            delay={9}
            className="pointer-events-none"
          />
        </div>
      </div>
    )
  );
}

export default function EmailConfirmedPage() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-full w-full">
          Loading...
        </div>
      }
    >
      <AuthPage />
    </Suspense>
  );
}
