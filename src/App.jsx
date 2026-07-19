import emotionData from "@data/data.json";
import { useState } from "react";
import About from "./About";

export default function EmotionApp() {
  const [selectedCore, setSelectedCore] = useState(null);
  const [selectedFeeling, setSelectedFeeling] = useState(null);
  const [showAbout, setShowAbout] = useState(false);

  const reset = () => {
    setSelectedCore(null);
    setSelectedFeeling(null);
  };

  if (showAbout) {
    return <About onBack={() => setShowAbout(false)} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center p-6 font-sans">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden mt-10">
        {/* Header - Removed the top left reset button */}
        <div className="bg-slate-800 p-6 text-center text-white relative">
          <h1 className="text-2xl font-bold tracking-wide">Word When</h1>
        </div>

        <div className="p-6">
          {/* View 1: Select Core Emotion */}
          {!selectedCore && (
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
          )}

          {/* View 2: Select Specific Feeling */}
          {selectedCore && !selectedFeeling && (
            <div className="animate-fade-in">
              <h2 className="text-lg text-white-600 mb-4 text-center">
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
                    className={`${selectedCore.color} text-white tracking-wide uppercase border-2 border-transparent hover:border-slate-200 py-4 rounded-lg font-semibold shadow-sm hover:opacity-90 transition-all`}
                  >
                    {feeling.name}
                  </button>
                ))}

                {/* New Start Over Button: Spans 2 columns, muted colors */}
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
            <div className="animate-fade-in text-center py-8">
              <div className="mb-6 inline-block p-4 rounded-full bg-slate-100">
                <span className="text-3xl">📖</span>
              </div>
              <h3 className="text-2xl font-bold text-white-800 mb-2">
                {selectedFeeling.reference}
              </h3>
              <p className="text-white-600 italic mb-8 px-4 text-lg">
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
        <p className="text-center text-white-500 text-sm mt-1 mb-3 ml-3 mr-3">
          This app was built for Piper Tickle to help her navigate complex emotions with the help of scripture.{" "}
          <button
            onClick={() => setShowAbout(true)}
            className="text-sm underline opacity-80 hover:opacity-100 transition-opacity"
          >
            Read more.
          </button>
        </p>
      </div>
    </div>
  );
}
