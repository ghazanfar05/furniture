export const fadein = (directin, delay) => {
    return {
        hidden: {
            y: directin === 'up' ? 50 : directin === 'down' ? -50 : 0,
            x: directin === 'left' ? 50 : directin === 'right' ? -50 : 0,
        },
        show: {
            y:0,
            x:0,
            oposity:1,
            transition: {
                type: 'tween',
                duration:0.8,
                delay: delay,
                ease: [0.25,0.25,0.25,0.75],

            }
        }
    }
}