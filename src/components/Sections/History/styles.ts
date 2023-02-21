import { styled } from '../../../../stitches.config';

export const Container = styled('div', {
    padding: '80px 0',
    position: 'relative',

    '@sm': {
        padding: '40px 0px 0px',
    }
});

export const ContainerImage = styled('div', {
    width: '100%',
    height: '100%',

    'img': {
        borderRadius: '50%',
    }
});

export const TitleContainer = styled('div', {
    'h2': {
        color: '$gray_25',
        fontSize: '32px',
        lineHeight: '$header_4',
        fontWeight: '$header_1',
        marginBottom: '12px',

        'span': {
            color: '$secondary_900',
        },
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