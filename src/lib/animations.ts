/* ═══════════════════════════════════════════════════
   TANZADE KOZMETIK — ANIMATION CONSTANTS
   Luxury cinematic transitions and motion presets
   ═══════════════════════════════════════════════════ */

/** Luxury easing curves */
export const EASE = {
  luxury: [0.25, 0.46, 0.45, 0.94] as const,
  smooth: [0.16, 1, 0.3, 1] as const,
  cinematic: [0.77, 0, 0.175, 1] as const,
  gentle: [0.4, 0, 0.2, 1] as const,
};

/** Duration presets (seconds) */
export const DURATION = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.7,
  cinematic: 1.2,
  reveal: 0.9,
};

/** Stagger delay for list items */
export const STAGGER = {
  fast: 0.05,
  normal: 0.1,
  slow: 0.15,
};

/** Common Framer Motion variants */
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASE.luxury,
    },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: DURATION.slow,
      ease: EASE.luxury,
    },
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASE.smooth,
    },
  },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASE.smooth,
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: DURATION.slow,
      ease: EASE.luxury,
    },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER.normal,
      delayChildren: 0.1,
    },
  },
};

export const slideDown = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: DURATION.normal,
      ease: EASE.smooth,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: DURATION.fast,
      ease: EASE.luxury,
    },
  },
};

export const navbarVariants = {
  transparent: {
    backgroundColor: "rgba(248, 247, 245, 0)",
    backdropFilter: "blur(0px)",
    borderBottomColor: "rgba(232, 226, 217, 0)",
  },
  solid: {
    backgroundColor: "rgba(248, 247, 245, 0.95)",
    backdropFilter: "blur(12px)",
    borderBottomColor: "rgba(232, 226, 217, 1)",
  },
};
