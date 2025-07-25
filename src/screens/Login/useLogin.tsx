import { notification } from "../../utils/notification";

const useLogin = () => {
  const onSubmit = () => {
    notification.error("Something went wrong");
  };

  return { onSubmit };
};

export default useLogin;
