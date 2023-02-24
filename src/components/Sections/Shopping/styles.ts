import { styled } from '../../../../stitches.config';

export const Container = styled('div', {
    position: 'relative',
    fontFamily: '$primary',
    padding: '80px 0px',

    background: '#372772',

    "@sm": {
        padding: '40px 0px',
    }
});

export const TitleContainer = styled('div', {
    width: '100%',
    height: '72px',
    background: '#3A2449',
    textTransform: 'uppercase',

    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',

    'h2': {
        color: '#fff',
        fontSize: '24px',
        lineHeight: '47px',
        fontWeight: '$header_1',
    },

    "@sm": {
        'h2': {
            textAlign: 'center',
            padding: '0px 8px',
            fontSize: '18px',
            lineHeight: '20px',
        },
    }
});


export const ContainerShopping = styled('div', {
    'h2': {
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: '36px',
        lineHeight: '48px',
        fontWeight: '800',
    },

    '@sm': {
        'h2': {
            fontSize: '28px',
            lineHeight: '40px'
        }
    }
});

export const Options = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '32px',
    transition: '400ms',

    'a': {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#03C956',
        borderRadius: '8px',
        padding: '18px',
        gap: '16px',

        '&:hover': {
            backgroundColor: '#03B54D',
            opacity: '0.9',
        }
    },

    "@sm": {
        justifyContent: 'left',
        'a': {
            gap: '6px',
            fontSize: '14px',
            padding: '18px 8px',
        },
    }
});
