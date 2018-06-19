const projects = [];

// projects index
class Project {

    constructor(name, desc, imageSrc, pageLink, keywords, site, github) {
        this.name = name;
        this.desc = desc;
        this.imageSrc = imageSrc;
        this.pageLink = pageLink;
        this.keywords = keywords;
        this.site = site;
        this.github = github;

        projects.push(this);
    }
}


const favoPlaces = new Project(
    'FavoPlaces',
    'Integrated with Google Map API. User can sign up, search for interests and save to collection.',
    './src/assets/favos.jpg',
    'https://github.com/yifeidesu/favoplaces',
    ['JavaScript','jQuery', 'Bootstrap', 'Node.js','Express', 'Passport.js', 'MongoDB', 'Heroku',  'Pug', 'Map API'],
    'https://favoplaces.herokuapp.com/',
    'https://github.com/yifeidesu/favoplaces'
);

const coinApp = new Project(
    'CoinApp',
    'Display and refresh for realtime bitcoin price index. Display historical data for week, month and year.',
    './src/assets/coinapp.png',
    'https://yifeidesu.github.io/coinapp',
    ['JavaScript','Node.js', 'Bootstrap', 'React', 'React Router', 'Axios', 'Chart.js'],
    'https://yifeidesu.github.io/coinapp',
    'https://github.com/yifeidesu/coinapp');

const twitterClient = new Project(
    'Bit for Twitter, Android',
    'A Twitter client app with different UI design.',
    './src/assets/twitterbit.jpg',
    'https://github.com/yifeidesu/TwitterClientApp',
    ['RxJava', 'Twitter SDK', 'MVVM', 'Data binding', 'Java', 'Kotlin'],
    'https://play.google.com/store/apps/details?id=com.robyn.bitty',
    'https://github.com/yifeidesu/TwitterClientApp');

const dayPlus = new Project(
    'DayPlus, Android',
    'With users count down/count up their big days. ',
    './src/assets/pj_dayplus.jpg',
    'https://github.com/yifeidesu/DayPlus-Countdown',
    ['MVP', 'MySQL', 'Java', 'Kotlin']);

const imgurApp = new Project(
    'MyImgur, Android',
    'An Imgur client app.',
    './src/assets/pj_im.jpg',
    'https://github.com/yifeidesu/MyImgurApp',
    ['RxJava', 'Retrofit', 'Gson', 'MVVM', 'Java', 'Kotlin']);

console.log(projects);

let cellsHtml = '';
projects.forEach((project) => {
    const cell = getCellHtml(project);
    cellsHtml += cell;
});
cellsHtml += andMoreHtml();


document.getElementById("cells").innerHTML = cellsHtml;

function getCellHtml(project) {
    const badgesHtml = getBadgesHtml(project);
    const sitesHtml = getSitesHtml(project);

    const cellHtml =
        '<div class="col-lg-6">' +
        '<div class="cell" onclick="window.location.href=\'' + project.pageLink + '\'">' +
        '<p>' +
        '<span class="pj-name">' + project.name + '</span><br/>' +
        '<span class="desc">' + project.desc + '<br/></span><br/>' +
        badgesHtml + '<br/>' +
        sitesHtml +
        '</p>' +
        '<img src="' + project.imageSrc + '" class="cell-img img-responsive margin" style="width:100%" alt="Image">' +
        '</div></div>';
    return cellHtml;
}

function getBadgesHtml(project) {
    let badges = '';

    project.keywords.forEach(el => {
        badges += '<span class=" badge pj-badge">' + el + '</span>';
    });

    return badges;
}

function getSitesHtml(project) {
    let sitesHtml = '';

    if (project.site) {
        sitesHtml +=
            '<a class=" badge pj-site" href="' + project.site + '">Site</a>';
    }

    if (project.github) {
        sitesHtml +=
            '<a class=" badge pj-site" href="' + project.github + '">GitHub</a>';
    }

    return sitesHtml;
}

function andMoreHtml() {
    const more =
        '<div id="last-cell" class="col-lg-6 text-center"' +
        'onclick="window.location.href=\'https://github.com/yifeidesu\'">' +
        '<h3>And more...</h3></div>';

    return more;
}


/******************
 * SELF INTRODUCE *
 ******************/
const selfIntro =
    'I’m a Web Developer based in Toronto. <br/>' +
    'My goal is to build elegant and accessible web applications and let them help users\' life. ' +
    'I love coding and enjoy getting and applying new skills.' +
    '<br/>My skillset includes JavaScript, HTML, CSS, Bootstrap, jQuery, Node.js, Express, React, MongoDB, MySQL, Java, Kotlin and more. ' +
    '<br/>Scroll down to see my projects! '

document.getElementById('intro').innerHTML = selfIntro;