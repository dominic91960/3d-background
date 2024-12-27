import React, { useState, useEffect, useRef } from "react";

import { Slab } from "react-loading-indicators";
import { Base } from "vanta";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

interface VantaBackgroundProps {
  children?: React.ReactNode;
}
const VantaBackground: React.FC<VantaBackgroundProps> = ({ children }) => {
  const [vantaEffect, setVantaEffect] = useState<Base | null>(null);
  const [loading, setLoading] = useState(true);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setLoading(true);
      setVantaEffect(
        NET({
          el: vantaRef.current!,
          THREE: THREE,
          mouseControls: true,
          touchControls: false,
          gyroControls: false,
          scale: 1.0,
          scaleMobile: 1.0,
          maxDistance: 0.0,
          spacing: 20.0,
          color: 0xffffff,
          backgroundColor: 0x000000,
          // backgroundColor: 0x012547,
        })
      );
      setLoading(false);
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef}>
      {loading && (
        <div className="bg-black h-screen flex items-center justify-center">
          <Slab color="#ffffff" size="medium" textColor="#ffffff" />
        </div>
      )}
      {!loading && children}
    </div>
  );
};

export default VantaBackground;
