import { styled } from '../../../../stitches.config';

export const Container = styled('footer', {
  backgroundColor: '#fff',
  color: '#000',
  fontFamily: '$primary',

});

export const FooterRightsReserved = styled('div', {
  backgroundColor: '$secondary_900',
  height: '59px',

  width: '100%',
  alignItems: 'center',
  display: 'flex',
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