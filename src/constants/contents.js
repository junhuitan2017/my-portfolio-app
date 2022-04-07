const PUBLIC_FOLDER = process.env.IS_DEPLOY ? "" : "my-portfolio-app";

export const TIMELINE_CONTENT = [
    {
        year: "Home",
        title: "Welcome to my page!",
        subtitle: "This is a website to record my journey and stuff I did",
        background: `${PUBLIC_FOLDER}/image/gamebg.png`,
    },
    {
        year: "2021 - Present",
        title: "BOS TA Grad Programme",
        subtitle:
            "The first full time job I had. Had a good experience thus far and learnt a lot since I joined the company. I am loving the hybrid work arrangement for now as I get to meet my colleagues in person and also not get tired of commuting everyday. Looking forward to learning more.",
        background: `${PUBLIC_FOLDER}/image/bos.png`,
    },
];

export const ICONS = {
    INSTAGRAM: `/${PUBLIC_FOLDER}/image/instagram.svg`,
    LINKEDIN: `/${PUBLIC_FOLDER}/image/linkedin.svg`,
    DISCORD_WHITE: `/${PUBLIC_FOLDER}/image/discord-white.png`,
    NOTHANKSLOGO: `/${PUBLIC_FOLDER}/image/cover.png`,
};
