## Next.js 14 Starter Kit

Simple starter template for Next.js 14, Tailwind CSS, and TypeScript, ESLint, Prettier

## Feature

### setting Technologies

- Next.js 14 (app router)
- Tailwind CSS
- TypeScript
- Prettier
- Eslint

#### 1. Tailwind CSS Preset: px-to-rem

This preset automates the conversion of pixel values to rem units in your Tailwind configuration.

- **Package Documentation**:  
  [tailwindcss-preset-px-to-rem](https://classic.yarnpkg.com/en/package/tailwindcss-preset-px-to-rem)

#### 2. ESLint with Airbnb Configuration

This project includes **ESLint** with the **Airbnb JavaScript Style Guide** to enforce consistent code quality and style. It includes both ESLint rules and additional configurations for React and TypeScript.
Additionally, it includes the **Next.js Core Web Vitals** ESLint plugin, which helps monitor and enforce best practices related to web performance metrics in Next.js applications.

#### 3. Prettier with Tailwind CSS Plugin

This project includes **Prettier** with the **Prettier Plugin for Tailwind CSS**. This plugin automatically sorts your Tailwind CSS classes in a consistent and predictable order whenever you format your code, making your styles more maintainable.

## Project Structure

```

├── public
│   ├── fonts
│   ├── images
├── src
│   ├── app
│   │   ├── (detail)
│   │   │   └── [id]
│   │   │       └── page.tsx
│   │   ├── (user)
│   │   │   ├── signin
│   │   │   │   └── page.tsx
│   │   │   ├── signup
│   │   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components
│   ├── hooks
│   └── utils

```

## Available Scripts

- npm run dev - Start development server
- npm run build - Build for production
- npm run start - Start production server
- npm run lint - Run ESLint
- npm run format - Format code with Prettier
- npm run format:fix - Format fix code with Prettier

## Prerequisites

To improve your development experience, it is recommended to install the following VS Code Extensions for better support and productivity:

- ESLint: To highlight linting errors directly in the editor.

- Prettier - Code Formatter: Automatically format your code according to your Prettier configuration.

- Tailwind CSS IntelliSense: Provides intelligent autocompletion, syntax highlighting, and linting for Tailwind CSS classes.

To make ESLint work seamlessly with **VS Code**, you can add the following settings in your `settings.json` file.

```json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "eslint.options": {
    "extensions": [".js", ".jsx", ".ts", ".tsx"]
  }
}
```

## Changelog

### main (2025-03-11)

- Basic setup of Next.js 14, TypeScript, and Tailwind CSS
- Includes basic Prettier and ESLint configuration
