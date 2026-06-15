export default function Navbar() { //creates a component called navbar with the following information within the function navbar which will be used in the home page of the website to show the navigation bar on the top of the website
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-200 bg-white"> {/* Creates a navigation bar with flexbox layout, padding, border, and background color */}
      
      {/* Logo */}
      <h1 className="text-2xl font-bold text-green-600"> {/* Displays the logo of the website with specific font size, weight, and color */}
        EcoLoop {/* className is attribute analog to class in html which have the styling information(css) for the element */}
      </h1>

      {/* Navigation Links */}
      <div className="flex gap-6"> {/* Creates a flex container for navigation links with a gap between them horizontal arrangement */}
        <a
          className="text-gray-700 hover:text-green-600 transition"
        >
          About
        </a>  {/* Creates a link for the "About" section..achor tag creates links*/}

        <a
          href="#how-it-works"
          className="text-gray-700 hover:text-green-600 transition"
        >
          How It Works
        </a>

        <a
          href="#impact"
          className="text-gray-700 hover:text-green-600 transition"
        >
          Impact
        </a>
      </div>

      {/* Donate Button */} 
      <button className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700 transition"> {/* Creates a button so use button attribute */}
        Donate Food
      </button>
    </nav>
  );
}