'use client'
import ParticleConfig from "@/config/ParticleConfig";
import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Container, Engine } from "tsparticles-engine";


const ParticleBackground = () => {
    const particlesInit = useCallback(async (engine : Engine) => { await loadFull(engine)}, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => { await container }, []);

    return (
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={ParticleConfig}
                width="100vh"
                height="100vh"
                />
    );
};
export default ParticleBackground;