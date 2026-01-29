function Home() {
  return (
    <>
      <section className="pt-16 w-full h-screen bg-[url('/coffee.jpg')] bg-cover bg-center flex items-center justify-center">
        <h2 className="text-white text-4xl md:text-6xl font-bold bg-black/50 px-6 py-3 rounded-lg">
          Your daily dose of coffee
        </h2>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Welcome to Coffee Cafe
        </h1>

        <p className="text-gray-600 text-lg mb-10">
          Discover our premium selection of coffee because we believe in the
          perfect blend of flavor and aroma.
        </p>

        <div className="h-40 bg-amber-100 rounded-xl"></div>
      </section>
    </>
  );
}

export default Home;
