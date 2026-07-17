export default function CallToAction() {
  return (
    <div className="bg-gradient-to-b from-white to-ma-red/5 py-24">
      <div className="lg:mx-48 mx-8">
        <div className="text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-black">
            Ready to Join Us?
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Become part of our community and start your journey in marketing excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://app.ubcma.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ma-red hover:bg-ma-red hover:brightness-90 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200"
            >
              Become a Member
            </a>
            <a
              href="mailto:hello@ubcma.ca"
              className="border border-ma-red text-ma-red hover:bg-ma-red hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
