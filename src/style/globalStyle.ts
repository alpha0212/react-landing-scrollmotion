import { css } from "@emotion/react";
import { reset } from "./reset";

export const globalStyle = css`
  ${reset}

  :root {
    --color-text: rgba(255, 255, 255);
    --color-background: rgba(0, 0, 0, 0.9);
  }

  * {
    margin: 0;
    padding: 0;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo",
      "Noto Sans KR", "Malgun Gothic", sans-serif;
  }

  html {
    font-family: Pretendard;
  }

  body {
    color: var(--color-text);
    background-color: var(--color-background);
    font-weight: 600;
    letter-spacing: 0.5px;
  }
`;
