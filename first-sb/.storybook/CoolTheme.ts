import { create } from 'storybook/theming/create';

export default create({
    base: 'light',
    // Typography
    fontBase: '"Segoe UI", "Roboto", "Helvetica Neue", sans-serif',
    fontCode: 'monospace',
    brandTitle: "Valentino's Magic Beans",
    brandUrl: 'https://valentinos-magic-beans.click/',
    brandImage: 'https://valentinos-magic-beans.click/images/logo.png',
    brandTarget: '_self',

    // Color scheme inspired by coffee and warmth
    colorPrimary: '#6F4E37', // Rich coffee brown
    colorSecondary: '#D4A574', // Warm caramel/golden

    // UI - Warm, inviting coffee shop palette
    appBg: '#FAF7F2', // Cream background
    appContentBg: '#FFFFFF', // Pure white for content
    appPreviewBg: '#FFFFFF',
    appBorderColor: '#D4A574',
    appBorderRadius: 8,

    // Text colors - Deep, rich tones
    textColor: '#3E2723', // Dark brown, almost espresso
    textInverseColor: '#FFFFFF',

    // Toolbar - Coffee-themed
    barTextColor: '#8D6E63', // Medium brown
    barSelectedColor: '#6F4E37', // Rich coffee brown
    barHoverColor: '#D4A574', // Warm caramel
    barBg: '#FAF7F2', // Cream to match main background

    // Form colors
    inputBg: '#FFFFFF',
    inputBorder: '#D4A574',
    inputTextColor: '#3E2723',
    inputBorderRadius: 6,
});