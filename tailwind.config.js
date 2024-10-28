module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{js,ts,jsx,tsx,html,mdx}', './src/**/**/*.{js,ts,jsx,tsx,html,mdx}'],
    darkMode: 'class',
    theme: {
        screens: { md: { max: '1050px' }, sm: { max: '550px' } },
        extend: {
            colors: {
                '66_white_for_sliders': 'var(--66_white_for_sliders)',
                amber: { 300_01: 'var(--amber_300_01)', 900_01: 'var(--amber_900_01)' },
                black: { DEFAULT: 'var(--black)' },
                blue_gray: { 100: 'var(--blue_gray_100)' },
                deep_orange: {
                    50: 'var(--deep_orange_50)',
                    200: 'var(--deep_orange_200)',
                    500: 'var(--deep_orange_500)',
                    50_01: 'var(--deep_orange_50_01)',
                    900: 'var(--deep_orange_900)',
                    100_01: 'var(--deep_orange_100_01)',
                },
                gray: {
                    50: 'var(--gray_50)',
                    400: 'var(--gray_400)',
                    500: 'var(--gray_500)',
                    600: 'var(--gray_600)',
                    700: 'var(--gray_700)',
                    800: 'var(--gray_800)',
                    800_01: 'var(--gray_800_01)',
                },
                hoodie_colors: {
                    light_peach: 'var(--hoodie_colors_light_peach)',
                    navy: 'var(--hoodie_colors_navy)',
                },
                indigo: { 400: 'var(--indigo_400)' },
                lime: { 900: 'var(--lime_900)', 900_01: 'var(--lime_900_01)' },
                orange: { 50: 'var(--orange_50)' },
                peach_background: 'var(--peach_background)',
                red: {
                    200: 'var(--red_200)',
                    300: 'var(--red_300)',
                    600: 'var(--red_600)',
                    300_01: 'var(--red_300_01)',
                    600_01: 'var(--red_600_01)',
                },
                sale_red: 'var(--sale_red)',
                secondary_accent: 'var(--secondary_accent)',
                teal: { 200: 'var(--teal_200)' },
                white: { DEFAULT: 'var(--white)' },
                black_600: 'var(--black_600)',
                gray_shadow: 'var(--gray_shadow)',
                colors: '#B8228AFF',
            },
            boxShadow: { xs: '0 0 1px 5px #00000029' },
            backgroundImage: {
                gradient: 'linear-gradient(45deg, #ff6e45, #fbe096)',
                gradient1: 'linear-gradient(180deg, #5a4430, #594942), url(/public/images/img_banner_slider.png)',
                gradient2: 'linear-gradient(180deg, #5a4430, #594942), url(/public/images/img_banner_slider_580x1212.png)',
            },
            fontFamily: { roundblack: 'Rounds Black', nunito: 'Nunito' },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
