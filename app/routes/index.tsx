import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0">
              <img
                className="object-cover w-full h-full"
                src="img/acidcore-cover.jpg"
                alt="Illatos 23 Davoria"
              />
              <div className="absolute inset-0 bg-[color:rgba(254,204,27,0.5)] mix-blend-multiply" />
            </div>
            <div className="relative px-4 pt-16 pb-8 lg:pb-18 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pt-32">
              <h1 className="text-6xl font-extrabold tracking-tight text-center sm:text-8xl lg:text-9xl">
                <span className="block text-yellow-500 uppercase drop-shadow-md">
                  Path23 Kft
                </span>
              </h1>
              <p className="max-w-lg mx-auto mt-6 text-xl text-center text-white sm:max-w-3xl">
                Adószám: 25766367-2-13 Cégjegyzékszám: Cg.01-09-287970
              </p>
              <p className="max-w-lg mx-auto mt-6 text-xl text-center text-white sm:max-w-3xl">
                Székhely: 2628 - Szob, Zilahy Lajos utca 5.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
