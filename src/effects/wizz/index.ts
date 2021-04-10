/*
 Copyright 2020 Nurjin Jafar
 Copyright 2020 Nordeck IT + Consulting GmbH.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
import ICanvasEffect from '../ICanvasEffect';

export type ConfettiOptions = {
    /**
     * max confetti count
     */
    maxCount: number,
    /**
     * particle animation speed
     */
    speed: number,
    /**
     * the confetti animation frame interval in milliseconds
     */
    frameInterval: number,
    /**
     * the alpha opacity of the confetti (between 0 and 1, where 1 is opaque and 0 is invisible)
     */
    alpha: number,
    /**
     * use gradient instead of solid particle color
     */
    gradient: boolean,
}

type ConfettiParticle = {
    color: string,
    color2: string,
    x: number,
    y: number,
    diameter: number,
    tilt: number,
    tiltAngleIncrement: number,
    tiltAngle: number,
}

export const DefaultOptions: ConfettiOptions = {
    maxCount: 150,
    speed: 3,
    frameInterval: 15,
    alpha: 1.0,
    gradient: false,
};

export default class Wizz implements ICanvasEffect {
    private readonly options: ConfettiOptions;

    constructor(options: { [key: string]: any }) {
        this.options = {...DefaultOptions, ...options};
    }

  

    public isRunning: boolean;

    public start = async (canvas: HTMLCanvasElement, roomView: RoomView, timeout = 3000) => {
        if (!canvas) {
            return;
        }
        document.getElementsByClassName("mx_RoomView")[0].classList.add('mx_RoomViewWizz')
        setTimeout(function(){
            document.getElementsByClassName("mx_RoomView")[0].classList.remove('mx_RoomViewWizz')
        },5000)
    }

    public stop = async () => {
        this.isRunning = false;
    }

}
