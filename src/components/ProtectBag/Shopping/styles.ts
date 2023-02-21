import { styled } from '../../../../stitches.config';

export const Container = styled('div', {
    position: 'relative',
    fontFamily: '$primary',

    background: `url(img/price.webp)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    '@sm': {
        background: `none`,
    }
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
        color: '#FFE8F0',
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

export const FormBag = styled('div', {
    maxWidth: '590px',
    height: 'auto',
    background: '#FFE8F0',

    'form': {
        padding: '24px 48px',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        'h2': {
            padding: '8px 0px 12px',
            fontSize: '24px',

            'span': {
                color: '$primary_600',
            }
        },

        'hr': {
            width: '100%',
            height: '1px',
            border: '0px',
            borderTop: '1px solid #ccc',
        }
    },


    "@sm": {
        'form': {
            padding: '20px',

            'h2': {
                textAlign: 'center',
                fontSize: '24px',
            },
        },
    }
})

export const ValueBag = styled('div', {
    margin: '32px 0px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    'h4': {
        fontWeight: '400',
        textDecoration: 'line-through',
    },

    'h5': {
        fontSize: '48px',
        color: '$primary_600',
        fontWeight: '700',

        'span': {
            fontWeight: '400',
            fontSize: '18px',
        },
    }
});

export const SelectContainer = styled('div', {
    width: '100%',
    marginBottom: '12px',

    'label': {
        margin: '12px 0px !important'
    },

    'select': {
        width: '100%',
        padding: '10px 18px',
        borderRadius: '100px',
        border: '1px solid #ccc',
    }
});

export const SizeBag = styled('div', {
    width: '100%',
    background: '#FDD1E0',
    height: '110px',
    borderRadius: '8px',
    padding: '24px',

    display: 'flex',
    alignItems: 'center',
    gap: 22,

    marginBottom: '12px',

    'img': {
        width: '12%',
    },

    'div': {
        'span': {
            fontSize: '14px',
            fontWeight: '600',
        }
    },


    '@sm': {
        'img': {
            width: '18%',
        },

        'div': {
            'p': {
                fontSize: '14px',
            }
        }
    }
});

export const CheckboxArea = styled('div', {
    marginBottom: '12px',

    "@sm": {
        'label': {
            fontSize: '14px',
        }
    }
});

export const ButtonBag = styled('div', {
    width: '100%',
    marginTop: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '30px',

    'a': {
        color: '$text_light_200',
        fontSize: '14px',
        cursor: 'pointer',
    },

    'button': {
        background: '$primary_600',
        color: '#fff',
        padding: '10px 16px',
        border: 'none',
        borderRadius: '100px',
        cursor: 'pointer',
        transition: '200ms',

        '&:hover': {
            background: '$primary_light',
        }
    },


    "@sm": {
        flexDirection: 'column-reverse',

        'button': {
            width: '100%'
        }
    }

});