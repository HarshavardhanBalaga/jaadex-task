export default function Button({
    children,
    className = "",
    ...props
}) {
    return (
        <button
            {...props}
            className={`
                relative
                inline-flex
                items-center
                justify-center
                overflow-hidden
                border
                border-[var(--border)]
                px-8
                py-4
                font-['Host_Grotesk']
                text-sm
                uppercase
                tracking-[0.25em]
                text-[var(--text)]
                group
                ${className}
            `}
        >
            <span
                className="
                    absolute
                    inset-0
                    origin-left
                    scale-x-0
                    bg-orange-200
                    transition-transform
                    duration-500
                    ease-out
                    group-hover:scale-x-100
                "
            />

            <span
                className="
                    relative
                    z-10
                    transition-colors
                    duration-500
                    group-hover:text-black
                "
            >
                {children}
            </span>
        </button>
    );
}