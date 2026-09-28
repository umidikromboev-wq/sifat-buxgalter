"use client";

import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
import { Plus } from "@/components/icons";

/**
 * Flowbite's accordion with a plus that turns into a cross. It has to live in
 * a client file: the arrow icon is a component, and components can't be
 * passed from the server.
 */
export function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <Accordion flush arrowIcon={Plus}>
      {items.map((item) => (
        <AccordionPanel key={item.q}>
          <AccordionTitle>{item.q}</AccordionTitle>
          <AccordionContent>
            <p>{item.a}</p>
          </AccordionContent>
        </AccordionPanel>
      ))}
    </Accordion>
  );
}
