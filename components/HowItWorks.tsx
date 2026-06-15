export default function HowItWorks() {
  return (
    <section className="px-8 py-20 bg-green-50 text-center">
      <h2 className="text-4xl font-bold text-gray-900">
        How EcoLoop Works?
      </h2>

      <div className="mt-12 grid gap-6 md:grid-cols-3">

        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="text-2xl font-bold text-green-600">
            1. Donor Lists Food
          </h3>
          <p className="mt-3 text-gray-600">
            Restaurants, hotels, messes, and event organizers upload surplus food.
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="text-2xl font-bold text-green-600">
            2. Smart Matching
          </h3>
          <p className="mt-3 text-gray-600">
            EcoLoop identifies nearby NGOs and verified recipients.
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="text-2xl font-bold text-green-600">
            3. Food Reaches People
          </h3>
          <p className="mt-3 text-gray-600">
            Volunteers or NGOs collect and distribute the food.
          </p>
        </div>

      </div>
    </section>
  );
}