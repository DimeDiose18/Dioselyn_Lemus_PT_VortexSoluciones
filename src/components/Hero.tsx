import ScribbleHubLogo from '../assets/logo/Scribble-Hub-2.png';
import bg from '../assets/BG/Hoja_Cuadriculada_Graficas_3.jpg';
import FEATURES from '../utils/features.json';
import featuresTypes from '../types/features';

const features = FEATURES;

const Hero = () => {
  return (
    <div className="overflow-hidden bg-white py-2 sm:py-20" style={{ backgroundImage: `url(${bg})` }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-1">
            <div className="lg:max-w-lg">
              <h1 style={{fontSize: '60px', letterSpacing: '0em', lineHeight: '4.6rem' }} className="mt-1 font-bold font-titles text-gray-900 sm:text-4xl">Welcome to the Best Community of Newbie Writers!</h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We are a community of writers who are passionate about creating new and innovative content for the web.
              </p>

              <div className="mt-7 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature: featuresTypes) => (
                  <div key={feature.name} className="relative">
                    <p className="inline font-semibold text-gray-900">
                      {feature.name}
                    </p>
                    <span className="inline">{feature.description}</span>
                  </div>
                ))}
                <button
                  type="button"
                  className="bg-red mt-10  inline-flex w-[90%] items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium hover:bg-[#ac2d5b] focus:outline-none focus:ring-2 focus:ring-red focus:ring-offset-2"
                >
                  <h2 className='text-[#fff] text-[1.2rem]'>Get started</h2>
                </button>
              </div>
            </div>
          </div>
          <div className="animate-wiggle">
            <img
              src={ScribbleHubLogo}
              alt="ScribbleHub-Logo"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[54rem] md:-ml-4 lg:-ml-0 lg:mt-10"
              width={2000}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Hero };
