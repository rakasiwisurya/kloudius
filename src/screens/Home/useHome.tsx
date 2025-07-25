import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { signOut } from "../../redux/features/authSlice";
import { asyncStorage } from "../../utils/asyncStorage";

const useHome = () => {
  const [isLogoutLoading, setIsLogoutLoading] = useState(false);

  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const logout = async () => {
    setIsLogoutLoading(true);
    try {
      await asyncStorage.removeItem("user");
      dispatch(signOut());
    } catch (error) {}
    setIsLogoutLoading(false);
  };

  return { user, isLogoutLoading, logout };
};

export default useHome;
