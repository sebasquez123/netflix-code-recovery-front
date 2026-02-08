import React, { useEffect } from 'react';
import toast, { Toaster, useToasterStore } from 'react-hot-toast';

const TOAST_LIMIT = 1;

const ToastGlobal = () => {
  const { toasts } = useToasterStore();
  useEffect(() => {
    for (const t of toasts
      .filter((t) => t.visible)
      .filter((_, i) => i >= TOAST_LIMIT))
      toast.dismiss(t.id);
  }, [toasts]);

  return <Toaster position="top-center" reverseOrder={true} />;
};

export default ToastGlobal;
