
import {useCallback} from 'react';
import Particles from 'react-tsparticles';
import type {Container, Engine} from 'tsparticles-engine';
import {loadFull} from 'tsparticles';

export const Particle = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);


    return (
        <Particles id="tsparticles"
                   init={particlesInit}
                   loaded={particlesLoaded}
                   options={

                       {
                           "fullScreen": {
                               "enable": true,
                               "zIndex": 1
                           },
                           "particles": {
                               "number": {
                                   "value": 6,
                                   "density": {
                                       "enable": true,
                                       "area": 800
                                   }
                               },
                               "color": {
                                   "value": "#1b1e34"
                               },
                               "shape": {
                                   "type": "polygon",
                                   "polygon": {
                                       "sides": 6
                                   }
                               },
                               "opacity": {
                                   "value": { "min": 0.3, "max": 0.5 }
                               },
                               "size": {
                                   "value": { "min": 100, "max": 160 }
                               },
                               "move": {
                                   "enable": true,
                                   "speed": 6,
                                   "direction": "none",
                                   "outModes": "out"
                               }
                           },
                           "interactivity": {
                               "events": {
                                   "onHover": {
                                       "enable": true,
                                       "mode": "bubble"
                                   }
                               },
                               "modes": {
                                   "bubble": {
                                       "distance": 400,
                                       "duration": 2,
                                       "size": 40,
                                       "opacity": 0.8,
                                       "speed": 3,
                                       "color": "#ff651c"
                                   }
                               }
                           },
                           "background": {
                               "color": "#000"
                           }
                       }

                   }
        />
    );
};