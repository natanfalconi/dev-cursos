import { styled } from '../../../../stitches.config';

export const Container = styled('div', {
    padding: '130px 0',
    backgroundColor: 'rgba(0, 0, 0)',
    background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.5)), url(img/bg-hero.jpg)`,
    backgroundRepeat: 'no-repeat',
    opacity: '0.98',
    backgroundSize: 'cover',
    color: '$light_100',

    '@sm': {
        background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(img/hero-mobile.webp)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },

    position: 'relative',
});

export const ContainerText = styled('div', {
    textAlign: 'center',

    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    'h2': {
        padding: '12px 48px',
        textTransform: 'uppercase',
        borderRadius: '48px',
        background: '$secondary_900',
        color: '#fff',
        fontSize: '$header_4',
        lineHeight: '$header_5'
    },

    "@sm": {
        'h2': {
            fontSize: '16px',
            padding: '10px',
        }
    }
});

export const ContentText = styled('div', {

    'h4': {
        margin: '32px 0px',
        color: '#fff',
        fontWeight: '$header_1',
        fontSize: '$header_1',
        lineHeight: '50px'
    },

    'p': {
        fontSize: '24px',
        lineHeight: '30px',
        color: '#fff'
    },

    "@sm": {
        textAlign: 'left',

        'h4': {
            margin: '20px 0px',
            fontSize: '24px',
            lineHeight: '31px'
        },

        'p': {
            fontSize: '16px',
            lineHeight: '20px',
            color: '#fff'
        },
    }
});

export const CircleArrow = styled('div', {

    position: 'absolute',
    bottom: '-28px',
    left: '50%',
    transform: 'translateX(-50%)',

    width: '56px',
    height: '56px',
    background: '$secondary_900',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
});

export const LogoProtect = styled('div', {
    position: 'absolute',

    bottom: 20,
    right: 20,

})
