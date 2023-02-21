import { styled } from '../../../../stitches.config';

export const Container = styled('footer', {
  backgroundColor: '#fff',
  color: '#000',
  padding: '24px 0 0',
  minHeight: '210px',
  fontFamily: '$primary',

  '@sm': {
    paddingBottom: 0,
  }

});

export const FooterRightsReserved = styled('div', {
  backgroundColor: '$secondary_900',
  height: '59px',

  width: '100%',
  alignItems: 'center',
  display: 'flex',
  marginTop: '25px',
  justifyContent: 'center',

  'p': {
    color: '#fff',
    fontSize: '16px',
  },

  '@sm': {
    p: {
      fontSize: '14px',
      textAlign: 'center',
    }
  }
});

export const ContentFooter = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  marginBottom: '24px',

  'span': {
    fontSize: '14px',
    color: '$light_text_200',
    padding: '24px 0'

  }
})

export const SocialFooter = styled('div', {
  display: 'flex',
  background: '$secondary_200',
  borderRadius: '8px',
  padding: '10px 20px',
  alignItems: 'center',
  height: '44px',
  gap: '24px',
  maxWidth: '360px',

  'p': {
    fontSize: '16px',
    color: '$light_text_200',
  },

  '@sm': {
    padding: '8px',
    gap: '8px',

    'p': {
      fontSize: '14px',
    },
  }

});

export const SocialIcons = styled('div', {
  display: 'flex',
  gap: '32px',
  color: '$secondary_500',

  'svg': {
    fontSize: '16px',
  },

});

export const PaymentTitle = styled('h5', {
  marginBottom: '20px',
  fontSize: '$body_1',
  textTransform: 'initial',
  color: '#666666'
});

export const ContentPaymant = styled('div', {});

export const PaymentMethods = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 71px)',
  gap: '14px',

  '@sm': {
    gridTemplateColumns: 'repeat(5, 58px)',
    gap: '2px'
  }

});

export const PaymentMethod = styled('div', {
  '@sm': {
    'svg': {
      width: '100%',
    },

    display: 'flex',
    flexDirection: 'column'
  }
});