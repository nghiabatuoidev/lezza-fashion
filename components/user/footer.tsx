/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Footer = ({ data }: { data: any }) => {
  return (
    <footer className="bg-muted border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-x-8 gap-y-12 mb-16">
          
          {/* Logo & Description */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <h2 className="text-xl font-bold tracking-[0.2em] uppercase text-foreground">
              {data.logo}
            </h2>
            <p className="text-sm text-neutral-700 leading-relaxed max-w-xs">
              {data.description}
            </p>
          </div>

          {/* Map các cột Links */}
          {data.columns.map((col: any, idx: any) => (
            <div key={idx} className="col-span-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
              <h5 className="font-bold text-sm uppercase tracking-widest text-foreground">
                {col.title}
              </h5>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {col.links.map((link: any, lIdx: any) => {
                  // KIỂM TRA LINK NGOÀI: Nếu bắt đầu bằng http thì mở tab mới
                  const isExternal = link.href.startsWith("http");
                  
                  return (
                    <li key={lIdx}>
                      <Link
                        href={link.href}
                        className="hover:text-foreground transition-colors underline-offset-4 hover:underline"
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          {/* Email Signup */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h5 className="font-bold text-sm uppercase tracking-widest text-foreground mb-6">
              Liên hệ
            </h5>
            <div className="flex border-b border-foreground pb-2 items-center justify-between w-full max-w-70 md:max-w-none">
              <input
                type="email"
                placeholder={data.emailPlaceholder}
                className="bg-transparent text-xs outline-none w-full uppercase placeholder:normal-case placeholder:text-muted-foreground text-foreground"
              />
              <button className="hover:translate-x-1 transition-transform text-foreground" aria-label="Subscribe">
                <ArrowRight size={16} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center pt-8 border-t border-border">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 text-[10px] uppercase text-muted-foreground font-bold tracking-widest">
            {data.bottomLinks.map((text: any, idx: any) => (
              <Link
                key={idx}
                href="#"
                className="hover:text-foreground transition-colors"
              >
                {text}
              </Link>
            ))}
          </div>
          <p className="text-[10px] uppercase text-muted-foreground tracking-widest font-medium text-center">
            {data.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;