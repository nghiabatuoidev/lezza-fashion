/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Package, Leaf, MapPin, Star } from "lucide-react";
import data from "@/app/data/home.json";
import { BlurFade } from "@/components/ui/blur-fade";

const ICON_MAP: any = {
  package: Package,
  leaf: Leaf,
  mapPin: MapPin,
};

const Page = () => {
  return (
    // Sử dụng bg-background và text-foreground theo chuẩn shadcn
    <div className="min-h-screen bg-background font-sans text-foreground">
      <main>
        {/* Hero Section */}
        <section id="trang-chu">
          <BlurFade inView>
            <div className="relative h-[70vh] md:h-150 w-full bg-neutral-900">
              <Image
                src={data.hero.image}
                alt="Hero"
                fill
                sizes="100vw"
                className="object-cover opacity-90"
                priority
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                <h2 className="text-4xl md:text-6xl font-light mb-4">
                  {data.hero.title}
                </h2>
                <p className="text-base md:text-lg mb-8 max-w-md opacity-90">
                  {data.hero.description}
                </p>
                {/* Button sử dụng màu Primary của shadcn */}
                <Button className="bg-primary text-primary-foreground hover:opacity-90 rounded-none px-10 py-6 text-xs font-bold tracking-widest uppercase">
                  {data.hero.buttonText}
                </Button>
              </div>
            </div>
          </BlurFade>
        </section>

        {/* 1. Danh mục */}
        <section id="danh-muc">
          <BlurFade inView>
            <div className="container mx-auto px-4 py-16">
              <div className="text-center mb-12">
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground mb-2">
                  {data.categories.label}
                </h3>
                <h2 className="text-2xl md:text-3xl font-medium uppercase tracking-widest">
                  {data.categories.title}
                </h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {data.categories.items.map((cat: any, idx: any) => (
                  <Link href="#" key={idx} className="group cursor-pointer">
                    <div className="relative aspect-3/4 overflow-hidden bg-muted mb-3 rounded-sm">
                      <Image
                        src={cat.image}
                        alt={cat.name}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <p className="text-center text-[11px] font-bold tracking-widest uppercase underline underline-offset-4 decoration-border group-hover:decoration-foreground transition-colors">
                      {cat.name}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </BlurFade>
        </section>

        {/* 2. Bộ sưu tập */}
        <section id="bo-suu-tap">
          <BlurFade inView>
            <div className="container mx-auto px-4 py-8">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-medium uppercase tracking-widest">
                  {data.featured.title}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-6">
                {data.featured.items.map((item: any, idx: any) => (
                  <div
                    key={idx}
                    className="relative aspect-4/5 md:aspect-3/4 group cursor-pointer overflow-hidden rounded-sm"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/10 flex flex-col items-center justify-center text-white text-center p-4">
                      <h4 className="text-3xl md:text-4xl mb-6">{item.name}</h4>
                      <Button
                        variant="secondary"
                        className="bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-none border-none text-[10px] font-bold tracking-widest uppercase h-10 px-6"
                      >
                        {item.subtitle}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>
        </section>

        {/* 3. Nổi bật */}
        <section id="noi-bat">
          <BlurFade inView>
            <div className="container mx-auto px-4 py-20 border-t border-border">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-medium uppercase tracking-widest mb-4">
                  {data.favorites.title}
                </h2>
                <p className="text-sm text-muted-foreground italic max-w-md mx-auto">
                  {data.favorites.subtitle}
                </p>
              </div>
              <div className="px-4 md:px-12">
                <Carousel opts={{ align: "start" }} className="w-full">
                  <CarouselContent>
                    {data.favorites.items.map((item: any, idx: any) => (
                      <CarouselItem
                        key={idx}
                        className="basis-1/2 md:basis-1/3 lg:basis-1/4"
                      >
                        <div className="group cursor-pointer">
                          <div className="relative aspect-3/4 overflow-hidden bg-muted mb-3 rounded-sm">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <p className="text-[11px] font-bold uppercase tracking-tight text-center text-foreground">
                            {item.name}
                          </p>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="hidden md:flex -left-6 border-border" />
                  <CarouselNext className="hidden md:flex -right-6 border-border" />
                </Carousel>
              </div>
            </div>
          </BlurFade>
        </section>

        {/* 4. Sứ mệnh */}
        <section id="su-menh">
          <BlurFade inView>
            <div className="relative h-120 my-16 flex items-center justify-center overflow-hidden">
              <Image
                src={data.mission.image}
                alt="Mission"
                fill
                sizes="100vw"
                className="object-cover brightness-75 scale-105"
              />
              <div className="relative z-10 flex flex-col items-center justify-center text-white text-center px-6 max-w-3xl">
                <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-6 opacity-80">
                  {data.mission.label}
                </h2>
                <h3 className="text-3xl md:text-5xl font-light mb-8 leading-tight italic">
                  {data.mission.title}
                </h3>
                <Button className="bg-background text-foreground hover:bg-muted rounded-none px-8 py-6 text-[10px] font-bold uppercase tracking-widest transition-colors">
                  {data.mission.buttonText}
                </Button>
              </div>
            </div>
          </BlurFade>
        </section>

        {/* 5. Trải nghiệm */}
        <section id="trai-nghiem">
          <BlurFade inView>
            <div className="bg-secondary/30 py-20">
              <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-2xl md:text-3xl font-medium uppercase tracking-widest text-foreground">
                    {data.reviews.title}
                  </h2>
                </div>
                <div className="max-w-5xl mx-auto">
                  <Carousel
                    className="w-full"
                    opts={{ align: "center", loop: true, slidesToScroll: 1 }}
                  >
                    <CarouselContent className="-ml-1 md:basis-1/2 lg:basis-full">
                      {data.reviews.items.map((review: any, index: any) => (
                        <CarouselItem
                          key={index}
                          className="pl-1 md:pl-4 md:basis-1/2 lg:basis-full"
                        >
                          <div className="flex flex-col lg:flex-row gap-12 items-center p-4">
                            <div className="lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
                              <h4 className="text-[11px] uppercase tracking-widest font-bold mb-4 text-muted-foreground">
                                {review.title}
                              </h4>
                              <div className="flex justify-center lg:justify-start gap-1 mb-6 text-foreground">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} size={14} fill="currentColor" />
                                ))}
                              </div>
                              <blockquote className="text-2xl lg:text-3xl italic mb-6 leading-snug text-foreground/90">
                                &quot;{review.quote}&quot;
                              </blockquote>
                              <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                                — {review.author},{" "}
                                <span className="underline text-foreground cursor-pointer decoration-border">
                                  {review.productLink}
                                </span>
                              </p>
                            </div>
                            <div className="lg:w-1/2 w-full order-1 lg:order-2">
                              <div className="relative aspect-4/3 lg:aspect-9/12 overflow-hidden rounded-sm bg-muted">
                                <Image
                                  src={review.image}
                                  alt="Review"
                                  fill
                                  sizes="(max-width: 1024px) 50vw, 50vw"
                                  className="object-cover"
                                />
                              </div>
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 lg:flex hidden border-border" />
                    <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 lg:flex hidden border-border" />
                  </Carousel>
                </div>
              </div>
            </div>
          </BlurFade>
        </section>

        {/* 6. Blog */}
        <section id="blog">
          <BlurFade inView>
            <div className="container mx-auto py-24 px-6 lg:px-24">
              <div className="text-center mb-16">
                <h2 className="text-2xl md:text-3xl font-medium uppercase tracking-widest text-foreground">
                  {data.promos.title}
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                {data.promos.items.map((card: any, i: any) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="relative aspect-16/12 overflow-hidden mb-8 rounded-sm bg-muted">
                      <Image
                        src={card.img}
                        alt={card.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-top group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="text-left">
                      <h4 className="text-2xl font-light mb-3 text-foreground">
                        {card.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-6 leading-relaxed line-clamp-2">
                        {card.desc}
                      </p>
                      <Link
                        href="#"
                        className="text-[11px] font-bold uppercase tracking-widest border-b border-foreground pb-1 hover:opacity-60 transition-opacity"
                      >
                        {card.btn}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>
        </section>

        {/* 7. Cam kết */}
        <section id="cam-ket">
          <BlurFade inView>
            <div className="border-t border-border py-20 bg-background">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-2xl md:text-3xl font-medium uppercase tracking-widest text-foreground">
                    Cam kết của chúng tôi
                  </h2>
                  <div className="w-10 h-px bg-foreground mx-auto mt-4 opacity-20"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 text-center">
                  {data.valueProps.items.map((item: any, idx: any) => {
                    const IconComponent = ICON_MAP[item.iconType];
                    return (
                      <div
                        key={idx}
                        className="flex flex-col items-center group"
                      >
                        <div className="mb-6 transform transition-transform duration-300 group-hover:-translate-y-1">
                          {IconComponent && (
                            <IconComponent
                              strokeWidth={1}
                              className="w-10 h-10 text-foreground opacity-80"
                            />
                          )}
                        </div>
                        <h4 className="font-bold text-[11px] uppercase tracking-[0.2em] mb-3 text-foreground">
                          {item.title}
                        </h4>
                        <p className="text-[12px] text-muted-foreground leading-relaxed max-w-60 mx-auto">
                          {item.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </BlurFade>
        </section>

        {/* 8. Về chúng tôi */}
        <section
          id="ve-chung-toi"
          className="border-t border-border py-20 bg-secondary/20"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-medium uppercase tracking-widest mb-6 text-foreground">
                {data.about.sectionTitle}
              </h2>
              <h3 className="text-xl italic text-foreground/80 mb-2">
                {data.about.title}
              </h3>
              <p className="text-[10px] md:text-[11px] uppercase tracking-widest font-bold text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed px-4">
                {data.about.story}
              </p>
              <p className="text-[10px] uppercase tracking-widest font-bold underline underline-offset-4 text-muted-foreground italic">
                — {data.about.founderName}
              </p>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mt-12">
              {data.about.images.map((i: any, index: any) => (
                <BlurFade
                  key={i.src + "-" + index}
                  delay={0.05 + index * 0.05}
                  inView
                >
                  <div
                    key={index}
                    className="relative aspect-square overflow-hidden group cursor-pointer rounded-sm bg-muted"
                  >
                    <Image
                      src={i}
                      alt={`Social ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 33vw, 16vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-300" />
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;
