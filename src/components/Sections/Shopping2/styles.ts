import { styled } from '../../../../stitches.config';

export const Container = styled('div', {
    position: 'relative',
    fontFamily: '$primary',
    padding: '80px 0px',
    background: '#372772',
});


export const ContainerShopping = styled('div', {

    'p': {
        textTransform: 'uppercase',
        textAlign: 'center',
        fontWeight: '800',
        color: '#fff',
    }
});

export const PaymentMethod = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '36px 0px 24px',

    'img': {
        width: '50%',
    }
});

export const ContentPayment = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',

});

export const Payment = styled('div', {
    display: 'flex',
    gap: '8px',
    width: '80px',
    alignItems: "center",

    'p': {
        color: '#617386',
        textTransform: 'uppercase',
        fontSize: '12px',
    }
});