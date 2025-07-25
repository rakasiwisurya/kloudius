import { useNavigation } from "@react-navigation/native";
import { notification } from "../../utils/notification";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const useLogin = () => {
  const navigate = useNavigation<NativeStackNavigationProp<any>>();

  const onSubmit = () => {
    // notification.error("Something went wrong");
    navigate.replace("SignUp");
  };

  return { onSubmit };
};

export default useLogin;
