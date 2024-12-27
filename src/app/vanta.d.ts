declare module "vanta/dist/vanta.net.min" {
  import { Base } from "vanta";

  interface VantaEffectOptions {
    el: HTMLElement;
    THREE?: unknown;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    maxDistance?: number;
    spacing?: number;
    color?: number;
    backgroundColor?: number;
  }

  export default function VantaNet(options: VantaEffectOptions): Base;
}

declare module "vanta" {
  export class Base {
    destroy(): void;
  }
}
