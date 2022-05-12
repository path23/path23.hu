import { Outlet } from "@remix-run/react";
import { Footer } from "~/components/footer";
import { Navigation } from "~/components/navigation";

export default function LandingLayout() {
  return (
    <>
      <div className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl">
          <div
            className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32"
            style={{ minHeight: "calc(100vh - 152px)" }}
          >
            <svg
              className="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <Navigation />
            <Outlet />
          </div>
        </div>
        <div className="hidden max-h-full lg:absolute lg:inset-y-0 lg:right-0 lg:block lg:w-1/2">
          <div className="object-cover w-full h-56 bg-gradient-to-br from-indigo-600 to-sky-400 sm:h-72 md:h-96 lg:h-full lg:w-full"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
