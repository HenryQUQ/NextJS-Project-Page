'use client';

import { useState } from "react";

interface ModelOption {
  label: string;
  withPrompt: string;
  withoutPrompt: string;
}

interface OtherModelSliderProps {
  options: ModelOption[];
  ours: string;
  gt: string;
  title?: string;
}

export default function OtherModelSlider({
  options,
  ours,
  gt,
  title = "Baselines vs Ours",
}: OtherModelSliderProps) {
  const [index, setIndex] = useState(0); // baseline selector
  const current = options[index];
  return (
    <div className="rounded-xl border p-3 shadow-sm bg-white/60">
      <h5 className="font-medium mb-2 text-center">{title}</h5>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
        <figure className="flex flex-col">
          <img
            src={current.withoutPrompt}
            alt={`${current.label} variant 1`}
            className="w-full object-cover rounded-lg"
          />
          <figcaption className="mt-1 text-center text-xs text-gray-600">Variant 1</figcaption>
        </figure>
        <figure className="flex flex-col">
          <img
            src={current.withPrompt}
            alt={`${current.label} variant 2`}
            className="w-full object-cover rounded-lg"
          />
          <figcaption className="mt-1 text-center text-xs text-gray-600">Variant 2</figcaption>
        </figure>
        <figure className="flex flex-col">
          <img src={ours} alt="Ours" className="w-full object-cover rounded-lg" />
          <figcaption className="mt-1 text-center text-xs text-gray-600">Ours</figcaption>
        </figure>
        <figure className="flex flex-col">
          <img src={gt} alt="Ground truth" className="w-full object-cover rounded-lg" />
          <figcaption className="mt-1 text-center text-xs text-gray-600">Ground truth</figcaption>
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
