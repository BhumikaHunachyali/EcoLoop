export default function Impact() {
  return (
    <section className="px-8 py-20 text-center bg-white">
      <h2 className="text-4xl font-bold text-gray-900">
        Our Vision
      </h2>

      <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
        EcoLoop aims to reduce food waste and connect surplus food
        with people who need it most.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">

        <div className="rounded-xl border p-8">
          <h3 className="text-4xl font-bold text-green-600">10K+</h3>
          <p className="mt-2 text-gray-600">
            Meals Saved
          </p>
        </div>

        <div className="rounded-xl border p-8">
          <h3 className="text-4xl font-bold text-green-600">500+</h3>
          <p className="mt-2 text-gray-600">
            NGOs Connected
          </p>
        </div>

        <div className="rounded-xl border p-8">
          <h3 className="text-4xl font-bold text-green-600">50+</h3>
          <p className="mt-2 text-gray-600">
            Cities Reached
          </p>
        </div>

      </div>
    </section>
  );
}