// eslint-disable-next-line @typescript-eslint/naming-convention
export default function DonationImpactSection() {
  return (
    <section className="w-full bg-gradient-to-br from-white via-gray-50 to-gray-100 py-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-orange-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Left Images */}
          <div className="lg:col-span-1 flex flex-col gap-12 items-center lg:items-end">
            <div className="relative group transition-transform duration-500 ease-in-out hover:scale-105 hover:-rotate-2">
              <div className="w-64 h-64 rounded-xl  overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=400&q=80"
                  alt="Child in need"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute -top-3 -right-3 w-4 h-4 bg-orange-500 rounded-full animate-ping"></div>
            </div>

            <div className="relative group transition-transform duration-500 ease-in-out hover:scale-105 rotate-1">
              <div className="w-60 h-60 rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=400&q=80"
                  alt="Smiling children"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute -bottom-3 -left-3 w-3 h-3 bg-orange-400 rounded-full animate-bounce"></div>
            </div>
          </div>

          {/* Center Content */}
          <div className="lg:col-span-3 text-center px-4 sm:px-8 py-12 sm:py-20">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-600 leading-snug mb-2 tracking-tight animate-fade-in">
              Be part of the
            </h1>
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-600 leading-snug mb-8 tracking-tight animate-fade-in delay-150">
              change alongside
            </h1>

            <div className="mb-10">
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-orange-500 drop-shadow-md">
                15.567+
              </span>
            </div>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto animate-fade-in delay-300">
              people who have donated to help children in <br className="hidden md:block" />
              need across <span className="text-orange-600 font-bold">Africa, Middle East and Asia</span>
            </p>

            <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-red-500 text-white font-semibold py-4 px-10 sm:py-5 sm:px-14 rounded-full text-lg sm:text-xl transition-all duration-300 shadow-lg hover:shadow-orange-400/40 hover:scale-105 active:scale-95 transform-gpu">
              <span className="relative z-10">Donate</span>
              <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Right Images */}
          <div className="lg:col-span-1 flex flex-col gap-12 items-center lg:items-start">
            <div className="relative group transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-2">
              <div className="w-64 h-64 rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80"
                  alt="Hopeful child"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute -top-3 -left-3 w-4 h-4 bg-orange-400 rounded-full animate-pulse"></div>
            </div>

            <div className="relative group transition-transform duration-500 ease-in-out hover:scale-105 -rotate-1">
              <div className="w-60 h-60 rounded-xl  overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=400&q=80"
                  alt="Children in tent"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-3 h-3 bg-orange-400 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}