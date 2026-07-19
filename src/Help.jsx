import { useState } from "react";

export default function Help({ onBack }) {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // If using Formspree, the standard HTML form action handles the post,
    // but you can also use fetch() here for a seamless single-page experience.
    const form = e.target;

    fetch("https://formspree.io/f/xkodrlwq", {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setStatus("SUCCESS");
          form.reset();
        } else {
          setStatus("ERROR");
        }
      })
      .catch(() => setStatus("ERROR"));
  };

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
          <h1 className="text-2xl font-bold tracking-wide">Help & Install</h1>
        </div>

        <div className="p-6 h-[70vh] overflow-y-auto">
          {/* PWA Installation Section */}
          <section className="mb-8">
            <p className="text-sm text-slate-600 mb-4">  Privacy first. This app is completely ad-free and does not collect, store, or sell your personal data.</p>
          

            <h2 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2">
              How to Install
            </h2>

            <div className="mb-6 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <h3 className="font-bold text-slate-700 mb-2 flex items-center gap-2">
                iOS (iPhone/iPad)
              </h3>
              <ol className="list-decimal pl-5 text-slate-600 text-sm space-y-2 mb-2">
                <li>
                  Open <strong>Safari</strong> and navigate to{" "}
                  <code>wordwhen.app</code>.
                </li>
                <li>
                  Tap the <strong>Share</strong> button at the bottom of the
                  screen (the square with an arrow pointing up).
                </li>
                <li>
                  Scroll down the list and tap{" "}
                  <strong>Add to Home Screen</strong>.
                </li>
                <li>
                  Tap <strong>Add</strong> in the top right corner.
                </li>
              </ol>
              <p className="text-xs text-slate-400 italic mt-2">
                * Note: Chrome on iOS does not support home screen installation.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <h3 className="font-bold text-slate-700 mb-2 flex items-center gap-2">
                Android
              </h3>
              <ol className="list-decimal pl-5 text-slate-600 text-sm space-y-2">
                <li>
                  Open <strong>Chrome</strong> and navigate to{" "}
                  <code>wordwhen.app</code>.
                </li>
                <li>
                  Tap the <strong>Menu</strong> icon (three dots in the upper
                  right).
                </li>
                <li>
                  Tap <strong>Install and create shortcut</strong>.
                </li>
                <li>Follow the on-screen prompt to confirm.</li>
              </ol>
            </div>
          </section>

          {/* Contact Section */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2">
              Contact Support
            </h2>
            <p className="text-sm text-slate-600 mb-4">
              Running into an issue or have a suggestion? Send a message
              directly.
            </p>

            {status === "SUCCESS" && (
              <p className="text-green-600 text-sm text-center font-medium mt-2">
                Message sent successfully!
              </p>
            )}
            {status === "ERROR" && (
              <p className="text-red-600 text-sm text-center font-medium mt-2">
                Oops! There was a problem sending your message.
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 outline-none transition-all"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-slate-800 text-white font-bold py-3 rounded-lg shadow-md hover:bg-slate-700 transition-colors"
              >
                Send Message
              </button>


            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
