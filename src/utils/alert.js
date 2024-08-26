import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
});

const AlertSuccess = () => {
  return Toast.fire({
    icon: "success",
    iconColor: "green",
    title: "Message sent successfully",
  });
};

const AlertError = () => {
  return Toast.fire({
    icon: "error",
    iconColor: "red",
    title: "Message failed to send",
  });
};

export { AlertError, AlertSuccess };
