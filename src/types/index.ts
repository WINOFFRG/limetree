import {
    Player as ShakaPlayer,
    ui as ShakaUI,
    extern as ShakaExtern,
} from 'shaka-player/dist/shaka-player.ui.debug';

export interface MediaTimeStats {
    mediaCurrentTime: number | undefined;
    mediaEndTime: number | undefined;
}

export interface PlayerRefs {
    player: ShakaPlayer;
    ui: ShakaUI.Overlay;
    videoElement: HTMLVideoElement;
}
