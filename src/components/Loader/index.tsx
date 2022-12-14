import { useCallback, useEffect, useState } from 'react';
import useStore from '../../store/index';
import useStyles from './styles';

export default function PlayerLoader() {
    const { classes } = useStyles();
    const shakaPlayer = useStore((state) => state.shakaPlayer);
    const isLoading = useStore((state) => state.isLoading);
    const setIsLoading = useStore((state) => state.setIsLoading);

    const handleBuffering = useCallback(() => {
        if (shakaPlayer) setIsLoading(shakaPlayer.isBuffering());
    }, [shakaPlayer]);

    useEffect(() => {
        shakaPlayer?.addEventListener('buffering', handleBuffering);

        return () => {
            shakaPlayer?.removeEventListener('buffering', handleBuffering);
        };
    }, [shakaPlayer]);

    return isLoading ? <div className={classes.playerLoader} /> : null;
}
