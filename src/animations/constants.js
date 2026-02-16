export const TRANSITION_DEFAULTS = {
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1],
};

export const STAGGER_DELAY = 0.12;

export const FADE_UP_VARIANTS = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: TRANSITION_DEFAULTS
    }
};
