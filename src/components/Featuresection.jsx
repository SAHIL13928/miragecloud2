const FeatureSection = () => {
    return (
      <section className="relative bg-[#f4f4f4] z-10 pt-40  lg:pt-32 md:pt-24 sm:pt-16">
        <div className="container-main mb-36 relative z-10 mx-auto max-w-screen-xl px-36">
          <h2 className="font-title text-7xl font-semibold leading-h2 tracking-tighter text-black">
            Unmatched productivity
          </h2>
          <p className="mt-6 max-w-[705px] text-18 leading-tight tracking-tight lg:mt-5 sm:mt-3 sm:max-w-lg sm:text-15">
            Huly is a process, project, time, and knowledge management platform
            that provides amazing collaboration opportunities for developers and
            product teams alike.
          </p>
          <ul className="mt-10 flex flex-wrap gap-5 lg:mt-9 lg:gap-6 md:mt-6 sm:mt-5 sm:grid sm:grid-cols-8 xs:grid-cols-1">
            <li className="relative grid h-[460px] col-span-3 overflow-hidden rounded-xl bg-grey-2 bg-clip-padding ring-[6px] ring-white/40 lg:h-[300px] md:h-[260px] sm:w-full order-1">
              <div className="absolute bottom-0 z-10 col-span-full flex w-full items-end px-6 pb-6 lg:px-5 lg:pb-5 md:px-4 md:pb-4 sm:px-5 sm:pb-5">
                <p className="relative z-10 font-light leading-snug tracking-snugger text-white/65 md:leading-[1.2] sm:text-15">
                  <span className="font-medium text-white">
                    Keyboard shortcuts.
                  </span>{" "}
                  
                </p>
              </div>
              <div className="relative col-span-full row-span-full">
                <img
                  src="/huly41.jpg" 
                  className="w-full h-auto object-cover"
                  alt="Keyboard shortcuts"
                />
              </div>
            </li>
            <li className="relative grid h-[460px] col-span-5 overflow-hidden rounded-xl bg-grey-2 bg-clip-padding ring-[6px] ring-white/40 lg:h-[300px] md:h-[260px] sm:w-full order-1">
              <div className="absolute bottom-0 z-10 col-span-full flex w-full items-end px-6 pb-6 lg:px-5 lg:pb-5 md:px-4 md:pb-4 sm:px-5 sm:pb-5">
                <p className="relative z-10 font-light leading-snug tracking-snugger text-white/65 md:leading-[1.2] sm:text-15">
                  <span className="font-medium text-white">Team Planner.</span>{" "}
                 
                </p>
              </div>
              <div className="relative col-span-full row-span-full">
                <img
                  src="/huly42.jpg" 
                  className="w-full h-auto object-cover"
                  alt="Team planner"
                />
              </div>
            </li>
            <li className="relative grid h-[460px] col-span-5 overflow-hidden rounded-xl bg-grey-2 bg-clip-padding ring-[6px] ring-white/40 lg:h-[300px] md:h-[260px] sm:w-full order-1">
              <div className="absolute bottom-0 z-10 col-span-full flex w-full items-end px-6 pb-6 lg:px-5 lg:pb-5 md:px-4 md:pb-4 sm:px-5 sm:pb-5">
                <p className="relative z-10 font-light leading-snug tracking-snugger text-white/65 md:leading-[1.2] sm:text-15">
                  <span className="font-medium text-white">Time-blocking.</span>{" "}
                 
                </p>
              </div>
              <div className="relative col-span-full row-span-full">
                <img
                  src="/huly43.jpg" // Static image for time blocking
                  className="w-full h-auto object-cover"
                  alt="Time blocking"
                />
              </div>
            </li>
            <li className="relative grid h-[460px] col-span-3 overflow-hidden rounded-xl bg-grey-2 bg-clip-padding ring-[6px] ring-white/40 lg:h-[300px] md:h-[260px] sm:w-full order-1">
              <div className="absolute bottom-0 z-10 col-span-full flex w-full items-end px-6 pb-6 lg:px-5 lg:pb-5 md:px-4 md:pb-4 sm:px-5 sm:pb-5">
                <p className="relative z-10 font-light leading-snug tracking-snugger text-white/65 md:leading-[1.2] sm:text-15">
                  <span className="font-medium text-white">Notifications.</span>{" "}
                  
                </p>
              </div>
              <div className="relative col-span-full row-span-full">
                <img
                  src="/huly44.jpg" // Static image for notifications
                  className="w-full h-auto object-cover"
                  alt="Notifications"
                />
              </div>
            </li>
          </ul>
        </div>
      </section>
    );
  };
  
  export default FeatureSection;
  