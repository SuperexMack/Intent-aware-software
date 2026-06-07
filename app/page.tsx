import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-6">
            Intent Aware Study Table
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A smart study table powered by ESP32, sensors, and real-time
            monitoring that understands student activity and helps create a
            more focused and productive learning environment.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Our Solution?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-3">
              Real-Time Monitoring
            </h3>
            <p className="text-gray-400">
              Track student presence and study habits using smart sensors.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-3">
              Motion Detection
            </h3>
            <p className="text-gray-400">
              Detect activity around the study table and generate insights.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-3">
              Parent Dashboard
            </h3>
            <p className="text-gray-400">
              View sensor data and study status through an intuitive dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-purple-700 to-blue-700 rounded-3xl p-10 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Buy the Software Package
          </h2>

          <p className="text-lg mb-8">
            Get complete dashboard source code, ESP32 integration, and setup
            documentation.
          </p>

          <div className="text-5xl font-bold mb-8">
            ₹499 
          </div>

          <div className="text-5xl font-bold mb-8">
            but free for now
          </div>

          <a
            href="/downloads/app.zip"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black font-bold px-8 py-4 rounded-xl hover:scale-105 transition"
          >
            Download Software
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-gray-400">
        © 2026 Intent Aware Study Table
      </footer>
    </main>
  );
}