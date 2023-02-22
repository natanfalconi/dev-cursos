import { styled } from '../../../../stitches.config';

export const Container = styled('div', {
    padding: '80px 0',
    position: 'relative',

    '@sm': {
        padding: '50px 0px 0px',
    }
});

export const ContainerImage = styled('div', {
    'img': {
        borderRadius: '50%',
    },

    "@sm": {
        img: {
            width: '100%'
        }
    }
});

export const TitleContainer = styled('div', {
    'span': {
        fontSize: '32px',
        color: '$secondary_900',
    },

    'h2': {
        color: '$gray_25',
        fontSize: '32px',
        lineHeight: '$header_4',
        fontWeight: '$header_1',
        marginBottom: '12px',
    },

    'h6': {
        color: '$gray_200',
        fontSize: '18px',
        marginBottom: '24px',
    },

    'p': {
        marginBottom: '24px',
        fontSize: '$body_1',
        lineHeight: '$body_1',
        color: '$gray_25',
    },

    "@sm": {
        'h2': {
            margin: '24px 0px 12px',
            fontSize: '20px',
            lineHeight: '25px',
        },
    }
});