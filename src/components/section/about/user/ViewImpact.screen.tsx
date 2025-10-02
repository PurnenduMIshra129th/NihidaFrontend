import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { selectSocialLinkAndCommonImage } from "../../../../contexts/slice/socialLinkAndCommonImage.slice";
import Image from "../../../Image/Image";

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function DonationImpactSection() {
  const data = useSelector(selectSocialLinkAndCommonImage);
  const [index, setIndex] = useState(0);
  const intervalId = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();

  const getIndexHandler = (Index: number) => {
    const length = data?.[0]?.files?.length ?? 0;
    if (length === 0) return 0;
    const safeIndex = Index % length;
    return safeIndex;
  };

  useEffect(() => {
    if (!data?.[0]?.files || data[0].files.length === 0) return;
    const limitIndex = data[0].files.length - 1;
    if (intervalId.current) clearInterval(intervalId.current);
    intervalId.current = setInterval(() => {
      setIndex((prevIndex) => (prevIndex >= limitIndex ? 0 : prevIndex + 1));
    }, 10000);
    return () => {
      if (intervalId.current) clearInterval(intervalId.current);
    };
  }, [data]);
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
            <div className="relative group transition-transform duration-500 ease-in-out hover:scale-105 hover:-rotate-2 w-full">
              <div className="w-full h-64 rounded-xl  overflow-hidden shadow-lg">
                <Image
                  imagePath={
                    data?.[0]?.files?.[getIndexHandler(index)]
                      ?.publicFilePath ?? ""
                  }
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute -top-3 -right-3 w-4 h-4 bg-orange-500 rounded-full animate-ping"></div>
            </div>

            <div className="relative group transition-transform duration-500 ease-in-out hover:scale-105 rotate-1 w-full">
              <div className="w-full h-60 rounded-xl overflow-hidden shadow-lg">
                <Image
                  imagePath={
                    data?.[0]?.files?.[getIndexHandler(index + 1)]
                      ?.publicFilePath ?? ""
                  }
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute -bottom-3 -left-3 w-3 h-3 bg-orange-400 rounded-full animate-bounce"></div>
            </div>
          </div>

          {/* Center Content */}
          <div className="lg:col-span-3 text-center px-4 sm:px-8 py-12 sm:py-20">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-600 leading-snug mb-2 tracking-tight animate-fade-in delay-500">
              driven communities, committed voices,
            </h1>
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-600 leading-snug mb-8 tracking-tight animate-fade-in delay-700">
              and shared purpose.
            </h1>

            <div className="mb-10">
              <span className="block text-2xl sm:text-3xl md:text-6xl lg:text-6xl font-bold text-orange-500 drop-shadow-md">
                One mission.
              </span>
            </div>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto animate-fade-in delay-900">
              Together, we empower change — not just through donations, but by
              uplifting education, health, and hope in communities across{" "}
              <span className="text-orange-600 font-bold">
                India and all over the Odisha
              </span>
              .
              <br className="hidden md:block" />
              Every action you take echoes through lives.
            </p>

            <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-red-500 text-white font-semibold py-4 px-10 sm:py-5 sm:px-14 rounded-full text-lg sm:text-xl transition-all duration-300 shadow-lg hover:shadow-orange-400/40 hover:scale-105 active:scale-95 transform-gpu" onClick={() => navigate('/donationForm')}>
              <span className="relative z-10">Donate</span>
              <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Right Images */}
          <div className="lg:col-span-1 flex flex-col gap-12 items-center lg:items-start">
            <div className="relative group transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-2 w-full">
              <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  imagePath={
                    data?.[0]?.files?.[getIndexHandler(index + 2)]
                      ?.publicFilePath ?? ""
                  }
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute -top-3 -left-3 w-4 h-4 bg-orange-400 rounded-full animate-pulse"></div>
            </div>

            <div className="relative group transition-transform duration-500 ease-in-out hover:scale-105 -rotate-1 w-full">
              <div className="w-full h-60 rounded-xl  overflow-hidden shadow-lg">
                <Image
                  imagePath={
                    data?.[0]?.files?.[getIndexHandler(index + 3)]
                      ?.publicFilePath ?? ""
                  }
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
