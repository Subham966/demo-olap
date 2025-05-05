import { defineConfig } from "vite";
import dotenv from 'dotenv';

import svgr from "vite-plugin-svgr";

import path from "path";
import url from "url";
import react from "@vitejs/plugin-react";
import { sentryVitePlugin } from "@sentry/vite-plugin";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// // Load the appropriate .env file based on the mode
// export default defineConfig(({ mode }) => {
//     // Default to root ('/') for development
//     const defaultBase = '/';
//     // Load environment variables from the appropriate .env file
//     dotenv.config({ path: .env.${mode} });

//     return {
//     base: mode === 'development' ? defaultBase : process.env.VITE_BASE_URL || defaultBase,
//     // other Vite configuration options
//     };
//     });

export default defineConfig(({ mode }) => {
    // Default to root ('/') for development
    const defaultBase = '/';
    dotenv.config({ path: `.env` });

    // Add check for VITE_BASE_URL in development mode
    if (mode === 'development' && !process.env.VITE_BASE_URL) {
        throw new Error('VITE_BASE_URL is required in development mode. Please add it to your .env file.');
    }
    if (mode === 'production' && !process.env.VITE_BASE_URL) {
        throw new Error('VITE_BASE_URL is missing in production mode. Please add it as an environment variable.');
    }


    return {
        base: defaultBase,
        // plugins: [react(), svgr(), sentryVitePlugin({
        //     authToken: process.env.SENTRY_AUTH_TOKEN,
        //     org: "vengage-ai-pty-ltd",
        //     project: "javascript-react",
        // })],
        plugins: [react(), svgr()],
        optimizeDeps: {
            include: ['@mui/material/Tooltip', '@emotion/styled'],
        },
        resolve: {
            alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
        },
        server: {
            port: 3000,
        },
        define: {
            'process.env.VITE_BASE_URL': mode === 'development'
                ? `"${process.env.VITE_BASE_URL}"` // Use `.env` in dev
                : '"__BASE_URL__"', // Placeholder for production
            'process.env.VITE_SENTRY_DSN': mode === 'development'
                ? `"${process.env.VITE_SENTRY_DSN}"` // Use `.env` in dev
                : '"__SENTRY_DSN__"', // Placeholder for production
        },
        build: {
            outDir: "dist", // Specify your build output directory
            cssCodeSplit: false, // Disable CSS code splitting

            rollupOptions: {
                output: {
                    entryFileNames: "index.js", // Set the main entry file name
                    assetFileNames: `assets/[name].[ext]`,
                },
            },
            sourcemap: true, // Source map generation must be turned on
        },
    }
});
