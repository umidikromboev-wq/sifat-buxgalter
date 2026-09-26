import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { clients } from "@/content/site";

/** Renders logo images when public/clients/<file>.webp|png|svg exists, otherwise a text chip. */
export default function ClientLogos() {
  const dir = path.join(process.cwd(), "public", "clients");
  return (
    <div className="logos">
      {clients.map((c) => {
        const ext = ["webp", "png", "svg", "jpg"].find((e) => fs.existsSync(path.join(dir, `${c.file}.${e}`)));
        if (!ext) return <span key={c.name}>{c.name}</span>;
        return (
          <span key={c.name} className="logo-img" title={c.name}>
            <Image src={`/clients/${c.file}.${ext}`} alt={c.name} width={160} height={56} unoptimized={ext === "svg"} />
          </span>
        );
      })}
    </div>
  );
}
