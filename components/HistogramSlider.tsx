'use client';

import { useState } from "react";

interface HistogramOption {
  label: string;
  histSrc: string;
  oursSrc: string;
}

interface HistogramSliderProps {
  before: string;
  options: HistogramOption[];
}

export default function HistogramSlider({ before, options }: HistogramSliderProps) {
  const [index, setIndex] = useState(0); // slide between control variants
  return (
    <div className="rounded-xl border p-3 shadow-sm bg-white/60">
      <div className="grid grid-cols-2 gap-3 mb-4 items-stretch">
        <div className="rounded-xl border flex flex-col gap-3 bg-white">
          <figure className="p-3 flex flex-1 flex-col items-center justify-center text-center">
            <img
              src={before}
              alt="Control (before)"
              className="rounded-lg max-h-48 w-full object-contain"
            />
            <figcaption className="mt-2 text-xs text-gray-600">Control (before)</figcaption>
          </figure>
          <figure className="p-3 flex flex-1 flex-col items-center justify-center text-center">
            <img
              src={options[index].histSrc}
              alt="Control (after)"
              className="rounded-lg max-h-48 w-full object-contain"
            />
            <figcaption className="mt-2 text-xs text-gray-600">Control (after)</figcaption>
          </figure>
        </div>
        <figure className="rounded-xl border p-3 flex flex-col items-center justify-center text-center bg-white">
          <img
            src={options[index].oursSrc}
            alt="Output preview"
            className="rounded-lg max-h-60 w-full object-contain"
          />
          <figcaption className="mt-2 text-xs text-gray-600">Output</figcaption>
        </figure>
      </div>
      <input
        type="range"
        min={0}
        max={options.length - 1}
        step={1}
        value={index}
        onChange={(e) => setIndex(parseInt(e.target.value))}
        className="w-full"
      />
      <div className="relative mt-2 h-6 text-xs text-gray-700">
        {options.map((opt, i) => {
          const percent = options.length > 1 ? (i / (options.length - 1)) * 100 : 0;
          const translate =
            i === 0 ? "translateX(0%)" : i === options.length - 1 ? "translateX(-100%)" : "translateX(-50%)";
          const alignment = i === 0 ? "text-left" : i === options.length - 1 ? "text-right" : "text-center";
          return (
            <span
              key={opt.label}
              className={`${i === index ? "font-semibold" : ""} ${alignment} absolute top-0 whitespace-nowrap`}
              style={{ left: `${percent}%`, transform: translate }}
            >
              {opt.label}
            </span>
          );
        })}
      </div>
    </div>
  );
}
