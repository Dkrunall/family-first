'use client';
import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Button from '../components/ui/Button';
const features = [
  {
    title: 'Stealth Mode Monitoring',
    description: "No app visible on the child's device.",
    icon: '/images/img_money_bag_svgrepo_com.svg',
    alt: 'Stealth Mode',
  },
  {
    title: 'Screen Time & App Locks',
    description: 'Keep distractions away.',
    icon: '/images/img_money_bag_svgrepo_com.svg',
    alt: 'Screen Time',
  },
  {
    title: 'Location Tracking',
    description: 'See where they are and where they have been',
    icon: '/images/img_box_tick_svgrepo_com.svg',
    alt: 'Location Tracking',
  },
  {
    title: 'Offline Lock/Unlock',
    description: 'Even works without internet.',
    icon: '/images/img_money_bag_svgrepo_com.svg',
    alt: 'Offline Control',
  },
  {
    title: 'Web Filtering',
    description: 'Block inappropriate websites.',
    icon: '/images/img_money_bag_svgrepo_com.svg',
    alt: 'Web Filtering',
  },
];

const FeaturesGrid = () => {
  const [highlightedIndex, setHighlightedIndex] = useState(2);
  const gridRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (gridRef.current) {
      const grid = gridRef.current;
      const highlightedCard = grid.children[highlightedIndex];
      if (highlightedCard) {
        const scrollLeft =
          highlightedCard.offsetLeft - grid.offsetWidth / 2 + highlightedCard.offsetWidth / 2;
        grid.scrollTo({
          left: scrollLeft,
          behavior: 'smooth',
        });
      }
    }
  }, [highlightedIndex]);

  return (
    <section className="w-full mb-8 sm:mb-12 pt-8">
      <div
        ref={gridRef}
        className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-[52px] px-4 sm:px-6 lg:px-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide overflow-hidden h-[320px]"
      >
        {features.map((feature, index) => {
          const isHighlighted = index === highlightedIndex;
          return (
            <div
              key={feature.title}
              className={`snap-center relative flex flex-col items-center p-4 sm:p-6 lg:p-[26px] rounded-[20px] sm:rounded-[24px] transition-all duration-500 ease-in-out flex-shrink-0 min-h-[250px] ${
                isHighlighted
                  ? 'w-[200px] sm:w-[240px] md:w-[280px] lg:w-[304px] bg-gradient-to-br from-[#00d7ff]/20 to-[#929292]/20 scale-105 shadow-lg'
                  : 'w-[180px] sm:w-[220px] md:w-[240px] lg:w-[280px] bg-global-6'
              }`}
            >
              <div
                className={`flex items-center justify-center rounded-full mb-4 sm:mb-6 lg:mb-[28px] transition-all duration-300 ${
                  isHighlighted
                    ? 'w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] lg:w-[90px] lg:h-[90px] bg-cover bg-center'
                    : 'w-[28px] h-[28px] sm:w-[36px] sm:h-[36px] lg:w-[44px] lg:h-[44px]'
                }`}
                style={{
                  backgroundImage: isHighlighted ? 'url(/images/img_group_4.png)' : 'none',
                }}
              >
                <img
                  src={feature.icon}
                  alt={feature.alt}
                  className={`transition-all duration-300 ${
                    isHighlighted
                      ? 'w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] lg:w-[32px] lg:h-[32px] brightness-0 invert'
                      : 'w-full h-full'
                  }`}
                />
              </div>
              <h3
                className={`font-semibold text-center transition-colors duration-300 ${
                  isHighlighted
                    ? 'text-sm sm:text-base md:text-lg lg:text-[20px] leading-5 sm:leading-6 lg:leading-[24px] text-global-4 mb-3 sm:mb-4 lg:mb-[20px]'
                    : 'text-xs sm:text-sm lg:text-[16px] leading-4 sm:leading-5 lg:leading-[20px] text-global-3 mb-2 lg:mb-[6px]'
                }`}
              >
                {feature.title}
              </h3>
              <p
                className={`font-medium text-center transition-colors duration-300 ${
                  isHighlighted
                    ? 'text-xs sm:text-sm lg:text-[16px] leading-4 lg:leading-[18px] text-global-4 mb-4 sm:mb-6 lg:mb-[34px]'
                    : 'text-xs lg:text-[14px] leading-3 sm:leading-4 lg:leading-[17px] text-global-3'
                }`}
              >
                {feature.description}
              </p>
              {isHighlighted && (
                <img
                  src="/images/sliderpri.png"
                  alt="Location indicator"
                  className="w-full h-full object-contain absolute bottom-[-26%] left-0 right-0"
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

const FamilyFirstLandingPage = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setOffset(window.pageYOffset);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="bg-global-1 min-h-screen">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className="flex flex-col items-center min-h-screen bg-black">
        {/* Hero Section */}
        <section
          className="relative flex flex-col items-center w-full max-w-[1381px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-18 h-[90vh]"
          style={{
            transform: `translate3d(0, ${offset * 0.5}px, 0)`,
            willChange: 'transform',
          }}
        >
          {/* Background Images */}
          <img
            src="/images/prigr.png"
            alt="Top Background"
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] opacity-70 h-auto pointer-events-none"
          />
          <img
            src="/images/prigr.png"
            alt="Middle Background"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] max-w-[600px] h-auto opacity-20 pointer-events-none rotate-180"
          />
          <div className="relative flex flex-col items-center gap-8 text-center z-10">
            {/* Hero Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold leading-tight text-center max-w-4xl bg-gradient-to-r from-[#E9866E] via-[#959189] to-[#4A9CA5] bg-clip-text text-transparent">
              Protect Their World.
              <br />
              Control It Silently.
            </h1>
            {/* Hero Description */}
            <p className="text-base sm:text-lg lg:text-xl font-normal text-[#959189] text-center max-w-2xl">
              With Family First, parents get complete control of their child's device—without the
              child ever knowing.
            </p>
            {/* Hero Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 w-full max-w-md">
              <Button
                variant="primary"
                size="lg"
                className="bg-gradient-to-r from-[#E9866E] via-[#959189] to-[#4A9CA5] text-white hover:opacity-90 border-none w-full sm:w-auto"
              >
                Try Free Demo
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="border border-[#4A9CA5] text-[#4A9CA5] hover:bg-[#4A9CA5]/10 w-full sm:w-auto"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
        {/* Phone Mockup Section */}
        <section className="pb-32 bg-black relative w-full max-w-[1381px] mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background Images */}
          <div className="flex justify-center relative z-10">
            <img
              src="/images/phone.png"
              alt="Family First App Interface"
              className="w-full max-w-[250px] sm:max-w-[280px] lg:max-w-[300px] h-auto drop-shadow-xl"
            />
          </div>
          <img
            src="/images/prigr2.png"
            alt="Middle Background"
            className="absolute top-[73%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] max-w-[750px] h-auto pointer-events-none"
            aria-hidden="true"
            loading="lazy"
          />
        </section>
        {/* Reality Section */}
        <section className="relative w-full pb-32">
          {/* Background with overlay */}
          <div
            className="w-full min-h-[600px] sm:min-h-[800px] lg:min-h-[900px] bg-cover bg-center bg-no-repeat rounded-b-[160px] sm:rounded-b-[240px] lg:rounded-b-[320px] relative"
            style={{ backgroundImage: 'url(/images/img_boy3360415_2.png)' }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(19deg,#00d7ff21_0%,#08080800_50%,#000000a0_100%)] rounded-b-[160px] sm:rounded-b-[240px] lg:rounded-b-[320px]"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-14">
              {/* Background Element */}
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-tight lg:leading-[48px] text-global-4 text-center mb-6 sm:mb-8">
                The Reality We All Live
              </h2>
              <p className="text-base sm:text-lg lg:text-[20px] font-medium leading-6 lg:leading-[24px] text-global-4 text-center max-w-2xl mb-16 sm:mb-24 lg:mb-32">
                You hope they will use it wisely. But their world is full of distractions, dangers,
                and detours. You should not have to choose between giving them freedom and feeling
                safe.
              </p>
            </div>
            <p className="text-lg sm:text-xl lg:text-[20px] font-black leading-6 lg:leading-[24px] text-global-4 text-center absolute bottom-10 sm:bottom-24 lg:bottom-32 left-1/2 -translate-x-1/2">
              Now, you do not have to.
            </p>
          </div>
        </section>
        {/* Why Family First Section */}
        <section className="w-full max-w-[1381px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-tight lg:leading-[48px] text-global-4 mb-4">
            Why Family First?
          </h2>
          <p className="text-base sm:text-lg lg:text-[20px] font-medium leading-6 lg:leading-[24px] text-global-4 mb-12 sm:mb-16 lg:mb-20">
            Because Trust Deserves Technology.
          </p>
        </section>
        {/* Features Grid */}
        <FeaturesGrid />

        {/* How It Works Section */}
        <section className="w-full max-w-[1381px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 mt-12 sm:mt-16">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-tight lg:leading-[48px] text-global-4 mb-4 sm:mb-5 lg:mb-[18px]">
              How It Works
            </h2>
            <p className="text-base sm:text-lg lg:text-[20px] font-medium leading-6 lg:leading-[24px] text-global-4">
              Step-by-step
            </p>
          </div>
          {/* Steps Grid */}
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 sm:gap-10 lg:gap-[46px] mb-12 sm:mb-16 lg:mb-20">
            {/* Step 1 */}
            <div className="flex flex-col items-center bg-global-6 rounded-[24px] p-6 sm:p-8 lg:p-[56px] text-center flex-1 max-w-[400px] md:max-w-none">
              <img
                src="/images/img_group_49_1.png"
                alt="Retailer adds parent"
                className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] lg:w-[160px] lg:h-[166px] mb-8 sm:mb-10 lg:mb-[44px]"
              />
              <h3 className="text-sm sm:text-base lg:text-[16px] font-semibold leading-5 lg:leading-[20px] text-global-3 mb-3 sm:mb-4 lg:mb-[12px]">
                Retailer Adds Parent
              </h3>
              <p className="text-xs sm:text-sm lg:text-[14px] font-medium leading-4 lg:leading-[18px] text-global-3 mb-8 sm:mb-10 lg:mb-[40px]">
                A verified retailer registers parents and links them to their child's device using a
                secure key.
              </p>
              <img
                src="/images/img_rectangle_23.png"
                alt="Step indicator"
                className="w-[100px] sm:w-[120px] lg:w-[130px] h-[12px] sm:h-[13px] lg:h-[14px]"
              />
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center bg-global-6 rounded-[24px] p-6 sm:p-8 lg:p-[56px] text-center flex-1 max-w-[400px] md:max-w-none">
              <img
                src="/images/img_group_50_1.png"
                alt="Parent installs app"
                className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] lg:w-[158px] lg:h-[166px] mb-8 sm:mb-10 lg:mb-[40px]"
              />
              <h3 className="text-sm sm:text-base lg:text-[16px] font-semibold leading-5 lg:leading-[20px] text-global-3 mb-3 sm:mb-4 lg:mb-[10px]">
                Parent Installs Family First App
              </h3>
              <p className="text-xs sm:text-sm lg:text-[14px] font-medium leading-4 lg:leading-[18px] text-global-3 mb-12 sm:mb-14 lg:mb-[60px]">
                This app gives full control and visibility over the child's phone.
              </p>
              <img
                src="/images/img_rectangle_23_14x130.png"
                alt="Step indicator"
                className="w-[100px] sm:w-[120px] lg:w-[130px] h-[12px] sm:h-[13px] lg:h-[14px]"
              />
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center bg-global-6 rounded-[24px] p-6 sm:p-8 lg:p-[56px] text-center flex-1 max-w-[400px] md:max-w-none">
              <img
                src="/images/img_group_5_1.png"
                alt="Child uses phone"
                className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] lg:w-[158px] lg:h-[166px] mb-8 sm:mb-10 lg:mb-[36px]"
              />
              <h3 className="text-sm sm:text-base lg:text-[16px] font-semibold leading-5 lg:leading-[20px] text-global-3 mb-3 sm:mb-4 lg:mb-[12px]">
                Child Uses Phone as Usual
              </h3>
              <p className="text-xs sm:text-sm lg:text-[14px] font-medium leading-4 lg:leading-[18px] text-global-3 mb-12 sm:mb-14 lg:mb-[56px]">
                No icon. No notifications. No tampering. Just usage under control.
              </p>
              <img
                src="/images/img_rectangle_23_1.png"
                alt="Step indicator"
                className="w-[100px] sm:w-[120px] lg:w-[130px] h-[12px] sm:h-[13px] lg:h-[14px]"
              />
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="w-full max-w-[1381px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-global-4 rounded-[22px] text-center mb-12 sm:mb-16 lg:mb-20 overflow-hidden h-[600px]">
            {/* Background Image */}
            <img
              src="/images/demo.png"
              alt="Key Features Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Progress Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center">
              <div className="w-full max-w-[544px] h-[6px] bg-global-5 rounded-[3px] relative">
                <div className="w-[110px] h-[6px] bg-global-2 rounded-[3px]"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Parents Choose Section */}
        <section className="w-full max-w-[1381px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-[linear-gradient(45deg,#e9866e_0%,#959189_50%,#00000000_100%)] rounded-[20px] sm:rounded-[32px] p-6 sm:p-8 lg:p-[44px] overflow-hidden">
            {/* Background Image */}
            <img
              src="/images/img_group_43_1.png"
              alt="Family using device"
              className="absolute left-0 top-0 w-auto h-auto object-cover rounded-l-[20px] sm:rounded-l-[32px]"
            />
            {/* Content */}
            <div className="relative z-10 ml-auto max-w-full sm:max-w-[500px] lg:max-w-[472px] mt-[220px] sm:mt-0">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-bold leading-tight lg:leading-[44px] text-global-4 mb-6 sm:mb-8 lg:mb-[56px]">
                Why Parents Choose Family First
              </h2>
              <div className="space-y-4 sm:space-y-6 lg:space-y-[16px]">
                {/* Feature 1 */}
                <div className="flex items-center gap-3 lg:gap-[14px]">
                  <div className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] lg:w-[26px] lg:h-[26px] bg-[linear-gradient(54deg,#e9866e_0%,#959189_50%,#4a9ca5_100%)] rounded-[12px] p-1.5 flex items-center justify-center flex-shrink-0">
                    <img src="/images/img_group_9.svg" alt="Check" className="w-full h-full" />
                  </div>
                  <p className="text-xs sm:text-sm lg:text-[16px] font-medium leading-4 sm:leading-5 lg:leading-[20px] text-global-4">
                    No visible app on child's phone
                  </p>
                </div>
                {/* Feature 2 */}
                <div className="flex items-center gap-3 lg:gap-[14px]">
                  <div className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] lg:w-[26px] lg:h-[26px] bg-[linear-gradient(54deg,#e9866e_0%,#959189_50%,#4a9ca5_100%)] rounded-[12px] p-1.5 flex items-center justify-center flex-shrink-0">
                    <img src="/images/img_group_7.svg" alt="Check" className="w-full h-full" />
                  </div>
                  <p className="text-xs sm:text-sm lg:text-[16px] font-bold leading-4 sm:leading-5 lg:leading-[20px] text-global-4">
                    Tamper-proof – cannot be deleted or reset
                  </p>
                </div>
                {/* Feature 3 */}
                <div className="flex items-center gap-3 lg:gap-[14px]">
                  <div className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] lg:w-[26px] lg:h-[26px] bg-[linear-gradient(54deg,#e9866e_0%,#959189_50%,#4a9ca5_100%)] rounded-[12px] p-1.5 flex items-center justify-center flex-shrink-0">
                    <img src="/images/img_group_7.svg" alt="Check" className="w-full h-full" />
                  </div>
                  <p className="text-xs sm:text-sm lg:text-[16px] font-bold leading-4 sm:leading-5 lg:leading-[20px] text-global-4">
                    Works even when internet is off
                  </p>
                </div>
                {/* Feature 4 */}
                <div className="flex items-center gap-3 lg:gap-[14px]">
                  <div className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] lg:w-[26px] lg:h-[26px] bg-[linear-gradient(54deg,#e9866e_0%,#959189_50%,#4a9ca5_100%)] rounded-[12px] p-1.5 flex items-center justify-center flex-shrink-0">
                    <img src="/images/img_group_9.svg" alt="Check" className="w-full h-full" />
                  </div>
                  <p className="text-xs sm:text-sm lg:text-[16px] font-medium leading-4 sm:leading-5 lg:leading-[20px] text-global-4">
                    Complete control in your hands
                  </p>
                </div>
                {/* Feature 5 */}
                <div className="flex items-center gap-3 lg:gap-[14px]">
                  <div className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] lg:w-[26px] lg:h-[26px] bg-[linear-gradient(54deg,#e9866e_0%,#959189_50%,#4a9ca5_100%)] rounded-[12px] p-1.5 flex items-center justify-center flex-shrink-0">
                    <img src="/images/img_group_7.svg" alt="Check" className="w-full h-full" />
                  </div>
                  <p className="text-xs sm:text-sm lg:text-[16px] font-bold leading-4 sm:leading-5 lg:leading-[20px] text-global-4">
                    Fast setup via verified Retailer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get Started Section */}
        <section className="w-full max-w-[1381px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-20 lg:mt-5">
          <div className="bg-[linear-gradient(54deg,#e9866e_0%,#959189_50%,#4a9ca5_100%)] rounded-[20px] sm:rounded-[32px] p-6 sm:p-8 lg:p-[58px] relative overflow-hidden">
            {/* Background Text */}
            <div className="absolute right-2 sm:right-4 lg:right-[46px] top-1/2 transform -translate-y-1/2 hidden sm:block">
              <h3 className="text-2xl sm:text-4xl lg:text-[92px] font-bold leading-tight lg:leading-[75px] text-global-2 opacity-20 text-right">
                Protect Their World.
                <br /> Control It Silently.
              </h3>
            </div>
            {/* Main Content */}
            <div className="relative z-10 max-w-full sm:max-w-[800px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-bold leading-tight lg:leading-[48px] text-global-4 mb-4 lg:mb-[20px]">
                Get Started Today
              </h2>
              <p className="text-sm sm:text-base lg:text-[20px] font-medium leading-5 sm:leading-6 lg:leading-[24px] text-global-4 mb-6 lg:mb-[36px] max-w-full sm:max-w-[600px]">
                Control, Without Conflict. Secure your child's digital journey with just one step.
              </p>
              <p className="text-sm sm:text-base lg:text-[19px] font-medium leading-5 sm:leading-6 lg:leading-[23px] text-global-1 mb-4 lg:mb-[18px]">
                Now Available :
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-3 lg:gap-[12px]">
                <img src="/images/android.png" alt="Android" className="w-12 h-12" />
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};
export default FamilyFirstLandingPage;
