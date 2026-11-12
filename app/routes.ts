import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("nosotros", "routes/nosotros.tsx"),
  route("cobertura", "routes/cobertura.tsx"),
  route("tabulador", "routes/tabulador.tsx"),
  route("servicios", "routes/servicios.tsx"),
] satisfies RouteConfig;
