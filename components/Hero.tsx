'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { HeroSection, HeroStats } from '@/lib/strapi/types';
import { richTextToPlain } from '@/lib/strapi/utils';
import Link from 'next/link';

const STAT_LABELS: Record<keyof HeroStats, string> = {
    assets: 'Active Assets',
    financing_totals: 'Total Financing',
    geographic_reach: 'Geographic Reach',
    processing_volume: 'Processing Volume',
    energy_consumption: 'Energy Consumption',
    community_engagement: 'Community Engagement',
};

interface HeroProps {
    data?: HeroSection | null;
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? '';

function mediaUrl(path: string | undefined): string | undefined {
    if (!path) return undefined;
    if (path.startsWith('http')) return path;
    return `${BASE_URL}${path}`;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
    const title = richTextToPlain(data?.title);
    const eyebrow = data?.eyebrow;
    const subtitle = richTextToPlain(data?.subtitle);
    const ctaURL = data?.primaryButtonUrl ?? '/contact';
    const ctaLabel = data?.primaryButtonLabel ?? null;
    const { scrollY } = useScroll();
    const videoRef = useRef<HTMLVideoElement>(null);

    const bgY = useTransform(scrollY, [0, 1000], [0, 300]);
    const titleY = useTransform(scrollY, [0, 500], [0, -200]);
    const titleOpacity = useTransform(scrollY, [0, 400], [1, 0]);
    const subContentY = useTransform(scrollY, [0, 500], [0, -100]);
    const subContentOpacity = useTransform(scrollY, [0, 450], [1, 0]);

    // video_poster field in CMS holds the mp4; video field holds the bg image (poster)
    const videoSrc = mediaUrl(data?.video_poster?.url);
    const posterSrc = mediaUrl(data?.video?.url);

    const stats = data?.stats
        ? (Object.entries(data.stats) as [keyof HeroStats, string | undefined][])
              .filter(([, v]) => v)
              .slice(0, 2)
        : [];

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.muted = true;
            video.play().catch((err) => {
                console.warn('Autoplay prevented:', err);
            });
        }
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden font-sans bg-ag-green-950 snap-start">

            {/* Background Visual */}
            <div className="absolute inset-0 z-0">
                <motion.div style={{ y: bgY }} className="absolute inset-0 w-full h-[130vh]">
                    <video
                        ref={videoRef}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="object-cover w-full h-full absolute inset-0 -z-10"
                        poster={posterSrc}
                        src={videoSrc}
                    />
                </motion.div>

                <div className="absolute inset-0 bg-black/50 z-0" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ag-green-950/20 to-ag-green-950 z-0" />
                <div className="absolute inset-0 bg-radial-gradient from-transparent to-ag-green-950/60 opacity-60 z-0" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-6 pt-32 pb-12 flex flex-col justify-between">

                <div className="flex-1 flex items-center">
                    <div className="max-w-3xl">
                        <motion.h1
                            style={{ y: titleY, opacity: titleOpacity }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[clamp(3.5rem,8vw,5rem)] leading-[1.05] font-bold text-white tracking-tight drop-shadow-lg will-change-transform"
                        >
                            {title} <span className="text-ag-lime">{eyebrow}.</span>
                        </motion.h1>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-end gap-12 border-t border-white/10 pt-8">

                    <motion.div
                        style={{ y: subContentY, opacity: subContentOpacity }}
                        className="max-w-md will-change-transform"
                    >
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-lg text-white/90 font-light leading-relaxed mb-8 drop-shadow-md"
                        >
                            {subtitle}
                        </motion.p>

                        <Link href={ctaURL}>
                            <motion.button
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.7, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="group bg-white hover:bg-ag-lime text-ag-green-950 hover:text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-ag-lime/20"
                            >
                                {ctaLabel}
                                <div className="w-8 h-8 bg-ag-green-950 group-hover:bg-white rounded-full flex items-center justify-center transition-colors">
                                    <ArrowUpRight className="w-4 h-4 text-white group-hover:text-ag-green-950" />
                                </div>
                            </motion.button>
                        </Link>
                    </motion.div>

                    {stats.length > 0 && (
                        <div className="flex gap-12 md:gap-16">
                            {stats.map(([key, value], i) => (
                                <motion.div
                                    key={key}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 + i * 0.1 }}
                                >
                                    <div className="text-5xl md:text-6xl font-bold text-white mb-2 font-sans tabular-nums drop-shadow-md">
                                        {value}
                                    </div>
                                    <div className="text-xs font-bold text-ag-lime uppercase tracking-widest drop-shadow-sm">
                                        {STAT_LABELS[key]}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full flex items-center justify-center z-40">
                <div className="h-px w-full max-w-[95%] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
        </section>
    );
};

export default Hero;
