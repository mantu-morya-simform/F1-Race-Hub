import { useRoutes } from "react-router-dom";
import { routeConfig } from "./config";
import { Suspense } from "react";
import { Spinner } from "@/components/ui/spinner";

const AppRoutes = () => {
  const routes = useRoutes(routeConfig);

  return <Suspense fallback={<Spinner />}>{routes}</Suspense>;
};

export default AppRoutes;
