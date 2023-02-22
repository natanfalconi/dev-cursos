import { styled } from '../../../../stitches.config';

export const Container = styled('div', {
    padding: '80px 0px 50px',
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
    flexWrap: 'wrap',
    gap: '32px',
    borderRadius: '8px',

    // transition: 'transform ease-in-out',
    // animationDelay: '0.4s'

});

export const CardCourses = styled('div', {
    maxWidth: '330px',
    minHeight: '283px',
    background: '#fff',
    borderRadius: '$sm',
    boxShadow: '$elevation03'
    // '&:hover': {
    //     transform: 'translateY(-20px)',
    // }
});

export const FeedbackImage = styled('div', {
    'img': {
        width: '100%',
        borderRadius: '8px 8px 0px 0px',
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
        widows: '100%',

        '&:hover': {
            backgroundColor: '$success_700',
        }
    },
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
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        backgroundColor: '#60A34E',
        color: '#fff',
        fontWeight: '$body_3',
        cursor: 'pointer',

        '&:hover': {
            backgroundColor: '$success_700',
        }
    }
});