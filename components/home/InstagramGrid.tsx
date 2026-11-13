"use client";

import React from "react";
import Image from "next/image";
import { Instagram, Heart, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function InstagramGrid() {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 bg-studio-dark text-studio-ivory border-t border-studio-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-studio-gold text-xs uppercase tracking-widest font-semibold mb-1">
              <Instagram className="w-4 h-4" />
              <span>{t("Live On The Gram", "इंस्टाग्राम पर फॉलो करें")}</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-studio-ivory">
              {siteConfig.contact.instagramHandle}
            </h2>
          </div>

          <a
            href={siteConfig.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-studio-gold/40 hover:bg-studio-gold/15 text-studio-cream text-xs font-semibold uppercase tracking-wider transition-all self-start sm:self-auto"
          >
            <Instagram className="w-4 h-4 text-studio-gold" />
            <span>{t("Follow On Instagram", "इंस्टाग्राम पर जुड़ें")}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-studio-gold" />
          </a>
        </div>

        {/* 4 Square Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {siteConfig.instagramPosts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden bg-studio-card border border-studio-border block"
            >
              <Image
                src={post.imageUrl}
                alt={post.caption}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Hover Dark Overlay with Likes & Caption */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between backdrop-blur-[2px]">
                <div className="flex justify-end text-studio-gold">
                  <Instagram className="w-5 h-5" />
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs text-studio-cream font-medium">
                    <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" />
                    <span>{post.likes}</span>
                  </div>
                  <p className="text-[11px] text-studio-ivoryMuted line-clamp-2 leading-relaxed">
                    {post.caption}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

