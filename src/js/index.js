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
    'https://github.com/yifeidesu',
    ['MongoDB', 'Express','Heroku', 'Passport.js', 'Pug'],
    'https://favoplaces.herokuapp.com/',
    'https://github.com/yifeidesu/favoplaces'
);


const coinApp = new Project(
    'CoinApp',
    'Get realtime/historical prices data from API. React, React Router, Chart.js',
    './src/assets/coinapp.png',
    'https://yifeidesu.github.io/charts/mon',
    ['React', 'React Router', 'Chart.js'],
    'https://yifeidesu.github.io/coinapp',
    'https://github.com/yifeidesu/coinapp');

const twitterClient = new Project(
    'Bit for Twitter',
    'A Twitter client Android app with different UI design.',
    './src/assets/twitterbit.jpg',
    'https://github.com/yifeidesu/TwitterClientApp',
    ['RxJava', 'MVVM', 'Data binding'],
    'https://play.google.com/store/apps/details?id=com.robyn.bitty',
    'https://github.com/yifeidesu/TwitterClientApp');

const dayPlus = new Project(
    'DayPlus',
    'An Android App that helps uers track their big days.',
    './src/assets/pj_dayplus.jpg',
    'https://github.com/yifeidesu/DayPlus-Countdown',
    ['MVP', 'MySQL']);

const imgurApp = new Project(
    'An Android Imgur client app.',
    'An Android Imgur client app.',
    './src/assets/pj_im.jpg',
    'https://github.com/yifeidesu/MyImgurApp',
    ['RxJava', 'Gson', 'MVVM']);

console.log(projects);

let cellsHtml = '';
projects.forEach((project) => {
    const cell = getCellHtml(project);
    cellsHtml += cell;
});
cellsHtml += andMoreHtml();


document.getElementById("cells").innerHTML = cellsHtml;

// SELF INTRODUCE
const selfIntro = 'I’m a front Web Developer based in Toronto. <br/>' +
    'My goal is to build elegant and accessible web applications. <br/>' +
    'I love innovations and enjoy getting and applying new skills.'

document.getElementById('intro').innerHTML = selfIntro;

function getCellHtml(project) {
    const badgesHtml = getBadgesHtml(project);
    const sitesHtml = getSitesHtml(project);

    const cellHtml =
        '<div class="col-lg-6">' +
        '<div class="cell" onclick="window.location.href=\'' + project.pageLink + '\'">' +
        '<p>' +
        '<span class="pj-name">' + project.name + '</span><br/>' +
        '<span class="desc">' + project.desc + '</span><br/>' +
        '' + badgesHtml + '<br/>' +
        '<span class="site">' + sitesHtml + '</span>' +
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

function andMoreHtml() {
    const more =
        '<div id="last-cell" class="col-lg-6"' +
        'onclick="window.location.href=\'https://github.com/yifeidesu\'">' +
        '<h3>And more...</h3></div>';

    return more;
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
