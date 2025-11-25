// Server Component: builds the project page from the config in data/project.ts.
// Keep layout/structure here; swap copy/assets in data/project.ts instead of editing markup.
import Link from "next/link";
import ImageSlider from "@/components/ImageSlider";
import OtherModelSlider from "@/components/OtherModelSlider";
import MetricsTable from "@/components/MetricsTable";
import {projectData} from "@/data/project";

export const metadata = {
    title: projectData.meta.title,
    description: projectData.meta.description,
};

type View = "original" | "edges" | "segmentation" | "histogram" | "artist" | "output";

export default function ProjectTemplatePage() {
    // Unpack all content/copy/assets from a single config object.
    // Edit data/project.ts instead of this layout when customizing.
    const {
        meta,
        authors,
        affiliations,
        links,
        assets,
        introduction,
        contributions,
        methodCards,
        descriptorExplainer,
        otherModelOptions,
        metricsTable,
        bibtex,
        experimentNote,
    } = projectData;

    const experimentImages: Record<View, string> = {
        original: assets.descriptorExample.original,
        edges: assets.descriptorExample.edges,
        segmentation: assets.descriptorExample.segmentation,
        histogram: assets.descriptorExample.histogram,
        artist: assets.descriptorExample.artist,
        output: assets.descriptorExample.output,
    };

    return (
        <>
            {/* HERO: title + authors + primary links */}
            <header id="home" className="relative w-full overflow-hidden">
                <img
                    src={assets.heroBg}
                    alt="Hero background"
                    className="w-full h-80 object-cover"
                />
                <div
                    className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white text-center px-4">
                    <h1 className="text-3xl sm:text-5xl font-bold mb-3">{meta.title}</h1>
                    <h2 className="text-lg sm:text-2xl max-w-3xl">{meta.tagline}</h2>
                    <p className="mt-3 text-sm sm:text-base font-medium">
                        {authors.map((a, idx) => (
                            <span key={a.name}>
                {a.link ? (
                    <a href={a.link} target="_blank" className="hover:underline">
                        {a.name}
                    </a>
                ) : (
                    a.name
                )}
                                <sup>{a.affiliations.join(",")}</sup>
                                {idx < authors.length - 1 && " · "}
              </span>
                        ))}
                    </p>
                    <p className="text-xs sm:text-sm">
                        {affiliations.map((aff, idx) => (
                            <span key={aff.id}>
                <sup>{aff.id}</sup>{" "}
                                {aff.url ? (
                                    <a
                                        href={aff.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="underline hover:underline"
                                    >
                                        {aff.name}
                                    </a>
                                ) : (
                                    aff.name
                                )}
                                {idx < affiliations.length - 1 && " · "}
              </span>
                        ))}
                    </p>
                    <p className="text-xs sm:text-sm mt-1">{meta.conference}</p>
                    <blockquote className="mt-4 italic text-sm sm:text-base">{meta.quote}</blockquote>
                    <div className="mt-4 flex flex-wrap justify-center gap-3">
                        {links.paperPdf && (
                            <a
                                href={links.paperPdf}
                                target="_blank"
                                className="rounded-full bg-white/95 px-4 py-1.5 text-sm font-semibold text-gray-900 hover:bg-white"
                            >
                                📄 Paper (PDF)
                            </a>
                        )}
                        {links.suppPdf && (
                            <a
                                href={links.suppPdf}
                                target="_blank"
                                className="rounded-full bg-white/95 px-4 py-1.5 text-sm font-semibold text-gray-900 hover:bg-white"
                            >
                                📄 Supp (PDF)
                            </a>
                        )}
                        {links.arXiv && (
                            <a
                                href={links.arXiv}
                                target="_blank"
                                className="rounded-full bg-white/95 px-4 py-1.5 text-sm font-semibold text-gray-900 hover:bg-white"
                            >
                                📚 arXiv
                            </a>
                        )}
                        {links.code && (
                            <a
                                href={links.code}
                                target="_blank"
                                className="rounded-full bg-white/80 px-4 py-1.5 text-sm font-semibold text-gray-900 hover:bg-white"
                            >
                                💻 Code
                            </a>
                        )}
                        {links.models && (
                            <a
                                href={links.models}
                                target="_blank"
                                className="rounded-full bg-white/80 px-4 py-1.5 text-sm font-semibold text-gray-900 hover:bg-white"
                            >
                                🤗 Models
                            </a>
                        )}
                        {links.posterSection && (
                            <a
                                href={links.posterSection}
                                className="rounded-full bg-white/80 px-4 py-1.5 text-sm font-semibold text-gray-900 hover:bg-white"
                            >
                                🖼️ Poster
                            </a>
                        )}
                    </div>
                </div>
            </header>

            <section id="presentation" className="bg-gray-50/70">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 text-gray-800">
                    <h3 className="text-2xl font-semibold mb-4 text-center">Presentation / Teaser</h3>
                    <video
                        controls
                        preload="metadata"
                        className="w-full rounded-2xl shadow-lg border border-gray-200"
                    >
                        <source src={assets.presentationVideo} type="video/mp4"/>
                        Your browser does not support embedded videos.{" "}
                        <a href={assets.presentationVideo} className="underline">
                            Download the presentation instead.
                        </a>
                    </video>
                </div>
            </section>

            {/* BODY: intro → contributions → method → core demo → applications → poster → bibtex */}
            <main className="mx-auto max-w-5xl py-10 px-4 sm:px-6 lg:px-8 text-gray-800">
                {/* Introduction */}
                <section id="introduction" className="mb-12">
                    <h3 className="text-2xl font-semibold mb-4">Introduction</h3>
                    <p className="mb-4">{introduction}</p>
                </section>

                {/* Key Contributions */}
                <section id="contributions" className="mb-12">
                    <h3 className="text-2xl font-semibold mb-4">Key Contributions</h3>
                    <ul className="list-disc list-inside space-y-2">
                        {contributions.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </section>

                {/* Method Overview */}
                <section id="method" className="mb-12">
                    <h3 className="text-2xl font-semibold mb-4">Method at a Glance</h3>
                    <img src={assets.framework} alt="Framework overview" className="w-full rounded-xl mb-6"/>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {methodCards.map((card) => (
                            <div key={card.title} className="rounded-2xl border p-4 bg-white/60 shadow-sm">
                                <h4 className="font-semibold mb-2">{card.title}</h4>
                                <p className="text-sm">{card.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="experiments" className="mb-12">
                    <h3 className="text-2xl font-semibold mb-4">Core Demo</h3>
                    <p className="mb-4 text-sm">{descriptorExplainer}</p>
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                        <figure className="rounded-xl border p-2 md:w-1/3">
                            <img src={experimentImages.original} alt="Input sample"
                                 className="w-full object-cover rounded-lg"/>
                            <figcaption className="mt-2 text-center text-xs">Input sample</figcaption>
                        </figure>
                        <figure className="rounded-xl border p-2 md:w-1/3 flex flex-col items-center">
                            <div className="grid grid-cols-2 gap-2 w-full">
                                <img src={experimentImages.edges} alt="Input A"
                                     className="w-full object-cover rounded-lg"/>
                                <img
                                    src={experimentImages.segmentation}
                                    alt="Input B"
                                    className="w-full object-cover rounded-lg"
                                />
                                <img
                                    src={experimentImages.histogram}
                                    alt="Input C"
                                    className="pt-10 w-full object-cover rounded-lg col-span-2"
                                />
                            </div>
                            <figcaption className="mt-2 text-center text-xs">Inputs / controls</figcaption>
                        </figure>
                        <figure className="rounded-xl border p-2 md:w-1/3">
                            <img src={experimentImages.artist} alt="Optional reference"
                                 className="w-full object-cover rounded-lg"/>
                            <figcaption className="mt-2 text-center text-xs">Optional reference</figcaption>
                        </figure>
                        <figure className="rounded-xl border p-2 md:w-1/3">
                            <img src={experimentImages.output} alt="Model output"
                                 className="w-full object-cover rounded-lg"/>
                            <figcaption className="mt-2 text-center text-xs">Model Output</figcaption>
                        </figure>
                    </div>
                    <p className="mt-2 text-xs text-center text-gray-500">{experimentNote}</p>
                </section>

                <section id="applications" className="mb-12">
                    <h3 className="text-2xl font-semibold mb-4">Applications</h3>
                    <p className="mb-4 text-sm">
                        Use this space to demonstrate how your representation plugs into downstream tasks (restoration,
                        editing,
                        generation, alignment). Swap the assets and copy to match your use cases.
                    </p>

                    <div className="rounded-2xl border p-4 mb-8 bg-white/60 shadow-sm">
                        <h4 className="font-semibold mb-2">A. Task A: Qualitative + Metrics</h4>
                        <p className="text-sm mb-3">
                            Show inputs, your output, and a few baselines. Add PSNR/SSIM/LPIPS or task-specific metrics
                            below.
                        </p>
                        <figure className="mx-auto rounded-xl border p-2 md:w-1/3 flex flex-col items-center">
                            <img
                                src={assets.appAssets.restorationCond}
                                alt="Condition inputs"
                                className="w-full object-cover rounded-lg"
                            />
                            <figcaption className="mt-2 text-center text-xs">Inputs / controls</figcaption>
                        </figure>
                        <OtherModelSlider
                            options={otherModelOptions}
                            ours={assets.appAssets.restorationOurs}
                            gt={assets.appAssets.restorationGT}
                        />
                        <MetricsTable
                            title="Image restoration results."
                            columns={metricsTable.columns}
                            rows={metricsTable.rows}
                            note={metricsTable.note}
                            buttonLabel="Show metrics table"
                        />
                    </div>
                </section>

                <section id="poster" className="mb-12">
                    <h3 className="text-2xl font-semibold mb-4">Poster</h3>
                    <div className="mx-auto max-w-3xl">
                        <div className="relative w-full rounded-2xl border overflow-hidden"
                             style={{aspectRatio: "841 / 1189"}}>
                            <iframe src={links.posterPdf} title="Project poster"
                                    className="absolute inset-0 h-full w-full"/>
                        </div>
                    </div>
                </section>

                <section id="bibtex" className="mb-12">
                    <h3 className="text-2xl font-semibold mb-4">BibTeX</h3>
                    <pre id="bibtex" className="bg-gray-50 p-3 rounded-lg overflow-x-auto text-xs">{bibtex}</pre>
                </section>

                <footer className="border-t pt-6 text-center text-sm text-gray-500">
                    <p className="mb-2">
                        Want this template? Visit{" "}
                        <a href="https://github.com/HenryQUQ/NextJS-Project-Page" className="underline">
                            https://github.com/HenryQUQ/NextJS-Project-Page
                        </a>{" "}
                        and see the demo at{" "}
                        <a href="https://chenyuanqu.com/NextJS-Project-Page" className="underline">
                            https://chenyuanqu.com/NextJS-Project-Page
                        </a>.
                    </p>
                    <p>
                        &copy; {new Date().getFullYear()} — Replace with your group name. This page is a template;
                        update assets and
                        links before release.
                    </p>
                    <p className="mt-2">
                        Contact:{" "}
                        {authors
                            .map((a) => (a.email ? `${a.name} <${a.email}>` : a.name))
                            .join(" · ")}
                    </p>
                </footer>
            </main>
        </>
    );
}
