import { styled } from '../../../../stitches.config';

export const Container = styled('div', {
    position: 'relative',
    fontFamily: '$primary',
    padding: '80px 0px',

    background: 'linear-gradient(90deg, rgba(10,161,201,1) 6%, rgba(4,98,122,1) 64%)',
});

export const TitleContainer = styled('div', {
    width: '100%',
    height: '72px',
    background: '#252A37',
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
    }
});

export const Options = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '32px',
    transition: '400ms',

    'a': {
        backgroundColor: '#60A34E',
        borderRadius: '8px',
        padding: '18px',

        '&:hover': {
            backgroundColor: '#60A322',
            opacity: '0.9',
        }
    },

    "@sm": {
        'a': {
            padding: '18px 8px',
        },
    }
});
