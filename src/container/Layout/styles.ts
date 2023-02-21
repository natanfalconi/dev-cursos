import { styled } from '../../../stitches.config';


export const Container = styled('div', {
  display: 'grid',
  gridTemplateRows:
    'minmax(min-content, max-content) minmax(min-content, max-content) auto minmax(min-content, max-content)',
  gap: '0px 0px',
  gridTemplateAreas: `
  "header"
  "body"
  "footer"`,
  header: { gridArea: 'header', maxWidth: '100vw' },
  footer: { gridArea: 'footer', maxWidth: '100vw' },
  '.layout__body': { gridArea: 'body', maxWidth: '100vw' },
});