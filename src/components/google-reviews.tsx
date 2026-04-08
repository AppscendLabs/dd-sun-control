"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface Review {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
}

interface ReviewsData {
  rating: number;
  total: number;
  reviews: Review[];
}

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/?q=place_id:ChIJacjQr4i-0ocRGcGKv2tiWSs";

function StarRating({ rating, size = "sm" }: { rating: number; size?: "sm" | "lg" }) {
  const cls = size === "lg" ? "h-6 w-6" : "h-5 w-5";
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`${cls} ${star <= rating ? "text-yellow-400" : "text-slate-600"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const GoogleIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

export function GoogleReviews() {
  const [data, setData] = useState<ReviewsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/reviews")
      .then((r) => r.json())
      .then((d) => {
        if (d.reviews && d.reviews.length > 0) setData(d);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (!loading && !data) return null;

  const reviews = data?.reviews.slice(0, 3) ?? [];

  return (
    <section className="bg-slate-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header — matches site pattern */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 flex items-center justify-center gap-3"
          >
            <StarRating rating={5} size="lg" />
            {data?.rating && (
              <span className="text-xl font-bold text-yellow-400">
                {data.rating.toFixed(1)} on Google
              </span>
            )}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl"
          >
            What Our Customers Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400"
          >
            {data?.total
              ? `${data.total} verified reviews from our Google Business page`
              : "Don't just take our word for it"}
          </motion.p>
        </div>

        {/* Loading skeleton — matches card sizing */}
        {loading && (
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="animate-pulse rounded-2xl bg-slate-800 p-8">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <div key={j} className="h-5 w-5 rounded bg-slate-700" />
                  ))}
                </div>
                <div className="mb-6 space-y-3">
                  <div className="h-3 w-full rounded bg-slate-700" />
                  <div className="h-3 w-5/6 rounded bg-slate-700" />
                  <div className="h-3 w-4/6 rounded bg-slate-700" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="h-3 w-1/3 rounded bg-slate-700" />
                  <div className="h-3 w-1/4 rounded bg-slate-700" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Review cards — matches site card style */}
        {!loading && reviews.length > 0 && (
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col rounded-2xl bg-slate-800 p-8"
              >
                <div className="mb-4">
                  <StarRating rating={review.rating} />
                </div>
                <p className="mb-6 flex-1 italic text-slate-300">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between border-t border-slate-700 pt-4">
                  <div>
                    <p className="font-semibold text-white">{review.author_name}</p>
                    <p className="text-sm text-slate-500">{review.relative_time_description}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <GoogleIcon />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* CTA — matches site button style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
          >
            <span>See All Reviews on Google</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
