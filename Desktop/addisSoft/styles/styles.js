import { css } from "@emotion/react";

export const button = css`
    inline-size: flex;
    items-align: center;
    justify-content: center;
    white-space: nowrap;
    rounded: 0.25rem;
    transition-colors: background-color 0.2s, border-color 0.2s, color 0.2s;
    focus-visible: ring-2 ring-offset-2 ring-offset-white ring-blue-500;
`