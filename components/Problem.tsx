export default function Problem() {
  return (
    <section className="px-8 py-20 text-center bg-white">
      <h2 className="text-4xl font-bold text-gray-900">
        The Problem We Are Solving
      </h2>

      <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
        Millions of meals are wasted every day while millions of people
        struggle with hunger. Restaurants, hotels, messes, and events often
        have surplus food, but there is no fast and reliable way to connect it
        with people who need it.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border p-6">
          <h3 className="text-2xl font-bold text-green-600">Food Waste</h3>
          <p className="mt-3 text-gray-600">
            Tons of edible food are discarded daily.
          </p>
        </div>

        <div className="rounded-xl border p-6">
          <h3 className="text-2xl font-bold text-green-600">Hunger</h3>
          <p className="mt-3 text-gray-600">
            Many people still struggle to access meals.
          </p>
        </div>

        <div className="rounded-xl border p-6">
          <h3 className="text-2xl font-bold text-green-600">Gap</h3>
          <p className="mt-3 text-gray-600">
            There is no simple bridge between donors and recipients.
          </p>
        </div>
      </div>
    </section>
  );
}