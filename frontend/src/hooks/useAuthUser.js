import { useQuery } from "@tanstack/react-query";
import { getAuthUser } from "../lib/api";

const useAuthUser = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["authUser"],
    queryFn: getAuthUser,
    retry: false, // Don't retry on 401
  });

  return {
    isLoading,
    authUser: data?.user || null, // Safe fallback if data is null or undefined
  };
};

export default useAuthUser;
