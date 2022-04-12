import { useRouter } from "next/router";
import { useEffect } from "react";
import { useCheckLoginQuery } from "../generated/graphql";

export const useCheckAuth = () => {
  const router = useRouter();

  const { data, loading } = useCheckLoginQuery();

  useEffect(() => {
    if (
      !loading &&
      data?.checklogin &&
      (router.route === "/login" ||
        router.route === "/register" ||
        router.route === "/forgot-password" ||
        router.route === "/change-password")
    ) {
      router.replace("/");
    }
  }, [loading, data, router]);
  return {
    data,
    loading,
  };
};
