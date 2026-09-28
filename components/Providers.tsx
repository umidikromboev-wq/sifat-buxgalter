"use client";

import type { ReactNode } from "react";
import { ThemeProvider as FlowbiteThemeProvider } from "flowbite-react";
import { MotionConfig } from "framer-motion";
import { CallbackProvider } from "@/components/lead/CallbackProvider";
import { ThemeProvider } from "@/components/site/Theme";
import { flowbiteClearTheme, flowbiteTheme } from "./flowbiteTheme";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <FlowbiteThemeProvider theme={flowbiteTheme} clearTheme={flowbiteClearTheme}>
        {/* framer-motion honours the OS "reduce motion" setting from here down. */}
        <MotionConfig reducedMotion="user">
          <CallbackProvider>{children}</CallbackProvider>
        </MotionConfig>
      </FlowbiteThemeProvider>
    </ThemeProvider>
  );
}

export default Providers;
