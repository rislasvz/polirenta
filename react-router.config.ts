import type { Config } from "@react-router/dev/config";

export default {
  basename: process.env.BASE_PATH || "/",
  async prerender() {
    return ["/", "/nosotros", "/cobertura", "/tabulador", "/servicios"];
  },
} satisfies Config;

