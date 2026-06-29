"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";

interface LoaderProviderProps {
  children: React.ReactNode;
}

export default function LoaderProvider({
  children,
}: LoaderProviderProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the loading animation has already been shown
    const hasLoaded = sessionStorage.getItem("dhack-loaded");

    if (hasLoaded) {
      setLoading(false);
      return;
    }

    // Show loader for the first visit only
    const timer = setTimeout(() => {
      sessionStorage.setItem("dhack-loaded", "true");
      setLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      {loading && <LoadingScreen />}

      {/* Website */}
      <div
        className={`transition-all duration-700 ${
          loading
            ? "pointer-events-none opacity-0 scale-[1.02]"
            : "pointer-events-auto opacity-100 scale-100"
        }`}
      >
        {children}
      </div>
    </>
  );
}