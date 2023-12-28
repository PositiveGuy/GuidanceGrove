const CallToActionSection = () => {
  return (
    <div id="cta" className={`h-screen flex items-center justify-center ${theme === "light" ? " bg-sage" : "bg-gray-700"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap -mx-4 items-center">
          <div className="text-left lg:w-1/2 px-4 mb-4 lg:mb-0">
            <h2 className="text-5xl font-bold">Payments tool for software companies</h2>
            <p className="mt-2 text-lg">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
              Get started ➤
            </button>
          </div>
          <div className="lg:w-1/2 px-4 flex justify-center lg:justify-end">
            <img src="DALLE/career.png" alt="Software Payment Tool" className="object-contain lg:object-cover h-80 w-full lg:w-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionSection;
