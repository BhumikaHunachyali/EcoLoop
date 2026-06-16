export default function Hero() { //creates a component called hero with the following information within the function hero which will be used in the home page of the website to show the header section of the website 
  return (
    <section className="flex flex-col items-center justify-center px-8 py-24 text-center">
      
      <h1 className="max-w-4xl text-5xl font-bold text-white-900">
        Every Meal Deserves a Second Chance.
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-gray-600">
        EcoLoop connects restaurants, messes, hotels, and event organizers
        with NGOs and volunteers to ensure surplus food reaches people who need it.
      </p>

      <button className="mt-8 rounded-lg bg-green-600 px-6 py-3 text-white hover:bg-green-700 transition">
        Donate Food
      </button>

    </section>
  );
}