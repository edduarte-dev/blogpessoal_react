import { toast, type ToastOptions } from 'react-toastify';

type TipoToast = 'sucesso' | 'erro' | 'info';

const toastConfig: ToastOptions = {
  position: 'top-right',
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: false,
  theme: 'colored',
};

export function ToastAlerta(mensagem: string, tipo: TipoToast) {
  switch (tipo) {
    case 'sucesso':
      toast.success(mensagem, toastConfig);
      break;

    case 'erro':
      toast.error(mensagem, toastConfig);
      break;

    case 'info':
    default:
      toast.info(mensagem, toastConfig);
      break;
  }
}
