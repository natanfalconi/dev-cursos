import { styled } from '../../../../stitches.config';

export const Container = styled('div', {
    padding: '0px 0 80px',
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

    '@sm': {
        display: 'grid',
        gridTemplateColumns: '1fr',
    }
});

export const CardFeedback = styled('div', {
    maxWidth: '330px',
    minHeight: '283px',
    background: '#F7F7F7',
    borderRadius: '$sm',
    padding: '28px',
});

export const FeedbackImage = styled('div', {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '16px',
    marginBottom: '16px',
});

export const FeedbackText = styled('div', {
    'p': {
        color: '#2D2E2E',
        marginBottom: '24px',
    },

    'h6': {
        color: '#2D2E2E',
        fontSize: '$body_1',
        lineHeight: '',
        fontWeight: '$body_3',
    }
});