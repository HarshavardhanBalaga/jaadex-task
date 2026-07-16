export default function TestimonialCard({
    rating,
    review,
    name,
    role,
}) {
    return (
        <div
            className="
                w-[360px]
                shrink-0
                border
                border-[var(--border)]
                bg-[var(--surface)]
                p-8
            "
        >
            <p className="mb-8 text-xl tracking-widest text-yellow-500">
                {"★".repeat(rating)}
            </p>

            <p className="mb-10 leading-8 text-[var(--text-secondary)]">
                "{review}"
            </p>

            <div>
                <p className="font-medium text-blue-700/60">
                    {name}
                </p>

                <p className="mt-1 text-sm uppercase tracking-[0.18em] text-[var(--metal-dark)]">
                    {role}
                </p>
            </div>
        </div>
    );
}