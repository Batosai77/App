'use client'
import ParticleConfig from "@/config/ParticleConfig";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <div id='particle-background'>

            <Particles
                id="tsparticles"
                particlesLoaded = 'particlesLoaded'
                init={particlesInit}
                loaded={particlesLoaded}
                options={ParticleConfig}
                width="100vh"
                height="100vh"
                />
        </div>
    );
};
export default ParticleBackground;