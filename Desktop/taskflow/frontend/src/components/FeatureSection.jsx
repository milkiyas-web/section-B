import React from "react";
import { useId } from "react";

export function FeaturesSectionDemo() {
    return (
        <div className="py-20 lg:py-40 text-white bg-black">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-2 max-w-7xl mx-auto">
                {grid.map((feature) => (
                    <div
                        key={feature.title}
                        className="relative bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 rounded-3xl overflow-hidden"
                    >
                        <Grid size={20} />
                        <p className="text-base font-bold text-white relative z-20">
                            {feature.title}
                        </p>
                        <p className="text-neutral-400 mt-4 text-base font-normal relative z-20">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

const grid = [
    {
        title: "AI-Powered Insights",
        description:
            "Leverage cutting-edge AI algorithms to gain deep insights into your data and make informed decisions.",
    },
    {
        title: "Real-time Collaboration",
        description:
            "Work seamlessly with your team in real-time, enhancing productivity and fostering innovation.",
    },
    {
        title: "Advanced Visualization",
        description:
            "Transform complex data into intuitive, interactive visualizations for better understanding and presentation.",
    },
    {
        title: "Customizable Dashboards",
        description:
            "Create personalized dashboards tailored to your specific needs and KPIs for at-a-glance information.",
    },
    {
        title: "Secure Data Integration",
        description:
            "Safely connect and integrate data from multiple sources with our robust security protocols.",
    },
    {
        title: "Predictive Analytics",
        description:
            "Harness the power of machine learning to forecast trends and make data-driven predictions.",
    },
    {
        title: "Automated Reporting",
        description:
            "Generate comprehensive reports automatically, saving time and ensuring consistent data communication.",
    },
    {
        title: "Scalable Architecture",
        description:
            "Our platform grows with your business, easily handling increasing data volumes and user demands.",
    },
];

export const Grid = ({
    pattern,
    size
}) => {
    const p = pattern ?? [
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    ];
    return (
        (<div
            className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
            <div
                className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] from-zinc-900/30 to-zinc-900/30 opacity-100">
                <GridPattern
                    width={size ?? 20}
                    height={size ?? 20}
                    x="-12"
                    y="4"
                    squares={p}
                    className="absolute inset-0 h-full w-full  mix-blend-overlay  stroke-black/10 fill-black/10" />
            </div>
        </div>)
    );
};

export function GridPattern({
    width,
    height,
    x,
    y,
    squares,
    ...props
}) {
    const patternId = useId();

    return (
        (<svg aria-hidden="true" {...props}>
            <defs>
                <pattern
                    id={patternId}
                    width={width}
                    height={height}
                    patternUnits="userSpaceOnUse"
                    x={x}
                    y={y}>
                    <path d={`M.5 ${height}V.5H${width}`} fill="none" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
            {squares && (
                <svg x={x} y={y} className="overflow-visible">
                    {squares.map(([x, y]) => (
                        <rect
                            strokeWidth="0"
                            key={`${x}-${y}`}
                            width={width + 1}
                            height={height + 1}
                            x={x * width}
                            y={y * height} />
                    ))}
                </svg>
            )}
        </svg>)
    );
}
