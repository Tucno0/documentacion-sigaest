// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Sigaest Docs",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Introducción",
          slug: "introduccion",
        },
        {
          label: "Contribuir",
          slug: "contribuir",
        },
        {
          label: "Backend",
          items: [
            { label: "Introduccion", slug: "backend/introduccion" },
            { label: "Instalacion", slug: "backend/instalacion" },
            { label: "Nest CLI", slug: "backend/nest-cli" },
            { label: "Prisma", slug: "backend/prisma" },
            { label: "Estandarizacion", slug: "backend/estandarizacion" },
            { label: "Seguridad", slug: "backend/seguridad" },
            { label: "Rest", slug: "backend/rest" },
            { label: "Socket", slug: "backend/socket" },
            { label: "Ejemplos", slug: "backend/ejemplos" },
          ],
        },
        {
          label: "Frontend",
          items: [
            { label: "Introduccion", slug: "frontend/introduccion" },
            { label: "Instalacion", slug: "frontend/instalacion" },
            { label: "Prototipado", slug: "frontend/prototipado" },
            { label: "Componentes", slug: "frontend/componentes" },
            { label: "Apis", slug: "frontend/apis" },
            { label: "Estados y errores", slug: "frontend/estados-y-errores" },
            { label: "Autenticacion", slug: "frontend/autenticacion" },
            { label: "Ejemplos", slug: "frontend/ejemplos" },
          ],
        },
      ],
    }),
    mdx(),
  ],
});
