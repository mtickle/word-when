import emotionData from "@data/data.json";
import { useState } from "react";
import About from "./About";
import Help from "./Help";

export default function EmotionApp() {
  const [selectedCore, setSelectedCore] = useState(null);
  const [selectedFeeling, setSelectedFeeling] = useState(null);
  const [showAbout, setShowAbout] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const reset = () => {
    setSelectedCore(null);
    setSelectedFeeling(null);
  };

  if (showAbout) {
    return <About onBack={() => setShowAbout(false)} />;
  }

  if (showHelp) {
    return <Help onBack={() => setShowHelp(false)} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center p-6 font-sans">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden mt-10">
        
        {/* Header with new Help Icon */}
        <div className="bg-slate-800 p-6 text-center text-white relative">
          <h1 className="text-2xl font-bold tracking-wide">Word When</h1>
          <button
            onClick={() => setShowHelp(true)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-slate-300 transition-colors p-2"
            aria-label="Help and Installation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>

        <div className="p-6">
          {/* View 1: Select Core Emotion */}
          {!selectedCore && (
            <div className="animate-fade-in">
              <h2 className="text-lg text-slate-600 mb-4 text-center">
                I am feeling...
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {emotionData.emotions.map((emotion) => (
                  <button
                    key={emotion.core}
                    onClick={() => setSelectedCore(emotion)}
                    className={`${emotion.color} text-white py-8 rounded-xl font-bold text-xl shadow-sm hover:opacity-90 transition-opacity uppercase`}
                  >
                    {emotion.core}
                  </button>
                ))}
              </div>
            </div>
          )}


          {/* View 2: Select Specific Feeling */}
          {selectedCore && !selectedFeeling && (
            <div className="animate-fade-in">
              <h2 className="text-lg text-slate-600 mb-4 text-center">
                I am feeling{" "}
                <span
                  className={`font-bold ${selectedCore.color.replace(
                    "bg-",
                    "text-"
                  )}`}
                >
                  {selectedCore.core}
                </span>{" "}
                because I am...
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {selectedCore.feelings.map((feeling) => (
                  <button
                    key={feeling.name}
                    onClick={() => setSelectedFeeling(feeling)}
                    className={`${selectedCore.color} text-white py-8 rounded-xl font-bold text-xl shadow-sm hover:opacity-90 transition-opacity uppercase`}
                  >
                    {feeling.name}
                  </button>
                ))}

                {/* Start Over Button */}
                <button
                  onClick={reset}
                  className="col-span-2 mt-2 bg-slate-100 hover:bg-slate-200 text-slate-500 py-3 rounded-lg font-medium transition-colors"
                >
                  Start Over
                </button>
              </div>
            </div>
          )}

          {/* View 3: The Verse */}
          {selectedFeeling && (
            <div className="animate-fade-in text-center py-0">
              <h2 className="text-lg text-slate-600 mb-6 text-center">
                I am feeling{" "}
                <span
                  className={`font-bold ${selectedCore.color.replace(
                    "bg-",
                    "text-"
                  )}`}
                >
                  {selectedCore.core}
                </span>{" "}
                because I am{" "}
                <span
                  className={`font-bold uppercase ${selectedCore.color.replace(
                    "bg-",
                    "text-"
                  )}`}
                >
                  {selectedFeeling.name}
                </span>
              </h2>
              <div className="mb-6 inline-block p-4 rounded-full bg-slate-100">
                <span className="text-3xl">📖</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">
                {selectedFeeling.reference}
              </h3>
              <p className="text-slate-600 italic mb-8 px-4 text-lg">
                "{selectedFeeling.text}"
              </p>
              <button
                onClick={reset}
                className={`${selectedCore.color} text-white px-8 py-3 rounded-full font-bold shadow-md hover:shadow-lg transition-all`}
              >
                Done
              </button>
            </div>
          )}
        </div>

        {/* Conditionally render the about blurb only on View 1 */}
        {!selectedCore && (
          <p className="text-center text-slate-500 text-sm mt-1 mb-3 ml-3 mr-3 animate-fade-in">            
            It was built for Piper Tickle to help her navigate complex
            emotions with the help of scripture.{" "}
            <button
              onClick={() => setShowAbout(true)}
              className="text-sm underline opacity-80 hover:opacity-100 transition-opacity"
            >
              Read more.
            </button>
          </p>
        )}
      </div>
    </div>
  );
}
