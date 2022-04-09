const PUBLIC_FOLDER = process.env.IS_DEPLOY ? "" : "/my-portfolio-app";

export const ICONS = {
    INSTAGRAM: `${PUBLIC_FOLDER}/image/instagram.svg`,
    LINKEDIN: `${PUBLIC_FOLDER}/image/linkedin.svg`,
    DISCORD_WHITE: `${PUBLIC_FOLDER}/image/discord-white.png`,
    GITHUB_WHITE: `${PUBLIC_FOLDER}/image/github-white.png`,
    NOTHANKSLOGO: `${PUBLIC_FOLDER}/image/cover.png`,
};

export const TIMELINE_CONTENT = [
    {
        year: "Home",
        title: "Welcome to my page!",
        subtitle: "This is a website to record my journey and stuff I did. I love to create apps in my free time and favourite language now is React.",
        background: `${PUBLIC_FOLDER}/image/gamebg.png`,
    },
    {
        year: "2021 - Present",
        title: "BOS TA Grad Programme",
        subtitle:
            "The first full time job I had. Had a good experience thus far and learnt a lot since I joined the company. I am loving the hybrid work arrangement for now as I get to meet my colleagues in person and also not get tired of commuting everyday. Looking forward to learning more.",
        background: `${PUBLIC_FOLDER}/image/bos.png`,
    },
    {
        year: "2017 - 2021",
        title: "SMU - Information Systems",
        subtitle:
            "The first time that I am officially learning about programming. Even though I had no knowledge at all, thanks to the curriculum, I was able to follow the course quite smoothly and in turn made me more interested in coding.",
        background: `${PUBLIC_FOLDER}/image/smu.png`,
    },
    {
        year: "2015 - 2017",
        title: "NS - SPDS",
        subtitle:
            `An obligation for all SG guys. I was in the Silent Precision Drill Squad within Military Police. Training was tough but I get to perform at various events and even got to travel to US for a military tattoo. During this time, I also first discover about coding when I was trying to mod a game called "Terraria".`,
        background: `${PUBLIC_FOLDER}/image/spds.png`,
    },
];

export const PROJECT_CONTENT = [
    {
        title: "No Thanks!",
        description: `A mini project to recreate the card game "No Thanks!"`,
        img: ICONS.NOTHANKSLOGO,
        icons: [
            {
                img: (
                    <img
                        src={ICONS.GITHUB_WHITE}
                        alt={"Github"}
                        width={"75%"}
                    />
                ),
                bg: "#000",
                description: "Click to check out my repository!",
                url: "https://github.com/junhuitan2017/nothanks",
            },
            {
                img: (
                    <img
                        src={ICONS.DISCORD_WHITE}
                        alt={"Discord"}
                        width={"70%"}
                    />
                ),
                bg: "#5663F7",
                description: "Click to add bot to your discord server!",
                url: "https://discord.com/api/oauth2/authorize?client_id=961136076439834635&permissions=0&scope=applications.commands%20bot",
            },
        ],
    },
    {
        title: "Hungry Pingu",
        description: `A mini project that require players to strategize their moves to collect as much fishes they can`,
        img: "http://104.215.188.54:3002/images/pengu1.gif",
        icons: [
            {
                img: (
                    <img
                        src={ICONS.GITHUB_WHITE}
                        alt={"Github"}
                        width={"75%"}
                    />
                ),
                bg: "#000",
                description: "Click to check out my repository!",
                url: "https://github.com/Jaywiz77/myFish",
            },
            {
                img: (
                    <img
                        src={ICONS.DISCORD_WHITE}
                        alt={"Discord"}
                        width={"70%"}
                    />
                ),
                bg: "#5663F7",
                description: "Click to add bot to your discord server!",
                url: "https://discord.com/api/oauth2/authorize?client_id=962250878860013608&permissions=0&scope=applications.commands%20bot",
            },
        ],
    },
];
