import { createTheme } from "flowbite-react";

/**
 * Flowbite ships a blue-and-grey theme. Every component this site uses is
 * mapped onto the ivory / ink / gold tokens here, and `flowbiteClearTheme`
 * drops the defaults for those keys entirely — otherwise Flowbite's own
 * `focus:ring-primary-300` and friends would still be merged in underneath.
 */
export const flowbiteTheme = createTheme({
  button: {
    base: "group relative inline-flex select-none items-center justify-center gap-3 text-balance rounded-full text-center font-medium tracking-[-0.01em] transition-[transform,background-color,color,box-shadow,border-color] duration-300 ease-out focus:outline-none focus-visible:ring-4 active:scale-[0.98]",
    // Minimum heights, not fixed ones: a long Uzbek label that wraps on a
    // phone grows the pill instead of spilling out of it.
    size: {
      sm: "min-h-10 px-4 py-2 text-sm leading-tight",
      md: "min-h-12 px-6 py-2.5 text-[15px] leading-tight",
      lg: "min-h-14 px-7 py-3 text-base leading-tight",
      xl: "min-h-16 px-9 py-3.5 text-[17px] leading-tight",
    },
    color: {
      ink: "sheen bg-ink text-paper shadow-[0_12px_30px_-14px_rgb(18_17_21/0.6)] hover:bg-ink-2 hover:shadow-[0_18px_40px_-16px_rgb(18_17_21/0.7)] focus-visible:ring-gold/35",
      gold: "sheen btn-gold text-night shadow-[0_16px_40px_-16px_rgb(176_141_69/0.85)] hover:shadow-[0_22px_50px_-18px_rgb(176_141_69/0.95)] focus-visible:ring-gold/40",
      ghost:
        "border border-line-strong bg-transparent text-ink hover:border-ink hover:bg-ink/4 focus-visible:ring-ink/10",
      glass:
        "border border-white/15 bg-white/6 text-on-night backdrop-blur-md hover:border-white/30 hover:bg-white/12 focus-visible:ring-gold/30",
      paper: "sheen bg-on-night text-night hover:bg-white focus-visible:ring-gold/40",
    },
  },

  modal: {
    root: {
      show: { on: "flex bg-night/55 backdrop-blur-[6px]", off: "hidden" },
    },
    content: {
      base: "relative h-full w-full p-3 md:h-auto",
      inner:
        "modal-pop relative flex max-h-[92dvh] flex-col overflow-hidden rounded-hero border border-white/70 bg-card shadow-float dark:border-white/10",
    },
    header: {
      base: "flex items-start justify-between gap-6 px-6 pt-7 md:px-8",
      title: "display-3 text-ink",
      close: {
        base: "-me-2 -mt-1 ms-auto inline-flex size-10 shrink-0 items-center justify-center rounded-full text-ink-3 transition-colors hover:bg-sand hover:text-ink",
        icon: "size-5",
      },
    },
    body: { base: "flex-1 overflow-auto px-6 pb-7 pt-3 md:px-8 md:pb-8" },
  },

  drawer: {
    root: {
      base: "fixed z-50 flex flex-col overflow-y-auto bg-paper p-6 transition-transform duration-500 ease-out",
      backdrop: "fixed inset-0 z-40 bg-night/50 backdrop-blur-[4px]",
      position: {
        right: {
          on: "right-0 top-0 h-dvh w-[min(26rem,100vw)] transform-none shadow-float",
          off: "right-0 top-0 h-dvh w-[min(26rem,100vw)] translate-x-full",
        },
      },
    },
    header: {
      inner: {
        closeButton:
          "absolute inset-e-4 top-4 flex size-11 items-center justify-center rounded-full text-ink-3 transition-colors hover:bg-sand hover:text-ink",
        closeIcon: "size-4",
        titleIcon: "hidden",
        titleText: "mb-10 inline-flex items-center pt-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep",
      },
    },
  },

  accordion: {
    root: {
      base: "border-t border-line",
      flush: { on: "", off: "" },
    },
    content: {
      base: "pb-8 pe-4 text-[15px] leading-relaxed text-ink-2 md:pe-20 md:text-base",
    },
    title: {
      base: "group flex w-full items-center justify-between gap-6 py-6 text-left text-[17px] font-medium text-ink transition-colors hover:text-gold-deep md:py-7 md:text-lg",
      flush: { on: "", off: "" },
      heading: "",
      open: { on: "", off: "" },
      arrow: {
        base: "size-11 shrink-0 rounded-full border border-line-strong p-3 text-ink transition-[transform,background-color,border-color,color] duration-500 ease-out group-hover:border-ink",
        open: { on: "rotate-45 border-ink bg-ink text-paper", off: "" },
      },
    },
  },

  table: {
    root: { base: "w-full text-left", shadow: "hidden", wrapper: "relative" },
    head: {
      base: "",
      cell: {
        base: "px-6 pb-5 pt-7 align-bottom text-xs font-semibold uppercase tracking-[0.16em] text-ink-3",
      },
    },
    body: {
      base: "",
      cell: { base: "px-6 py-5 align-top" },
    },
    row: { base: "border-t border-line", hovered: "", striped: "" },
  },

  textInput: {
    base: "flex",
    field: {
      base: "relative w-full",
      icon: {
        base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4",
        svg: "size-5 text-ink-3",
      },
      input: {
        base: "block w-full border bg-card text-ink transition-[border-color,box-shadow,background-color] duration-300 placeholder:text-ink-3/60 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        sizes: {
          sm: "h-10 px-3 text-sm",
          md: "h-12 px-4 text-[15px]",
          lg: "h-14 px-5 text-base",
        },
        colors: {
          gray: "border-line-strong hover:border-ink/30 focus:border-gold focus:shadow-[0_0_0_4px_rgb(176_141_69/0.16)]",
          failure:
            "border-danger/60 focus:border-danger focus:shadow-[0_0_0_4px_rgb(166_61_42/0.12)]",
        },
        withIcon: { on: "pl-12", off: "" },
        withRightIcon: { on: "pr-12", off: "" },
        withAddon: { on: "rounded-e-control", off: "rounded-control" },
        withShadow: { on: "", off: "" },
      },
    },
  },

  label: {
    root: {
      base: "text-sm font-medium",
      colors: { default: "text-ink-2", failure: "text-danger" },
    },
  },

  radio: {
    base: "size-4.5 shrink-0 appearance-none rounded-full border border-line-strong bg-card bg-[length:1.1em_1.1em] bg-center bg-no-repeat transition-colors checked:border-transparent checked:bg-current checked:bg-dot-icon focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
    color: { default: "text-ink dark:text-gold" },
  },

  helperText: {
    root: {
      base: "mt-2 text-sm",
      colors: { gray: "text-ink-3", failure: "text-danger" },
    },
  },

  spinner: {
    base: "inline animate-spin text-white/25",
    color: { default: "fill-gold-light" },
  },

  tooltip: {
    base: "absolute z-20 inline-block max-w-72 rounded-xl px-3.5 py-2.5 text-[13px] font-medium leading-snug shadow-lift",
    style: { dark: "bg-ink text-paper" },
    arrow: { style: { dark: "bg-ink" } },
  },
});

export const flowbiteClearTheme = {
  button: { base: true, size: true, color: true },
  modal: { root: { show: true }, content: true, header: true, body: true },
  drawer: { root: { base: true, backdrop: true, position: true }, header: { inner: true } },
  accordion: true,
  table: true,
  textInput: { field: { input: true, icon: true } },
  label: { root: { colors: true } },
  radio: true,
  helperText: { root: { colors: true } },
  tooltip: { base: true, style: true, arrow: { style: true } },
} as const;
