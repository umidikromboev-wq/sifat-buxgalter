/**
 * The twelve logos in the client marquee (files in public/clients/).
 *
 * Names are read off the logos themselves and become the `alt` text — what a
 * screen reader announces and a search engine indexes. `width`/`height` are
 * the files' real pixel sizes, so next/image can reserve the right box.
 *
 * The files differ a lot: most are on white squares, two are solid dark
 * squares (Avangard, Oq Tepa Dental) and two are transparent (West Med Group,
 * Tsg). The files were trimmed to their artwork (white margins removed) so
 * they read at one size; every logo sits on a white tile, except the two
 * coloured squares, whose tile takes the logo's own colour.
 */
export type Client = {
  name: string;
  logo: string;
  width: number;
  height: number;
  /** Tile colour for logos that are a solid coloured square; white otherwise. */
  bg?: string;
};

export const clients: Client[] = [
  { name: "Жалын Көмір", logo: "/clients/client-01.jpg", width: 180, height: 71 },
  { name: "İnesis", logo: "/clients/client-02.png", width: 166, height: 98 },
  { name: "Klass Export", logo: "/clients/client-03.png", width: 235, height: 156 },
  { name: "West Med Group", logo: "/clients/client-04.png", width: 639, height: 122 },
  { name: "Tsg", logo: "/clients/client-05.png", width: 106, height: 121 },
  { name: "Avangard", logo: "/clients/client-06.jpg", width: 1080, height: 1080, bg: "#004b5b" },
  { name: "Aiwa", logo: "/clients/client-07.png", width: 374, height: 76 },
  { name: "Oq Tepa Dental", logo: "/clients/client-08.jpg", width: 1143, height: 846, bg: "#343c47" },
  { name: "Bumble", logo: "/clients/client-09.jpg", width: 290, height: 127 },
  { name: "Роллтон", logo: "/clients/client-10.png", width: 195, height: 93 },
  { name: "Poytaxt Aqua Wave Water", logo: "/clients/client-11.jpg", width: 866, height: 867 },
  { name: "Profit Stone", logo: "/clients/client-12.jpg", width: 534, height: 495 },
];
