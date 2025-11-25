'use client';

import Link from "next/link";
import { useState } from "react";

interface Column {
  key: string;
  label: string;
  align?: "left" | "center" | "right";
}

interface Row {
  id?: string;
  cells: Record<string, string | number>;
  emphasize?: boolean;
}

interface MetricsTableProps {
  title: string;
  columns: Column[];
  rows: Row[];
  note?: string;
  cta?: { label: string; href: string; newTab?: boolean };
  defaultOpen?: boolean;
  buttonLabel?: string;
}

export default function MetricsTable({
  title,
  columns,
  rows,
  note,
  cta,
  defaultOpen = false,
  buttonLabel = "Show metrics table",
}: MetricsTableProps) {
  const [open, setOpen] = useState(defaultOpen); // lazy render: hide table until clicked

  if (!open) {
    return (
      <div className="mt-4">
        <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md" onClick={() => setOpen(true)}>
          {buttonLabel}
        </button>
      </div>
    );
  }

  return (
    <div className="mt-4">
      <p className="text-sm mb-2 font-medium">{title}</p>
      <div className="overflow-x-auto rounded-2xl border shadow-sm bg-white/60">
        <table className="w-full text-sm border-collapse">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="border px-3 py-2 font-semibold"
                  style={{ textAlign: col.align || "left" }}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={row.id || idx} className={row.emphasize ? "bg-gray-50" : undefined}>
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className="border px-3 py-2"
                    style={{ textAlign: col.align || "left" }}
                  >
                    {row.cells[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && <p className="text-[11px] mt-2 text-gray-500">{note}</p>}
      {cta && (
        <div className="text-right mt-4">
          <Link
            href={cta.href}
            target={cta.newTab ? "_blank" : undefined}
            rel={cta.newTab ? "noreferrer" : undefined}
            className="inline-block px-4 py-2 text-sm bg-blue-600 text-white rounded-md"
          >
            {cta.label}
          </Link>
        </div>
      )}
    </div>
  );
}
