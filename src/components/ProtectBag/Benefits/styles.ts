import { styled } from '../../../../stitches.config';

export const Container = styled('div', {
    position: 'relative',

    '@sm': {
        padding: '40px 0px',
    }
});

export const TitleContainer = styled('div', {
    textAlign: "center",
    marginBottom: '32px',

    'h2': {
        color: '$light_text_100',
        fontSize: '32px',
        lineHeight: '40px',
        fontWeight: '$header_1',

        'span': {
            color: '$secondary_900',
        },
    },


    "@sm": {
        textAlign: "initial",

        'h2': {
            fontSize: '24px',
            lineHeight: '32px',
        },
    }
});

export const ContentCard = styled('div', {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 28,
    justifyContent: 'center',
    color: '$light_text_100',

    "@sm": {
        display: 'grid',
        gridTemplateColumns: '1fr',
    }
});


export const ContentCardItem = styled('div', {
    maxWidth: '456px',
    maxHeight: '403px',
    background: '#fff',
    borderRadius: '8px',
    boxShadow: '0px 16px 24px rgba(0, 0, 0, 0.12)',

    flexBasis: 'calc(33.33% - 20px)',

    'img': {
        borderRadius: '8px 8px 0 0'
    },

    'div': {
        padding: '24px',

        'h3': {
            fontWeight: '800',
            fontSize: '24px',
            lineHeight: '30px',
            marginBottom: '24px'
        },

        'p': {
            fontSize: '16px',
            lineHeight: '23px',
        },
    },
});

export const CircleArrow = styled('div', {
    width: '56px',
    height: '56px',
    background: '$primary_600',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
})

export const ImageBackground = styled('div', {
    'img': {
        content: '',
        position: 'absolute',
        width: '354px',
        objectFit: 'contain',
        right: 0,
        bottom: 0,
        zIndex: 0,
    },
})