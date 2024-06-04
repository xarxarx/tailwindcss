/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"]
    },
    colors: {
      pros: "#7A9D8C"
    },
    dropShadow: {
      "text-box": "0px 4px 12px rgba(0, 0, 0, 0.2)",
      "text-box-lg": "0px 4px 33px rgba(0, 0, 0, 0.3)"
    },
    backgroundImage: {
      "text-box": "linear-gradient(42.46deg, #ABA8BF 0%, #F5E9F3 40%)",
      "text-box-lg": "linear-gradient(42.46deg, #ABA8BF 0%, #F5E9F3 80%)"
    },
    aspectRatio: {
      image: "739/480"
    }
  }
}