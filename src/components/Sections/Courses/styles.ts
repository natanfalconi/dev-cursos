import { styled } from '../../../../stitches.config';

export const Container = styled('div', {
    padding: '80px 0px 50px',
    position: 'relative',

    '@sm': {
        padding: '40px 0px',
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
    flexWrap: 'wrap',
    gap: '32px',
    borderRadius: '8px',
});

export const CardCourses = styled('div', {
    maxWidth: '330px',
    minHeight: '283px',
    background: '#fff',
    borderRadius: '$sm',
    boxShadow: '$elevation03',

    transition: 'transform 0.3s ease',

    '&:hover': {
        transform: 'translateY(-10px)'
    },
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
        minHeight: '80px',
        color: '#2D2E2E',
        marginBottom: '18px',
    },

    'a': {
        padding: '12px',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        backgroundColor: '#03C956',
        color: '#fff',
        fontWeight: '$body_3',
        cursor: 'pointer',

        '&:hover': {
            backgroundColor: '#03B54D',
            opacity: '0.9',
        }
    }
});