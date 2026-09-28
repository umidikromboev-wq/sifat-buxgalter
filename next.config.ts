import path from "node:path";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // There is a stray package-lock.json in the home folder above this project;
  // pin the root so Turbopack doesn't go looking for it.
  turbopack: { root: path.join(__dirname) },
};

// Flowbite's plugin regenerates `.flowbite-react/class-list.json` on dev/build,
// which is how Tailwind learns the class names of the components we import.
export default withFlowbiteReact(withNextIntl(nextConfig));
