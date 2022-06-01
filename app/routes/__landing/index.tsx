export default function Index() {
  return (
    <main className="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center md:mr-4 lg:text-left">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Web Consultancy</span>{" "}
          <span className="block text-indigo-600 xl:inline">since 2016</span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
          We aim to build websites with the best technology stack currently
          available: <br />
          React/Remix with SSR
          <br />
          Tailwind CSS for styling
          <br />
          Fly.io or Netlify for deploys
          <br />
          Nest.js for APIs
          <br />
          Shopify or Vendure.js for E-commerce
          <br />
        </p>
      </div>
    </main>
  );
}
