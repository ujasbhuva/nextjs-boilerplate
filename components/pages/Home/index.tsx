import { MinusCircleIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import { getConfigs, updateConfigs } from '../../../apiHelper/configs';
import toast from 'react-hot-toast';

interface HomepageProps {
  imageId?: string
}


const Home: React.FC<HomepageProps> = () => {
  const [config, setConfig] = useState({
    "privacy_policy": "",
    "terms_and_conditions": "",
    "about_us": "",
    "contact_us": "",
    "pagination_count": 100,
    "native-ad-frequency": 10,
    "grid-view-image-resolution-divide-by": 4,
    "image-slider-resolution-divide-by": 2,
    "app_update": {
      "android": {
        "version": "",
        "is-force-update": false,
        "store-link": "",
      },
      "iOS": {
        "version": "",
        "is-force-update": false,
        "store-link": "",
      },
    },
    "admob-app-ids": {
      "android": "",
      "iOS": "",
    },
    "admob-ad-units": {
      "app-opener-ad": {
        "test-ids": {
          "android": "",
          "iOS": "",
        },
        "production-ids": {
          "android": "",
          "iOS": "",
        },
      },
      "native-ad": {
        "test-ids": {
          "android": "",
          "iOS": "",
        },
        "production-ids": {
          "android": "",
          "iOS": "",
        },
      },
      "interstitial-ad": {
        "test-ids": {
          "android": "",
          "iOS": "",
        },
        "production-ids": {
          "android": "",
          "iOS": "",
        },
      },
      "rewarded-ad": {
        "test-ids": {
          "android": "",
          "iOS": "",
        },
        "production-ids": {
          "android": "",
          "iOS": "",
        },
      },
    },
    "ad_units_visibility": {
      "android": {
        "show-app-opener-ad": true,
        "show-native-ad": true,
        "show-interstitial-ad-onTapOfImage": false,
        "show-interstitial-ad-whenGetBackFromImages": true,
        "show-rewarded-ad-on-download-image": false,
        "show-rewarded-ad-on-set-image": true,
      },
      "iOS": {
        "show-app-opener-ad": true,
        "show-native-ad": true,
        "show-interstitial-ad-onTapOfImage": true,
        "show-interstitial-ad-whenGetBackFromImages": true,
        "show-rewarded-ad-on-download-image": true,
        "show-rewarded-ad-on-set-image": true,
      },
    },
    "search-categories": [
      {
        "title": "",
        "bg-image": "",
      }
    ],
  });
  const [authKey, setAuthKey] = useState('');

  const handleInputChange = (path: any, value: any) => {
    setConfig((prevConfig) => {
      const newConfig = { ...prevConfig };
      path.reduce((acc: any, field: string, index: number) => {
        if (index === path.length - 1) {
          acc[field] = value;
        } else {
          if (!acc[field]) acc[field] = {};
          return acc[field];
        }
      }, newConfig);
      return newConfig;
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    updateConfigs(authKey, config).then((res: any) => {
      toast.success('Config Updated');
    }
    ).catch((err: any) => {
      console.log(err);
      toast.error('Invalid Auth Key');
    }
    );
  };

  const handleGetConfig = (event: any) => {
    event.preventDefault();
    getConfigs(authKey).then((res: any) => {
      setConfig(res.data);
      toast.success('Config Loaded');
    }
    ).catch((err: any) => {
      console.log(err);
      toast.error('Invalid Auth Key');
    }
    );
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-6">Splash Screen Settings</h1>

      <div className='max-w-4xl p-5 rounded-2xl border border-gray-700' >
        Auth Key
        <input
          type="password"
          id="auth_key"
          name="auth_key"
          value={authKey}
          onChange={(e) => setAuthKey(e.target.value)}
          className="mt-1 p-2.5 focus:outline-gray-500 focus:outline-2 block w-full shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800"
        />
        <button className='bg-blue-500 text-white px-4 py-2 rounded-lg mt-4'
          onClick={handleGetConfig} >
          Save
        </button>
      </div>

      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-8">
        <div className='p-5 rounded-2xl border border-gray-700' >
          <h2 className="text-xl font-bold mb-6">General settings</h2>
          <div className='grid grid-cols-2 gap-5' >

            {/* Privacy Policy URL */}
            <div className="mb-4">
              <label htmlFor="privacy_policy" className="block text-sm text-gray-500">
                Privacy Policy URL
              </label>
              <input
                type="url"
                id="privacy_policy"
                name="privacy_policy"
                value={config.privacy_policy}
                onChange={(e) => handleInputChange(['privacy_policy'], e.target.value)}
                className="mt-1 p-2.5 focus:outline-gray-500 focus:outline-2 block w-full shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800"
              />
            </div>

            {/* About Us URL */}
            <div className="mb-4">
              <label htmlFor="about_us" className="block text-sm text-gray-500">
                About Us URL
              </label>
              <input
                type="url"
                id="about_us"
                name="about_us"
                value={config.about_us}
                onChange={(e) => handleInputChange(['about_us'], e.target.value)}
                className="mt-1 p-2.5 focus:outline-gray-500 focus:outline-2 block w-full shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800"
              />
            </div>


            {/* Terms and Conditions URL */}
            <div className="mb-4">
              <label htmlFor="terms_and_conditions" className="block text-sm text-gray-500">
                Terms and Conditions URL
              </label>
              <input
                type="url"
                id="terms_and_conditions"
                name="terms_and_conditions"
                value={config.terms_and_conditions}
                onChange={(e) => handleInputChange(['terms_and_conditions'], e.target.value)}
                className="mt-1 p-2.5 focus:outline-gray-500 focus:outline-2 block w-full shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800"
              />
            </div>

            {/* Contact Us URL */}
            <div className="mb-4">
              <label htmlFor="contact_us" className="block text-sm text-gray-500">
                Contact Us URL
              </label>
              <input
                type="url"
                id="contact_us"
                name="contact_us"
                value={config.contact_us}
                onChange={(e) => handleInputChange(['contact_us'], e.target.value)}
                className="mt-1 p-2.5 focus:outline-gray-500 focus:outline-2 block w-full shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800"
              />
            </div>

            {/* Pagination Count */}
            <div className="mb-4">
              <label htmlFor="pagination_count" className="block text-sm text-gray-500">
                Pagination Count
              </label>
              <input
                type="number"
                id="pagination_count"
                name="pagination_count"
                value={config.pagination_count}
                onChange={(e) => handleInputChange(['pagination_count'], e.target.value)}
                className="mt-1 p-2.5 focus:outline-gray-500 focus:outline-2 block w-full shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800"
              />
            </div>

            {/* Native Ad Frequency */}
            <div className="mb-4">
              <label htmlFor="native_ad_frequency" className="block text-sm text-gray-500">
                Native Ad Frequency
              </label>
              <input
                type="number"
                id="native_ad_frequency"
                name="native_ad_frequency"
                value={config['native-ad-frequency']}
                onChange={(e) => handleInputChange(['native-ad-frequency'], e.target.value)}
                className="mt-1 p-2.5 focus:outline-gray-500 focus:outline-2 block w-full shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800"
              />
            </div>

            {/* Grid View Image Resolution Divide By */}
            <div className="mb-4">
              <label htmlFor="grid_view_image_resolution" className="block text-sm text-gray-500">
                Grid View Image Resolution Divide By
              </label>
              <input
                type="number"
                id="grid_view_image_resolution"
                name="grid_view_image_resolution"
                value={config['grid-view-image-resolution-divide-by']}
                onChange={(e) => handleInputChange(['grid-view-image-resolution-divide-by'], e.target.value)}
                className="mt-1 p-2.5 focus:outline-gray-500 focus:outline-2 block w-full shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800"
              />
            </div>

            {/* Image Slider Resolution Divide By */}
            <div className="mb-4">
              <label htmlFor="image_slider_resolution" className="block text-sm text-gray-500">
                Image Slider Resolution Divide By
              </label>
              <input
                type="number"
                id="image_slider_resolution"
                name="image_slider_resolution"
                value={config['image-slider-resolution-divide-by']}
                onChange={(e) => handleInputChange(['image-slider-resolution-divide-by'], e.target.value)}
                className="mt-1 p-2.5 focus:outline-gray-500 focus:outline-2 block w-full shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800"
              />
            </div>
          </div>
        </div>


        <div className='p-5 rounded-2xl border border-gray-700 mt-8' >
          <h2 className="text-xl font-bold mb-6">Application Updates</h2>

          <div className='p-3 px-5 rounded-xl border border-gray-700' >
            {/* android_version */}
            <h3 className="text-lg text-gray-400 font-bold mb-5">Android</h3>
            {/* is-force-update */}
            <div className="mb-4 flex gap-2 items-center">
              <input
                type="checkbox"
                id="is-force-update-android"
                name="is-force-update"
                checked={config.app_update.android['is-force-update']}
                onChange={(e) => handleInputChange(['app_update', 'android', 'is-force-update'], e.target.checked)}
                className="p-2.5 block shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800 h-4" />
              <label htmlFor="is-force-update-android" className="block text-sm text-gray-500">
                Is Force Update
              </label>
            </div>
            <div className="flex gap-5">
              <div className="mb-4 w-full">
                <label htmlFor="android_version" className="block text-sm text-gray-500">
                  Android Version
                </label>
                <input
                  type="text"
                  id="android_version"
                  name="android_version"
                  value={config.app_update.android.version}
                  onChange={(e) => handleInputChange(['app_update', 'android', 'version'], e.target.value)}
                  className="mt-1 p-2.5 focus:outline-gray-500 focus:outline-2 block w-full shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800" />
              </div>
              {/* store-link */}
              <div className="mb-4 w-full">
                <label htmlFor="store-link" className="block text-sm text-gray-500">
                  Store Link
                </label>
                <input
                  type="text"
                  id="store-link"
                  name="store-link"
                  value={config.app_update.android['store-link']}
                  onChange={(e) => handleInputChange(['app_update', 'android', 'store-link'], e.target.value)}
                  className="mt-1 p-2.5 focus:outline-gray-500 focus:outline-2 block w-full shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800" />
              </div>
            </div>
          </div>

          {/* IOS Version */}
          <div className='p-3 px-5 rounded-xl border border-gray-700 mt-8' >
            {/* iOS version */}
            <h3 className="text-lg text-gray-400 font-bold mb-5">IOS</h3>
            {/* is-force-update */}
            <div className="mb-4 flex gap-2 items-center">
              <input
                type="checkbox"
                id="is-force-update-ios"
                name="is-force-update"
                checked={config.app_update.iOS['is-force-update']}
                onChange={(e) => handleInputChange(['app_update', 'iOS', 'is-force-update'], e.target.checked)}
                className="p-2.5 block shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800 h-4" />
              <label htmlFor="is-force-update-ios" className="block text-sm text-gray-500">
                Is Force Update
              </label>
            </div>
            <div className="flex gap-5">
              <div className="mb-4 w-full">
                <label htmlFor="android_version" className="block text-sm text-gray-500">
                  IOS Version
                </label>
                <input
                  type="text"
                  id="ios_version"
                  name="ios_version"
                  value={config.app_update.iOS.version}
                  onChange={(e) => handleInputChange(['app_update', 'iOS', 'version'], e.target.value)}
                  className="mt-1 p-2.5 focus:outline-gray-500 focus:outline-2 block w-full shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800" />
              </div>
              {/* store-link */}
              <div className="mb-4 w-full">
                <label htmlFor="store-link" className="block text-sm text-gray-500">
                  Store Link
                </label>
                <input
                  type="text"
                  id="store-link"
                  name="store-link"
                  value={config.app_update.iOS['store-link']}
                  onChange={(e) => handleInputChange(['app_update', 'iOS', 'store-link'], e.target.value)}
                  className="mt-1 p-2.5 focus:outline-gray-500 focus:outline-2 block w-full shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800" />
              </div>
            </div>
          </div>
        </div>

        <div className='p-5 rounded-2xl border border-gray-700 mt-8' >
          <h2 className="text-xl font-bold mb-6">Admob AD Settings</h2>
          {/* Admob App IDs */}
          <div className='p-3 px-5 rounded-xl border border-gray-700' >
            <h3 className="text-lg text-gray-400 font-bold">Admob App IDs</h3>
            {/* android */}
            <div className="flex gap-5">
              <div className="mb-4 w-full">
                <label htmlFor="android_admob_app_id" className="block text-sm text-gray-500">
                  Android Admob App ID
                </label>
                <input
                  type="text"
                  id="android_admob_app_id"
                  name="android_admob_app_id"
                  value={config['admob-app-ids'].android}
                  onChange={(e) => handleInputChange(['admob-app-ids', 'android'], e.target.value)}
                  className="mt-1 p-2.5 focus:outline-gray-500 focus:outline-2 block w-full shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800" />
              </div>
              {/* iOS */}
              <div className="mb-4 w-full">
                <label htmlFor="ios_admob_app_id" className="block text-sm text-gray-500">
                  iOS Admob App ID
                </label>
                <input
                  type="text"
                  id="ios_admob_app_id"
                  name="ios_admob_app_id"
                  value={config['admob-app-ids'].iOS}
                  onChange={(e) => handleInputChange(['admob-app-ids', 'iOS'], e.target.value)}
                  className="mt-1 p-2.5 focus:outline-gray-500 focus:outline-2 block w-full shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800" />
              </div>
            </div>
          </div>

          {/* Admob Ad Units */}
          <div className='p-3 px-5 rounded-xl border border-gray-700 mt-8' >
            <h3 className="text-lg text-gray-400 font-bold">Admob Ad Units</h3>

            {/* app-opener-ad */}
            <div className='p-3 px-5 rounded-xl border border-gray-700 mt-8' >
              <h4 className="text-lg text-gray-400 font-bold">App Opener Ad</h4>
              {/* test-ids */}
              <div className='p-3 px-5 rounded-xl border border-gray-700 mt-8' >
                <h5 className="text-md font-bold mb-3 text-gray-400">Test IDs</h5>
                {/* android */}
                <div className="flex gap-5">
                  <div className="mb-4 w-full">
                    <label htmlFor="android_app_opener_ad_test_id" className="block text-sm text-gray-500">
                      Android App Opener Ad Test ID
                    </label>
                    <input
                      type="text"
                      id="android_app_opener_ad_test_id"
                      name="android_app_opener_ad_test_id"
                      value={config['admob-ad-units']['app-opener-ad']['test-ids'].android}
                      onChange={(e) => handleInputChange(['admob-ad-units', 'app-opener-ad', 'test-ids', 'android'], e.target.value)}
                      className="mt-1 p-2.5 focus:outline-gray-500 focus:outline-2 block w-full shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800" />
                  </div>
                  {/* iOS */}
                  <div className="mb-4 w-full">
                    <label htmlFor="ios_app_opener_ad_test_id" className="block text-sm text-gray-500">
                      iOS App Opener Ad Test ID
                    </label>
                    <input
                      type="text"
                      id="ios_app_opener_ad_test_id"
                      name="ios_app_opener_ad_test_id"
                      value={config['admob-ad-units']['app-opener-ad']['test-ids'].iOS}
                      onChange={(e) => handleInputChange(['admob-ad-units', 'app-opener-ad', 'test-ids', 'iOS'], e.target.value)}
                      className="mt-1 p-2.5 focus:outline-gray-500 focus:outline-2 block w-full shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800" />
                  </div>
                </div>
              </div>

              {/* production-ids */}
              <div className='p-3 px-5 rounded-xl border border-gray-700 mt-8' >
                <h5 className="text-md font-bold mb-3 text-gray-400">Production IDs</h5>
                {/* android */}
                <div className="flex gap-5">
                  <div className="mb-4 w-full">
                    <label htmlFor="android_app_opener_ad_production_id" className="block text-sm text-gray-500">
                      Android App Opener Ad Production ID
                    </label>
                    <input
                      type="text"
                      id="android_app_opener_ad_production_id"
                      name="android_app_opener_ad_production_id"
                      value={config['admob-ad-units']['app-opener-ad']['production-ids'].android}
                      onChange={(e) => handleInputChange(['admob-ad-units', 'app-opener-ad', 'production-ids', 'android'], e.target.value)}
                      className="mt-1 p-2.5 focus:outline-gray-500 focus:outline-2 block w-full shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800" />
                  </div>
                  {/* iOS */}
                  <div className="mb-4 w-full">
                    <label htmlFor="ios_app_opener_ad_production_id" className="block text-sm text-gray-500">
                      iOS App Opener Ad Production ID
                    </label>
                    <input
                      type="text"
                      id="ios_app_opener_ad_production_id"
                      name="ios_app_opener_ad_production_id"
                      value={config['admob-ad-units']['app-opener-ad']['production-ids'].iOS}
                      onChange={(e) => handleInputChange(['admob-ad-units', 'app-opener-ad', 'production-ids', 'iOS'], e.target.value)}
                      className="mt-1 p-2.5 focus:outline-gray-500 focus:outline-2 block w-full shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800" />
                  </div>
                </div>
              </div>
            </div>

            {/* native-ad */}
            <div className='p-3 px-5 rounded-xl border border-gray-700 mt-8' >
              <h4 className="text-lg text-gray-400 font-bold">Native Ad</h4>
              {/* test-ids */}
              <div className='p-3 px-5 rounded-xl border border-gray-700 mt-8' >
                <h5 className="text-md font-bold mb-3 text-gray-400">Test IDs</h5>
                {/* android */}
                <div className="flex gap-5">
                  <div className="mb-4 w-full">
                    <label htmlFor="android_native_ad_test_id" className="block text-sm text-gray-500">
                      Android Native Ad Test ID
                    </label>
                    <input
                      type="text"
                      id="android_native_ad_test_id"
                      name="android_native_ad_test_id"
                      value={config['admob-ad-units']['native-ad']['test-ids'].android}
                      onChange={(e) => handleInputChange(['admob-ad-units', 'native-ad', 'test-ids', 'android'], e.target.value)}
                      className="mt-1 p-2.5 focus:outline-gray-500 focus:outline-2 block w-full shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800" />
                  </div>
                  {/* iOS */}
                  <div className="mb-4 w-full">
                    <label htmlFor="ios_native_ad_test_id" className="block text-sm text-gray-500">
                      iOS Native Ad Test ID
                    </label>
                    <input
                      type="text"
                      id="ios_native_ad_test_id"
                      name="ios_native_ad_test_id"
                      value={config['admob-ad-units']['native-ad']['test-ids'].iOS}
                      onChange={(e) => handleInputChange(['admob-ad-units', 'native-ad', 'test-ids', 'iOS'], e.target.value)}
                      className="mt-1 p-2.5 focus:outline-gray-500 focus:outline-2 block w-full shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800" />
                  </div>
                </div>
              </div>

              {/* production-ids */}
              <div className='p-3 px-5 rounded-xl border border-gray-700 mt-8' >
                <h5 className="text-md font-bold mb-3 text-gray-400">Production IDs</h5>
                {/* android */}
                <div className="flex gap-5">
                  <div className="mb-4 w-full">
                    <label htmlFor="android_native_ad_production_id" className="block text-sm text-gray-500">
                      Android Native Ad Production ID
                    </label>
                    <input
                      type="text"
                      id="android_native_ad_production_id"
                      name="android_native_ad_production_id"
                      value={config['admob-ad-units']['native-ad']['production-ids'].android}
                      onChange={(e) => handleInputChange(['admob-ad-units', 'native-ad', 'production-ids', 'android'], e.target.value)}
                      className="mt-1 p-2.5 focus:outline-gray-500 focus:outline-2 block w-full shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800" />
                  </div>
                  {/* iOS */}
                  <div className="mb-4 w-full">
                    <label htmlFor="ios_native_ad_production_id" className="block text-sm text-gray-500">
                      iOS Native Ad Production ID
                    </label>
                    <input
                      type="text"
                      id="ios_native_ad_production_id"
                      name="ios_native_ad_production_id"
                      value={config['admob-ad-units']['native-ad']['production-ids'].iOS}
                      onChange={(e) => handleInputChange(['admob-ad-units', 'native-ad', 'production-ids', 'iOS'], e.target.value)}
                      className="mt-1 p-2.5 focus:outline-gray-500 focus:outline-2 block w-full shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800" />
                  </div>
                </div>
              </div>
            </div>

            {/* interstitial-ad */}
            <div className='p-3 px-5 rounded-xl border border-gray-700 mt-8' >
              <h4 className="text-lg text-gray-400 font-bold">Interstitial Ad</h4>
              {/* test-ids */}
              <div className='p-3 px-5 rounded-xl border border-gray-700 mt-8' >
                <h5 className="text-md font-bold mb-3 text-gray-400">Test IDs</h5>
                {/* android */}
                <div className="flex gap-5">
                  <div className="mb-4 w-full">
                    <label htmlFor="android_interstitial_ad_test_id" className="block text-sm text-gray-500">
                      Android Interstitial Ad Test ID
                    </label>
                    <input
                      type="text"
                      id="android_interstitial_ad_test_id"
                      name="android_interstitial_ad_test_id"
                      value={config['admob-ad-units']['interstitial-ad']['test-ids'].android}
                      onChange={(e) => handleInputChange(['admob-ad-units', 'interstitial-ad', 'test-ids', 'android'], e.target.value)}
                      className="mt-1 p-2.5 focus:outline-gray-500 focus:outline-2 block w-full shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800" />
                  </div>
                  {/* iOS */}
                  <div className="mb-4 w-full">
                    <label htmlFor="ios_interstitial_ad_test_id" className="block text-sm text-gray-500">
                      iOS Interstitial Ad Test ID
                    </label>
                    <input
                      type="text"
                      id="ios_interstitial_ad_test_id"
                      name="ios_interstitial_ad_test_id"
                      value={config['admob-ad-units']['interstitial-ad']['test-ids'].iOS}
                      onChange={(e) => handleInputChange(['admob-ad-units', 'interstitial-ad', 'test-ids', 'iOS'], e.target.value)}
                      className="mt-1 p-2.5 focus:outline-gray-500 focus:outline-2 block w-full shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800" />
                  </div>
                </div>
              </div>

              {/* production-ids */}
              <div className='p-3 px-5 rounded-xl border border-gray-700 mt-8' >
                <h5 className="text-md font-bold mb-3 text-gray-400">Production IDs</h5>
                {/* android */}
                <div className="flex gap-5">
                  <div className="mb-4 w-full">
                    <label htmlFor="android_interstitial_ad_production_id" className="block text-sm text-gray-500">
                      Android Interstitial Ad Production ID
                    </label>
                    <input
                      type="text"
                      id="android_interstitial_ad_production_id"
                      name="android_interstitial_ad_production_id"
                      value={config['admob-ad-units']['interstitial-ad']['production-ids'].android}
                      onChange={(e) => handleInputChange(['admob-ad-units', 'interstitial-ad', 'production-ids', 'android'], e.target.value)}
                      className="mt-1 p-2.5 focus:outline-gray-500 focus:outline-2 block w-full shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800" />
                  </div>
                  {/* iOS */}
                  <div className="mb-4 w-full">
                    <label htmlFor="ios_interstitial_ad_production_id" className="block text-sm text-gray-500">
                      iOS Interstitial Ad Production ID
                    </label>
                    <input
                      type="text"
                      id="ios_interstitial_ad_production_id"
                      name="ios_interstitial_ad_production_id"
                      value={config['admob-ad-units']['interstitial-ad']['production-ids'].iOS}
                      onChange={(e) => handleInputChange(['admob-ad-units', 'interstitial-ad', 'production-ids', 'iOS'], e.target.value)}
                      className="mt-1 p-2.5 focus:outline-gray-500 focus:outline-2 block w-full shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800" />
                  </div>
                </div>
              </div>
            </div>

            {/* rewarded-ad */}
            <div className='p-3 px-5 rounded-xl border border-gray-700 mt-8' >
              <h4 className="text-lg text-gray-400 font-bold">Rewarded Ad</h4>
              {/* test-ids */}
              <div className='p-3 px-5 rounded-xl border border-gray-700 mt-8' >
                <h5 className="text-md font-bold mb-3 text-gray-400">Test IDs</h5>
                {/* android */}
                <div className="flex gap-5">
                  <div className="mb-4 w-full">
                    <label htmlFor="android_rewarded_ad_test_id" className="block text-sm text-gray-500">
                      Android Rewarded Ad Test ID
                    </label>
                    <input
                      type="text"
                      id="android_rewarded_ad_test_id"
                      name="android_rewarded_ad_test_id"
                      value={config['admob-ad-units']['rewarded-ad']['test-ids'].android}
                      onChange={(e) => handleInputChange(['admob-ad-units', 'rewarded-ad', 'test-ids', 'android'], e.target.value)}
                      className="mt-1 p-2.5 focus:outline-gray-500 focus:outline-2 block w-full shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800" />
                  </div>
                  {/* iOS */}
                  <div className="mb-4 w-full">
                    <label htmlFor="ios_rewarded_ad_test_id" className="block text-sm text-gray-500">
                      iOS Rewarded Ad Test ID
                    </label>
                    <input
                      type="text"
                      id="ios_rewarded_ad_test_id"
                      name="ios_rewarded_ad_test_id"
                      value={config['admob-ad-units']['rewarded-ad']['test-ids'].iOS}
                      onChange={(e) => handleInputChange(['admob-ad-units', 'rewarded-ad', 'test-ids', 'iOS'], e.target.value)}
                      className="mt-1 p-2.5 focus:outline-gray-500 focus:outline-2 block w-full shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800" />
                  </div>
                </div>
              </div>

              {/* production-ids */}
              <div className='p-3 px-5 rounded-xl border border-gray-700 mt-8' >
                <h5 className="text-md font-bold mb-3 text-gray-400">Production IDs</h5>
                {/* android */}
                <div className="flex gap-5">
                  <div className="mb-4 w-full">
                    <label htmlFor="android_rewarded_ad_production_id" className="block text-sm text-gray-500">
                      Android Rewarded Ad Production ID
                    </label>
                    <input
                      type="text"
                      id="android_rewarded_ad_production_id"
                      name="android_rewarded_ad_production_id"
                      value={config['admob-ad-units']['rewarded-ad']['production-ids'].android}
                      onChange={(e) => handleInputChange(['admob-ad-units', 'rewarded-ad', 'production-ids', 'android'], e.target.value)}
                      className="mt-1 p-2.5 focus:outline-gray-500 focus:outline-2 block w-full shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800" />
                  </div>
                  {/* iOS */}
                  <div className="mb-4 w-full">
                    <label htmlFor="ios_rewarded_ad_production_id" className="block text-sm text-gray-500">
                      iOS Rewarded Ad Production ID
                    </label>
                    <input
                      type="text"
                      id="ios_rewarded_ad_production_id"
                      name="ios_rewarded_ad_production_id"
                      value={config['admob-ad-units']['rewarded-ad']['production-ids'].iOS}
                      onChange={(e) => handleInputChange(['admob-ad-units', 'rewarded-ad', 'production-ids', 'iOS'], e.target.value)}
                      className="mt-1 p-2.5 focus:outline-gray-500 focus:outline-2 block w-full shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ad Units Visibility */}
          <div className='p-3 px-5 rounded-xl border border-gray-700 mt-8' >
            <h3 className="text-lg text-gray-400 font-bold">Ad Units Visibility</h3>
            {/* android */}
            <div className='p-3 px-5 rounded-xl border border-gray-700 mt-8' >
              <h4 className="text-md font-bold mb-3 text-gray-400">Android Ad</h4>
              {/* show-app-opener-ad */}
              <div className="mb-4 flex gap-2 items-center">
                <input
                  type="checkbox"
                  id="show-app-opener-ad"
                  name="show-app-opener-ad"
                  checked={config['ad_units_visibility'].android['show-app-opener-ad']}
                  onChange={(e) => handleInputChange(['ad_units_visibility', 'android', 'show-app-opener-ad'], e.target.checked)}
                  className="p-2.5 block shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800 h-4" />
                <label htmlFor="show-app-opener-ad" className="block text-sm text-gray-500">
                  Show App Opener Ad
                </label>
              </div>

              {/* show-native-ad */}
              <div className="mb-4 flex gap-2 items-center">
                <input
                  type="checkbox"
                  id="show-native-ad"
                  name="show-native-ad"
                  checked={config['ad_units_visibility'].android['show-native-ad']}
                  onChange={(e) => handleInputChange(['ad_units_visibility', 'android', 'show-native-ad'], e.target.checked)}
                  className="p-2.5 block shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800 h-4" />
                <label htmlFor="show-native-ad" className="block text-sm text-gray-500">
                  Show Native Ad
                </label>
              </div>

              {/* show-interstitial-ad-onTapOfImage */}
              <div className="mb-4 flex gap-2 items-center">
                <input
                  type="checkbox"
                  id="show-interstitial-ad-onTapOfImage"
                  name="show-interstitial-ad-onTapOfImage"
                  checked={config['ad_units_visibility'].android['show-interstitial-ad-onTapOfImage']}
                  onChange={(e) => handleInputChange(['ad_units_visibility', 'android', 'show-interstitial-ad-onTapOfImage'], e.target.checked)}
                  className="p-2.5 block shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800 h-4" />
                <label htmlFor="show-interstitial-ad-onTapOfImage" className="block text-sm text-gray-500">
                  Show Interstitial Ad On Tap Of Image
                </label>
              </div>

              {/* show-interstitial-ad-whenGetBackFromImages */}
              <div className="mb-4 flex gap-2 items-center">
                <input
                  type="checkbox"
                  id="show-interstitial-ad-whenGetBackFromImages"
                  name="show-interstitial-ad-whenGetBackFromImages"
                  checked={config['ad_units_visibility'].android['show-interstitial-ad-whenGetBackFromImages']}
                  onChange={(e) => handleInputChange(['ad_units_visibility', 'android', 'show-interstitial-ad-whenGetBackFromImages'], e.target.checked)}
                  className="p-2.5 block shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800 h-4" />
                <label htmlFor="show-interstitial-ad-whenGetBackFromImages" className="block text-sm text-gray-500">
                  Show Interstitial Ad When Get Back From Images
                </label>
              </div>

              {/* show-rewarded-ad-on-download-image */}
              <div className="mb-4 flex gap-2 items-center">
                <input
                  type="checkbox"
                  id="show-rewarded-ad-on-download-image"
                  name="show-rewarded-ad-on-download-image"
                  checked={config['ad_units_visibility'].android['show-rewarded-ad-on-download-image']}
                  onChange={(e) => handleInputChange(['ad_units_visibility', 'android', 'show-rewarded-ad-on-download-image'], e.target.checked)}
                  className="p-2.5 block shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800 h-4" />
                <label htmlFor="show-rewarded-ad-on-download-image" className="block text-sm text-gray-500">
                  Show Rewarded Ad On Download Image
                </label>
              </div>

              {/* show-rewarded-ad-on-set-image */}
              <div className="mb-4 flex gap-2 items-center">
                <input
                  type="checkbox"
                  id="show-rewarded-ad-on-set-image"
                  name="show-rewarded-ad-on-set-image"
                  checked={config['ad_units_visibility'].android['show-rewarded-ad-on-set-image']}
                  onChange={(e) => handleInputChange(['ad_units_visibility', 'android', 'show-rewarded-ad-on-set-image'], e.target.checked)}
                  className="p-2.5 block shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800 h-4" />
                <label htmlFor="show-rewarded-ad-on-set-image" className="block text-sm text-gray-500">
                  Show Rewarded Ad On Set Image
                </label>
              </div>
            </div>

            {/* iOS */}
            <div className='p-3 px-5 rounded-xl border border-gray-700 mt-8' >
              <h4 className="text-md font-bold mb-3 text-gray-400">iOS Ad</h4>
              {/* show-app-opener-ad */}
              <div className="mb-4 flex gap-2 items-center">
                <input
                  type="checkbox"
                  id="show-app-opener-ad"
                  name="show-app-opener-ad"
                  checked={config['ad_units_visibility'].iOS['show-app-opener-ad']}
                  onChange={(e) => handleInputChange(['ad_units_visibility', 'iOS', 'show-app-opener-ad'], e.target.checked)}
                  className="p-2.5 block shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800 h-4" />
                <label htmlFor="show-app-opener-ad" className="block text-sm text-gray-500">
                  Show App Opener Ad
                </label>
              </div>

              {/* show-native-ad */}
              <div className="mb-4 flex gap-2 items-center">
                <input
                  type="checkbox"
                  id="show-native-ad"
                  name="show-native-ad"
                  checked={config['ad_units_visibility'].iOS['show-native-ad']}
                  onChange={(e) => handleInputChange(['ad_units_visibility', 'iOS', 'show-native-ad'], e.target.checked)}
                  className="p-2.5 block shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800 h-4" />
                <label htmlFor="show-native-ad" className="block text-sm text-gray-500">
                  Show Native Ad
                </label>
              </div>

              {/* show-interstitial-ad-onTapOfImage */}
              <div className="mb-4 flex gap-2 items-center">
                <input
                  type="checkbox"
                  id="show-interstitial-ad-onTapOfImage"
                  name="show-interstitial-ad-onTapOfImage"
                  checked={config['ad_units_visibility'].iOS['show-interstitial-ad-onTapOfImage']}
                  onChange={(e) => handleInputChange(['ad_units_visibility', 'iOS', 'show-interstitial-ad-onTapOfImage'], e.target.checked)}
                  className="p-2.5 block shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800 h-4" />
                <label htmlFor="show-interstitial-ad-onTapOfImage" className="block text-sm text-gray-500">
                  Show Interstitial Ad On Tap Of Image
                </label>
              </div>

              {/* show-interstitial-ad-whenGetBackFromImages */}
              <div className="mb-4 flex gap-2 items-center">
                <input
                  type="checkbox"
                  id="show-interstitial-ad-whenGetBackFromImages"
                  name="show-interstitial-ad-whenGetBackFromImages"
                  checked={config['ad_units_visibility'].iOS['show-interstitial-ad-whenGetBackFromImages']}
                  onChange={(e) => handleInputChange(['ad_units_visibility', 'iOS', 'show-interstitial-ad-whenGetBackFromImages'], e.target.checked)}
                  className="p-2.5 block shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800 h-4" />
                <label htmlFor="show-interstitial-ad-whenGetBackFromImages" className="block text-sm text-gray-500">
                  Show Interstitial Ad When Get Back From Images
                </label>
              </div>

              {/* show-rewarded-ad-on-download-image */}
              <div className="mb-4 flex gap-2 items-center">
                <input
                  type="checkbox"
                  id="show-rewarded-ad-on-download-image"
                  name="show-rewarded-ad-on-download-image"
                  checked={config['ad_units_visibility'].iOS['show-rewarded-ad-on-download-image']}
                  onChange={(e) => handleInputChange(['ad_units_visibility', 'iOS', 'show-rewarded-ad-on-download-image'], e.target.checked)}
                  className="p-2.5 block shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800 h-4" />
                <label htmlFor="show-rewarded-ad-on-download-image" className="block text-sm text-gray-500">
                  Show Rewarded Ad On Download Image
                </label>
              </div>

              {/* show-rewarded-ad-on-set-image */}
              <div className="mb-4 flex gap-2 items-center">
                <input
                  type="checkbox"
                  id="show-rewarded-ad-on-set-image"
                  name="show-rewarded-ad-on-set-image"
                  checked={config['ad_units_visibility'].iOS['show-rewarded-ad-on-set-image']}
                  onChange={(e) => handleInputChange(['ad_units_visibility', 'iOS', 'show-rewarded-ad-on-set-image'], e.target.checked)}
                  className="p-2.5 block shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800 h-4" />
                <label htmlFor="show-rewarded-ad-on-set-image" className="block text-sm text-gray-500">
                  Show Rewarded Ad On Set Image
                </label>
              </div>
            </div>
          </div>

        </div>
        {/* search-categories */}
        <div className='p-5 rounded-2xl border border-gray-700 mt-8' >
          <h2 className="text-xl font-bold mb-6">Search Categories</h2>
          {/* categories */}
          {config['search-categories'].map((category, index) => (
            <div key={index} className='p-3 px-5 rounded-xl border border-gray-700 mt-8' >
              <div className='flex justify-between'>
                <h4 className="text-md font-bold mb-3 text-gray-400">{category.title}</h4>
                <MinusCircleIcon className='w-6 h-6 text-red-500 cursor-pointer' onClick={() => {
                  let categories = config['search-categories']
                  categories.splice(index, 1)
                  setConfig({ ...config, 'search-categories': categories })
                }} />
              </div>
              {/* title */}
              <div className="flex gap-3 mb-4">
                <div className="w-full">
                  <label htmlFor="title" className="block text-sm text-gray-500">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={category.title}
                    onChange={(e) => handleInputChange(['search-categories', index, 'title'], e.target.value)}
                    className="mt-1 p-2.5 focus:outline-gray-500 focus:outline-2 block w-full shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800" />
                </div>
                {/* bg-image */}
                <div className="w-full">
                  <label htmlFor="bg-image" className="block text-sm text-gray-500">
                    Background Image
                  </label>
                  <input
                    type="text"
                    id="bg-image"
                    name="bg-image"
                    value={category["bg-image"]}
                    onChange={(e) => handleInputChange(['search-categories', index, 'bg-image'], e.target.value)}
                    className="mt-1 p-2.5 focus:outline-gray-500 focus:outline-2 block w-full shadow-sm sm:text-sm border-gray-300 ring-0 outline-none rounded-lg bg-gray-800" />
                </div>
              </div>
            </div>
          ))}

          <button className='my-5 mb-3 rounded-xl border border-gray-500 bg-gray-700 py-2 px-5' onClick={() => {
            let categories = config['search-categories']
            categories.push({
              title: '',
              'bg-image': ''
            })
            setConfig({ ...config, 'search-categories': categories })
          }}>
            Add Category
          </button>

        </div>


        <button
          type="submit"
          className="my-5 mb-3 rounded-xl border border-gray-600 bg-blue-700 py-2 px-5"
        >
          Save Changes
        </button>
      </form >
    </div >
  );
}

export default Home
