import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/appSlice";
import Button from "./Button";

const links = [
  {
    title: "Studio",
    href: "#studio",
  },
  {
    title: "Work",
    href: "#work",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

function Navbar() {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state) => state.app.menuOpen);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <nav className="flex h-20 px-6 backdrop-blur-md items-center justify-between  sm:px-8 lg:h-24 lg:px-20">

          {/* Logo */}

          <a
            href="#hero"
            className="font-['Michroma'] text-lg tracking-[0.25em] text-[var(--text)] sm:text-xl"
          >
            JAADEX
          </a>

          {/* Desktop */}

          <div className="hidden items-center gap-10 lg:flex">

            {links.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group relative font-['Host_Grotesk'] text-sm uppercase tracking-[0.2em] text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--text)]"
              >
                {item.title}

                <span
                  className="
                    absolute
                    -bottom-2
                    left-0
                    h-px
                    w-0
                    bg-[var(--metal)]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </a>
            ))}

            <Button>Let's Talk</Button>

          </div>

          {/* Mobile Button */}

          <button
            onClick={() => dispatch(toggleMenu())}
            className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label="Toggle Menu"
          >
            <span
              className={`h-0.5 w-6 bg-[var(--text)] transition-all duration-300 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`h-0.5 w-6 bg-[var(--text)] transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`h-0.5 w-6 bg-[var(--text)] transition-all duration-300 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>

        </nav>
      </header>

      {/* Mobile Menu */}

      <aside
        className={`
          fixed
          inset-0
          z-40
          bg-[var(--bg)]
          transition-all
          duration-500
          lg:hidden
          ${
            menuOpen
              ? "visible opacity-100"
              : "invisible opacity-0"
          }
        `}
      >
        <div className="flex h-full flex-col items-center justify-center gap-12">

          {links.map((item) => (
            <a
              key={item.title}
              href={item.href}
              onClick={() => dispatch(toggleMenu())}
              className="
                font-['Michroma']
                text-2xl
                uppercase
                tracking-[0.18em]
                text-[var(--text)]
              "
            >
              {item.title}
            </a>
          ))}

          <Button
            className="mt-6"
            onClick={() => dispatch(toggleMenu())}
          >
            Let's Talk
          </Button>

        </div>
      </aside>
    </>
  );
}

export default Navbar;