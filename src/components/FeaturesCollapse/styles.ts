import { styled } from '../../../stitches.config';
import * as Accordion from '@radix-ui/react-accordion';

export const Container = styled('div', {
  overflow: 'inherit',
  h2: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '40px',
    lineHeight: '53px',
  },
  '*': {
    fontFamily: "'Sora', sans-serif",
  },
  '@xs': {
    width: 'auto',
    '.card__inside__border': {
      padding: '20px',
    },
  },
  '@sm': {
    width: 'auto',
  },
});

export const CollapseContainer = styled(Accordion.Root, {
  fontWeight: 300,
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
});

export const CollapseItem = styled(Accordion.Item, {
  backgroundColor: '#fff',
  padding: '20px 25px',
  borderRadius: '10px',
});

export const CollapseHeader = styled(Accordion.Header, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '16px',
  lineHeight: '27px',
  position: 'relative',

  color: '$light_text_100',

  span: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    svg: {
      color: '$secondary_900',
    },
  },
  '@sm': {
    span: {
      marginRight: '42px',
    },
  },
});

export const CollapseTrigger = styled(Accordion.Trigger, {
  cursor: 'pointer',
  background: 'none',
  outline: 'none',
  border: 'none',
  pointerEvents: 'all',
  fontSize: '18px',
  color: '$light_text_100',
  width: '100%',
  position: 'absolute',
  right: '0',
  textAlign: 'end',
});

export const CollapseContent = styled(Accordion.Content, {
  marginTop: '10px',
  fontSize: '16px',
  color: '$light_text_100',
  lineHeight: '22px',
});

export const ButtonContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  width: '100%',
});
