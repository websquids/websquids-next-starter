import nextPlugin from "eslint-config-next/core-web-vitals";

// eslint-config-next 16+ exports flat config; use it directly (Next.js 16 has no "next lint" command)
const eslintConfig = [...nextPlugin];

export default eslintConfig;
