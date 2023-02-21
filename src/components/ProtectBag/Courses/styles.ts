import { styled } from '../../../../stitches.config';

export const Container = styled('div', {
    padding: '80px 0px',
    position: 'relative',

    '@sm': {
        padding: '0px 0px 40px',
    }
});

export const TitleContainer = styled('div', {
    marginBottom: '24px',

    'h2': {
        color: '$light_text_100',
        fontSize: '32px',
        lineHeight: '40px',
        fontWeight: '$header_1',
    },

    "@sm": {
        'h2': {
            textAlign: 'center',
            fontSize: '32px',
            lineHeight: '40px',
        },
    }
});

export const ContentCard = styled('div', {
    display: 'flex',
    gap: '32px',
    borderRadius: '8px',
    flexWrap: 'wrap',
});

export const CardFeedback = styled('div', {
    maxWidth: '330px',
    minHeight: '283px',
    background: '#F7F7F7',
    borderRadius: '$sm',
});

export const FeedbackImage = styled('div', {

    'img': {
        width: '100%',
        borderRadius: '8px 8px 0px 0px',
    }
});

export const FeedbackText = styled('div', {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    'p': {
        color: '#2D2E2E',
        marginBottom: '18px',
    },

    'a': {
        padding: '12px',
        borderRadius: '8px',
        background: '$secondary_900',
        color: '#fff',
        fontWeight: '$body_3',
        cursor: 'pointer',
    }
});