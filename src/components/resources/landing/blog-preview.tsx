"use client";

import { posts } from "@/utils/landing-helper";
import { BlogCard } from "./blog-card";
import { useEffect, useRef } from "react";
import anime from "@/lib/anime";
import { useTranslations } from "next-intl";

export function BlogPreview() {
  const t = useTranslations();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tl = anime.timeline();

            if (titleRef.current) {
              tl.add(titleRef.current, {
                opacity: [0, 1],
                translateY: [-30, 0],
                duration: 800,
                easing: "out-expo",
              });
            }

            if (descRef.current) {
              tl.add(
                descRef.current,
                {
                  opacity: [0, 1],
                  translateY: [-20, 0],
                  duration: 600,
                  easing: "out-expo",
                },
                "-=400"
              );
            }

            if (cardsRef.current?.children) {
              tl.add(
                cardsRef.current.children,
                {
                  opacity: [0, 1],
                  translateX: [-50, 0],
                  delay: anime.stagger(150),
                  duration: 800,
                  easing: "out-expo",
                },
                "-=200"
              );
            }

            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("blog");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="blog" className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2
            ref={titleRef}
            className="text-foreground mb-4 text-3xl font-bold opacity-0 md:text-4xl"
          >
            {t("blog.title")}
          </h2>
          <p ref={descRef} className="text-muted-foreground mx-auto max-w-2xl text-xl opacity-0">
            {t("blog.description")}
          </p>
        </div>
        <div ref={cardsRef} className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
