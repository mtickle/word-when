export default function About({ onBack }) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center p-6 font-sans">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden mt-10">
        {/* Header */}
        <div className="bg-slate-800 p-6 text-center text-white relative">
         <button 
  onClick={onBack}
  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-slate-300 transition-colors flex items-center gap-1.5 font-medium p-2"
  aria-label="Go back"
>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={2.5} 
    stroke="currentColor" 
    className="w-5 h-5"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" 
    />
  </svg>
 
</button>
          <h1 className="text-2xl font-bold tracking-wide">About Word When</h1>
        </div>

        {/* Content */}
        <div className="p-8 text-slate-700 space-y-6 leading-relaxed">


          <p>
            The way this app helps you map out your emotions actually has
            hundreds of years of research behind it.
          </p>

          <div>
            <h2 className="text-lg font-bold text-slate-800 mb-2">
              The 1600s: René Descartes
            </h2>
            <p>
              The foundational research for this concept began in 1649 when
              philosopher René Descartes published a treatise called{" "}
              <em>The Passions of the Soul</em>. Descartes proposed that there
              were six primary passions: wonder, love, hatred, desire, joy, and
              sadness. He believed that all other feelings were simply
              combinations or variations of these fundamental states.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-800 mb-2">
              The Modern Era: Robert Plutchik
            </h2>
            <p>
              In 1980, psychologist Robert Plutchik expanded on this historical
              foundation to create his famous Wheel of Emotions. Plutchik
              identified eight primary emotions (anger, anticipation, joy,
              trust, fear, surprise, sadness, and disgust). He brilliantly
              arranged them in a circle to show how they interact, much like
              primary colors blending on a painter's palette.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-200">
            <p className="italic text-slate-500 text-center">
              By combining Plutchik's psychological framework with the timeless
              truth of scripture, <strong>Word When</strong> is designed to help
              you navigate complex feelings and find peace when things feel
              overwhelming.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
