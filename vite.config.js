import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
// import three from "three";

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.scss',
                    'resources/js/app.js',
                    'resources/js/main.jsx',
                    'resources/js/App.jsx'
                ],
            refresh: true,
        }),

        react(),
    ],
});
