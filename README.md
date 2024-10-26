## Template
This template features `tailwind`, `internationalization` and `theme` handling.<br>
Instructions on how to add additional `languages` and `themes` to your project below.<br>

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

## Adding more languages
Before adding more `languages`, please bear in mind the followings :<br>

1. Supporting more than 2 `locales` will make the <u>**Switch component**</u> incompatible.
2. Therefore you should use a <u>**Select component**</u> or equivalent instead.

First, you will need to add your additional supported `locales` in the `configuration.ts` file.<br>
```typescript
const configuration: TConfiguration = {
    locales: [ `en-US`, `fr-FR` ], // <-- You add your locales here : [ `en-US`, `fr-FR`, `jp-JP`, `kr-KR` ]
    localesFallback: `en-US` // <-- You can also change your fallback language here
};
```
Then you can create new `.json` files matching your `locales` under `/translations`.<br>
```markdown
/translations
├─── en-US.json
├─── fr-FR.json
├─── jp-JP.json
├─── kr-KR.json
```
That's how you set up new `locales`, for further information, please look at the documentation.<br>
There's a link to the documentation below : [next-intl](#used-packages).<br>

## Adding more themes
Before adding more `themes`, please bear in mind the followings :<br>

1. Supporting more than 2 `themes` will make the <u>**Switch component**</u> incompatible.
2. Therefore you should use a <u>**Select component**</u> or equivalent instead.

First, you will need to add your additional supported `themes` in the `configuration.ts` file.<br>
```typescript
const configuration: TConfiguration = {
    themes: [ `dark`, `light` ], // <-- You add your themes here : [ `dark`, `dawn`, `light`, `neon` ]
    themesFallback: `light` // <-- You can also change your fallback theme here
};
```
Then you can work on your `css variables` for each `theme` and implement them according to your setup.<br>
Your implementation will vary depending on your approach : `vanilla CSS`, `frameworks`, `preprocessors`.<br>
That's how you set up new `themes`, for further information, please look at the documentation.<br>
There's a link to the documentation below : [next-themes](#used-packages).<br>

## Used packages
- Internationalization : [next-intl](https://next-intl-docs.vercel.app/docs/getting-started)
- Flag icons : [flag-icons](https://github.com/lipis/flag-icons)
- Theme handling : [next-themes](https://github.com/pacocoursey/next-themes)
- Bundle analyzer : [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)