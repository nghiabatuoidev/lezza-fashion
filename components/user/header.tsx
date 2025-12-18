/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"; // Cần thiết để sử dụng useEffect và useState

import { useEffect, useState } from "react";
import { Menu, Search, ShoppingBag, User, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const Header = ({ data }: { data: any }) => {
  const [activeId, setActiveId] = useState("");
  // Logic theo dõi cuộn chuột để xác định section đang hiển thị
  useEffect(() => {
    const sectionIds = [
      ...data.mainNav.map((item: any) => item.href.replace("#", "")),
      ...data.subNav.map((item: any) => item.href.replace("#", "")),
    ].filter((id) => id && id !== "/");

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset để khớp với Header

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveId(`#${id}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [data]);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/80 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* --- MOBILE MENU --- */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="-ml-2 text-foreground"
                >
                  <Menu className="w-6 h-6" strokeWidth={2} />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="left"
                className="w-full max-w-75 p-0 flex flex-col bg-background border-r border-border"
              >
                <SheetHeader className="px-5 h-14 border-b border-border shrink-0 flex flex-row items-center">
                  <SheetTitle className="text-sm font-bold tracking-[0.2em] uppercase text-foreground">
                    {data.logo}
                  </SheetTitle>
                </SheetHeader>

                <div className="flex-1 overflow-y-auto no-scrollbar">
                  <div className="px-5 py-2">
                    {data.mainNav.map((link: any, idx: any) => (
                      <SheetClose asChild key={idx}>
                        <Link
                          href={link.href}
                          className="flex items-center justify-between py-4 border-b border-border last:border-0 uppercase"
                        >
                          <span
                            className={`text-sm font-semibold tracking-tight transition-colors ${
                              activeId === link.href
                                ? "text-primary"
                                : "text-foreground"
                            }`}
                          >
                            {link.label}
                          </span>
                          <ChevronRight
                            className={`w-4 h-4 transition-colors ${
                              activeId === link.href
                                ? "text-primary"
                                : "text-foreground/30"
                            }`}
                          />
                        </Link>
                      </SheetClose>
                    ))}
                  </div>

                  <div className="h-2 bg-muted/50 w-full" />

                  <div className="px-5 py-6 flex flex-col gap-1">
                    <p className="text-xs uppercase font-black  tracking-[0.2em] text-foreground/50 mb-4">
                      Khám phá
                    </p>
                    {data.subNav.map((link: any, idx: any) => (
                      <SheetClose asChild key={idx}>
                        <Link
                          href={link.href}
                          className="py-2.5 group flex items-center justify-between transition-all"
                        >
                          <span
                            className={`text-[13px] uppercase transition-all ${
                              activeId === link.href
                                ? "text-primary font-bold pl-2 border-l-2 border-primary leading-none"
                                : link.isHighlight
                                ? "text-destructive font-bold"
                                : "text-foreground/80 font-medium"
                            }`}
                          >
                            {link.label}
                          </span>

                          {/* Nếu có icon bên phải thì để ở đây */}
                          {!link.isHighlight && activeId !== link.href && (
                            <ChevronRight className="w-3.5 h-3.5 opacity-30" />
                          )}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* --- DESKTOP NAV --- */}
          <div className="hidden md:flex items-center gap-8">
            {data.mainNav.map((link: any, idx: any) => (
              <Link
                key={idx}
                href={link.href}
                className={`text-xs font-bold transition-all tracking-wide underline-offset-8 hover:text-foreground uppercase ${
                  activeId === link.href
                    ? "text-foreground underline decoration-2"
                    : "text-foreground/60"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Logo Center */}
          <Link
            href="/"
            className="text-xl md:text-2xl font-black tracking-[0.25em] uppercase text-foreground absolute left-1/2 transform -translate-x-1/2"
          >
            {data.logo}
          </Link>

          {/* Icons Right */}
          <div className="flex items-center gap-4 md:gap-5">
            <Search
              className="w-5 h-5 cursor-pointer text-foreground"
              strokeWidth={2}
            />
            <User
              className="w-5 h-5 cursor-pointer text-foreground"
              strokeWidth={2}
            />
            <div className="relative cursor-pointer group">
              <ShoppingBag
                className="w-5 h-5 text-foreground"
                strokeWidth={2}
              />
              <span className="absolute -top-1.5 -right-1.5 bg-primary text-primary-foreground text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-black">
                0
              </span>
            </div>
          </div>
        </div>

        {/* Desktop SubNav */}
        <div className="hidden md:flex items-center justify-center gap-10 py-3 border-t border-border">
          {data.subNav.map((link: any, idx: any) => (
            <Link
              key={idx}
              href={link.href}
              className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all relative py-1 ${
                activeId === link.href
                  ? "text-foreground after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                  : link.isHighlight
                  ? "text-destructive"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
