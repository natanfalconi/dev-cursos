import { styled } from "../../../../stitches.config";

export const Container = styled('div', {
    padding: '20px 0px 60px'
});

export const TitleContainer = styled('div', {
    textAlign: "center",
    marginBottom: '32px',

    'h2': {
        color: '$light_text_100',
        fontSize: '32px',
        lineHeight: '40px',
        fontWeight: '$header_1',

        'span': {
            color: '$secondary_900',
        },
    },

    "@sm": {
        textAlign: "initial",

        'h2': {
            fontSize: '24px',
            lineHeight: '32px',
        },
    }
});