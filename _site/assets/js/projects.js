$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/compression.png',
            link: 'https://arxiv.org/abs/2109.08346',
            title: 'Comfetch',
            demo: false,
            technologies: ['FL', 'Python'],
            description: "Academic research on model compression algorithms for application in federated learning environments.",
            categories: ['featured', 'ml']
        },
        {
            image: 'assets/images/natural.png',
            link: 'https://drive.google.com/file/d/1Ct-ddCpn4QwXZOYlytSlIPaX0PgOTsjW/view?usp=sharing',
            title: 'FL With Mixup and Natural Images',
            demo: false,
            technologies: ['FL', 'Python'],
            description: "Academic research on solving non-iid data in federated learning environments using image supplmentation from secure poisoned images and artificially labeled natural images. (Will be available on ARXIV soon)",
            categories: ['featured', 'ml']
        },
        {
            image: 'assets/images/manwoman.svg',
            link: 'https://huggingface.co/spaces/ksang/gender_identification',
            title: 'Gender Voice Identification',
            demo: false,
            technologies: ['Audio', 'Huggingface', 'Python'],
            description: "Signal processing project that can identify the gender of a speaker from audio.",
            categories: ['featured', 'ml']
        },
        {
            image: 'assets/images/tft.jpg',
            link: 'https://gzhang62.github.io/',
            title: 'TFT Augment Analysis',
            demo: false,
            technologies: ['Pandas', 'Matplotlib', 'Python'],
            description: "Data science project that seeks to use API data to determine the best upgrades in a game based on player behavior.",
            categories: ['data']
        },
        {
            image: 'assets/images/plane.png',
            link: 'https://kayooo.itch.io/big-brain-plane',
            title: 'Big Brain Plane',
            demo: false,
            technologies: ['RL', 'Unity', 'C#'],
            description: "Video game where the player must defeat a skilled AI built using reinforcement learning.",
            categories: ['featured', 'game', 'ml']
        },
        {
            image: 'assets/images/quizbowl.png',
            link: 'https://github.com/Kyle-Sang/CMSC470_QA_FinalProject',
            title: 'Quizbowl Question Answering',
            demo: false,
            technologies: ['NLP', 'Huggingface', 'Python'],
            description: "Document based question answering model for answering quizbowl questions.",
            categories: ['ml']
        },
        {
            image: 'assets/images/steamreview.jpeg',
            link: 'https://colab.research.google.com/drive/1eq8AuTX4qckVO43KkyzaF7u7VkuMRPvX?usp=sharing',
            title: 'Steam Sentiment Analysis',
            demo: false,
            technologies: ['NLP', 'SpaCY', 'Python'],
            description: "Game review sentiment analysis model trained on game reviews from Steam using spaCy.",
            categories: ['ml']
        },
        {
            image: 'assets/images/hate.png',
            link: 'https://public.tableau.com/app/profile/kyle.sang/viz/AsianHateCrimeintheU_S_/AASTFINAL',
            title: 'Asian Hate Crimes',
            demo: false,
            technologies: ['Tableau Desktop', 'Tableau Prep'],
            description: "Data visualization of hate crimes against asians in the U.S. from 1991 to 2020.",
            categories: ['data']
        },
        {
            image: 'assets/images/red.png',
            link: 'https://play.google.com/store/apps/details?id=com.KylesStash.DONTTOUCHTHESOURCE',
            title: 'Dont Touch The Red',
            demo: false,
            technologies: ['Unity', 'C#'],
            description: "Endless arcade style mobile game built in the Unity engine.",
            categories: ['game']
        },
        {
            image: 'assets/images/twitch.jpg',
            link: 'https://colab.research.google.com/drive/1brPEsBAfClQ9s_nJGZvpHm0ilRHJXIxC?usp=sharing',
            title: 'Twitch Maturity Prediction',
            demo: false,
            technologies: ['NLP', 'Huggingface', 'Python'],
            description: "Model that attempts to predict maturity rating of twitch streams based on the title of the stream.",
            categories: ['ml']
        },
        {
            image: 'assets/images/void.jpg',
            link: 'https://colab.research.google.com/drive/1F3eO_YHYm3vgna9sPVg_UdgVDwP5jWzU?usp=sharing',
            title: 'Void Champion Image Classifier',
            demo: false,
            technologies: ['Vision', 'Python'],
            description: "Image classifier built to differentiate images of video game characters that share very similar color palettes.",
            categories: ['ml']
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}