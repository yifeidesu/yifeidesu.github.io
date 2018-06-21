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
    'User can sign up, search for interests with integrated Google Places service and save picked location items to collection.',
    './src/assets/favos.jpg',
    'https://github.com/yifeidesu/favoplaces',
    ['JavaScript', 'jQuery', 'Bootstrap', 'Node.js', 'Express', 'Passport.js', 'MongoDB', 'Heroku', 'Pug', 'Map API'],
    'https://favoplaces.herokuapp.com/',
    'https://github.com/yifeidesu/favoplaces'
);

const coinApp = new Project(
    'CoinApp',
    'Integrate with a bitcoin price API. Display and refresh for realtime bitcoin price. Display historical price fluctuation in line graphs for week, month and year.',
    './src/assets/coinapp.png',
    'https://yifeidesu.github.io/coinapp',
    ['JavaScript', 'Node.js', 'Bootstrap', 'React', 'React Router', 'Axios', 'Chart.js'],
    'https://yifeidesu.github.io/coinapp',
    'https://github.com/yifeidesu/coinapp');

const twitterClient = new Project(
    'Bit for Twitter, Android',
    'A Twitter client app with different UI design. Users can sign in with their account, and do actions including view home timeline, make favorite, post tweet. Use Retrofit and RxJava to make HTTP request, and receive and parse response. Use data-binding to bind data to XML layouts.',
    './src/assets/twitterbit.jpg',
    'https://github.com/yifeidesu/TwitterClientApp',
    ['RxJava', 'Retrofit', 'Twitter SDK', 'MVVM', 'Data binding', 'Java', 'Kotlin'],
    'https://play.google.com/store/apps/details?id=com.robyn.bitty',
    'https://github.com/yifeidesu/TwitterClientApp');

const dayPlus = new Project(
    'DayPlus, Android',
    'Count down/count up users\' big days. Index screen show all events in a list, sorted by selected option. Detail view show event infomation with a user customized background from user gallery. Structure in MVP, makes project modular and good to maintain.',
    './src/assets/pj_dayplus.jpg',
    'https://github.com/yifeidesu/DayPlus-Countdown',
    ['MVP', 'MySQL', 'Java', 'Kotlin'],
    'https://play.google.com/store/apps/details?id=com.robyn.dayplus2',
    'https://github.com/yifeidesu/DayPlus-Countdown');

const imgurApp = new Project(
    'MyImgur, Android',
    'An Imgur client app integrated with Imgur API. User can view viral or most recent image list without login, and click item to view image in whole screen.',
    './src/assets/pj_im.jpg',
    'https://github.com/yifeidesu/MyImgurApp',
    ['RxJava', 'Retrofit', 'Gson', 'MVVM', 'Java', 'Kotlin'],
    '',
    'https://github.com/yifeidesu/MyImgurApp');

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


        '<div class="cell row" onclick="window.location.href=\'' + project.pageLink + '\'">' +
        '<div class="col-lg-6">' +
        '<p class="pj-name">' + project.name + '</p>' +
        '<p class="desc">' + project.desc + '</p>' +
        '<p>' + badgesHtml + '</p>' +
        '<p>' + sitesHtml + '</p>' +
        '</div>' +
        '<div class="col-lg-6">' +
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
        '<div id="last-cell" class="col-lg-12 text-center"' +
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