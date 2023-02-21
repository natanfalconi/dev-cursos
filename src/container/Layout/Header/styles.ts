import { styled } from '../../../../stitches.config';

export const ContainerDesktop = styled('header', {
    background: '$gray_25',
    color: '#000',
    position: 'fixed',
    zIndex: 2,
    width: '100%',

    boxShadow: '0px 16px 24px rgba(0, 0, 0, 0.12)',
});

export const PromotionTitle = styled('div', {
    'h4': {
        fontSize: '$header_5',
        textTransform: 'uppercase',
        color: '$text_light_100',
        lineHeight: '$body_1',
        fontWeight: '$header_1',
    },

    'span': {
        color: 'red',
        fontWeight: '$header_1'
    },

    '@sm': {
        'h4': {
            fontSize: '$caption_1',
            textAlign: 'center',
        },

        'span': {
            fontSize: '30px'
        }
    }
});

export const ContantHeader = styled('div', {
    display: 'flex',
    height: '80px',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: '$primary',
});

export const NavLinks = styled('nav', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '14px',

    'a': {
        color: '',
        fontWeight: '$body_1',
        transition: '200ms',

        '&:hover': {
            color: '$secondary_900',
        },

        '&:last-child': {
            border: '1px solid $secondary_800',
            padding: '10px 16px',
            borderRadius: '100px',

            '&:hover': {
                backgroundColor: '$secondary_900',
                color: '#fff',
            },
        }
    },

    '@sm': {
        display: 'none'
    }
});

export const Navbar = styled(NavLinks, {
    '@sm': {
        display: 'block',
    }
});

export const NavListMobile = styled('ul', {
    listStyle: 'none',
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    paddingLeft: '24px',
    color: '$secondary_600',
});

export const NavLinkMobile = styled('a', {
    display: 'block',
    color: '#000',
    transition: '1s ease',
    padding: '16px 16px 16px 0',
    position: 'relative',
});