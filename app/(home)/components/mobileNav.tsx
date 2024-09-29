"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function MobileNav() {
  const [sheetOpen, setSheetOpen] = useState(false);

  const onSelectItemHandler = () => setSheetOpen(false);
  return (
    <div className="flex items-center md:hidden">
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger className="self-end">
          <Menu />
        </SheetTrigger>
        <SheetContent side={"right"}>
          <div className="ml-2 flex flex-col gap-4">
            <Link onClick={onSelectItemHandler} href="/">
              Dashboard
            </Link>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Purchase</AccordionTrigger>
                <AccordionContent>
                  <div className="ml-2 flex flex-col gap-2 font-semibold">
                    <Link onClick={onSelectItemHandler} href="/purchase">
                      Create a record
                    </Link>
                    <Link onClick={onSelectItemHandler} href="/">
                      History
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Configurations</AccordionTrigger>
                <AccordionContent>
                  <div className="ml-2 flex flex-col gap-2 font-semibold">
                    <Link onClick={onSelectItemHandler} href="/">
                      Vendors
                    </Link>
                    <Link onClick={onSelectItemHandler} href="/">
                      Payment Methods
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
