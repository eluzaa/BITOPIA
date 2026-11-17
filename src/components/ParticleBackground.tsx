
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

interface ParticleBackgroundProps {
  className?: string;
  variant?: "purple" | "blue" | "light" | "elegant";
}

const ParticleBackground = ({ className, variant = "purple" }: ParticleBackgroundProps) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  // Define color schemes based on variant
  const getColorScheme = () => {
    switch(variant) {
      case "blue":
        return {
          primary: "#0EA5E9",
          secondary: "#38BDF8"
        };
      case "light":
        return {
          primary: "#A1A1AA",
          secondary: "#D4D4D8"
        };
      case "elegant":
        return {
          primary: "#9F9EA1",
          secondary: "#C8C8C9"
        };
      case "purple":
      default:
        return {
          primary: "#8B5CF6",
          secondary: "#A78BFA"
        };
    }
  };

  const colors = getColorScheme();

  // Define particle options based on variant
  const getParticleOptions = () => {
    const baseOptions = {
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      particles: {
        color: {
          value: colors.primary,
        },
        links: {
          color: colors.secondary,
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none" as const, // Use const assertion to fix type issue
          enable: true,
          outModes: {
            default: "bounce" as const, // Fix type issue with const assertion
          },
          random: false,
          speed: 1.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.6,
        },
        shape: {
          type: ["circle", "star", "triangle"],
        },
        size: {
          value: { min: 1, max: 3 },
        },
        twinkle: {
          particles: {
            enable: true,
            frequency: 0.05,
            opacity: 1
          }
        }
      },
      detectRetina: true,
    };
    
    // Customize for elegant style
    if (variant === "elegant") {
      return {
        ...baseOptions,
        particles: {
          ...baseOptions.particles,
          number: {
            ...baseOptions.particles.number,
            value: 50,
          },
          move: {
            ...baseOptions.particles.move,
            speed: 0.8,
            direction: "none" as const, // Use const assertion here too
            outModes: {
              default: "bounce" as const, // Fix type issue with const assertion
            },
          },
          opacity: {
            value: 0.4,
          },
          size: {
            value: { min: 0.8, max: 2.5 },
          },
          shape: {
            type: ["circle"],
          },
          links: {
            ...baseOptions.particles.links,
            opacity: 0.3,
            width: 0.8,
          }
        }
      };
    }
    
    return baseOptions;
  };

  return (
    <Particles
      className={`${className || ""} absolute inset-0 -z-10`}
      id="tsparticles"
      init={particlesInit}
      options={getParticleOptions()}
    />
  );
};

export default ParticleBackground;
