import { ref } from "vue";

const toasts = ref([]);

export const useToast = () => {
  const addToast = (message, type = "info", duration = 3000) => {
    const id = Date.now();
    const toast = {
      id,
      message,
      type,
      visible: true,
    };

    toasts.value.push(toast);

    // Auto remove after duration
    setTimeout(() => {
      removeToast(id);
    }, duration);

    return id;
  };

  const removeToast = (id) => {
    const index = toasts.value.findIndex((toast) => toast.id === id);
    if (index > -1) {
      toasts.value.splice(index, 1);
    }
  };

  const success = (message, duration) => addToast(message, "success", duration);
  const error = (message, duration) => addToast(message, "error", duration);
  const warning = (message, duration) => addToast(message, "warning", duration);
  const info = (message, duration) => addToast(message, "info", duration);

  return {
    toasts,
    addToast,
    removeToast,
    success,
    error,
    warning,
    info,
  };
};
