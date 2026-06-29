"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#050816] px-6 text-center">
      
      <div className="absolute h-96 w-96 rounded-full bg-red-500/10 blur-[120px]" />

      <div className="relative z-10">
        <h1 className="text-[8rem] font-black text-red-500">
          ERROR
        </h1>

        <h2 className="mt-2 text-3xl font-bold text-white">
          System Malfunction Detected
        </h2>

        <p className="mt-6 max-w-xl text-gray-400">
          {error.message}
        </p>

        <button
          onClick={() => reset()}
          className="mt-10 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 font-bold text-white transition hover:scale-105"
        >
          Reboot System
        </button>
      </div>
    </div>
  );
}