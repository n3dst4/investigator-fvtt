/// <reference types="vite-plugin-svgr/client" />

declare const Babele: any;

// this is for the pop out module - currently broken
declare namespace PopOut {
  interface DialogHookInfo {
    /** the parent app */
    app: Application;
    children: Array<any>;
    close: () => void;
    css: string;
    display: string;
    handle: string;
    header: HTMLElement;
    maximize: () => void;
    minimize: () => void;
    minimized: boolean;
    node: HTMLElement;
    position: {
      width: number;
      height: number;
      left: number;
      scale: number;
      top: number;
      zIndex: number;
    };
    /** unknown - signature probably wrong */
    render: () => void;
    window: Window;
  }
}
