'use client';

import { useState } from "react";

interface Option {
  label: string;
  src: string;
}

interface ImageSliderProps {
  title: string;
  description?: string;
  beforeSrc: string;
  beforeLabel?: string;
  options: Option[];
}

export default function ImageSlider({
  title,
  description,
  beforeSrc,
  beforeLabel = "Before",
  options,
}: ImageSliderProps) {
  const [index, setIndex] = useState(0); // only local UI state; safe for client component
  return (
    <div className="rounded-2xl border p-4 shadow-sm bg-white/60">
      <h4 className="font-semibold mb-2">{title}</h4>
      {description && <p className="text-sm mb-3">{description}</p>}
      <div className="grid grid-cols-2 gap-2 mb-4">
        <figure className="flex flex-col">
          <img src={beforeSrc} alt={beforeLabel} className="w-full object-cover rounded-lg" />
          <figcaption className="mt-1 text-xs text-center text-gray-600">{beforeLabel}</figcaption>
        </figure>
        <figure className="flex flex-col">
          <img
            src={options[index].src}
            alt={options[index].label}
            className="w-full object-cover rounded-lg"
          />
          <figcaption className="mt-1 text-xs text-center text-gray-600">{options[index].label}</figcaption>
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
      <div className="flex justify-between text-xs mt-1 text-gray-700">
        {options.map((opt, i) => (
          <span key={opt.label} className={i === index ? "font-semibold" : ""}>
            {opt.label}
          </span>
        ))}
      </div>
    </div>
  );
}
