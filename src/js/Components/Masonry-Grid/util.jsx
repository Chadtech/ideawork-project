export function getImageWidth (windowWidth, isMobile) {
  if (isMobile) {
    return windowWidth * 29 / 80;
  }
  return windowWidth * 7 / 30;
}


export function formatDate (date) {
  const date_ = new Date(date);

  return [
    monthNames[date_.getMonth()].toUpperCase(),
    String(date_.getDate()),
    String(date_.getYear())
  ].join(" ");
}


const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


export function columnizeArticles (isMobile, articles) {

  const numberOfColumns = isMobile ? 2 : 3;

  return sortInto(sortBy(articles), initColumns(numberOfColumns));

}


function sortBy (articles) {
  return articles.sort(function(a, b) {
    const a_ = new Date(a).getTime();
    const b_ = new Date(b).getTime();

    return a_ - b_;
  })
}

function sortInto (articles, columns) {
  var index = 0;
  while (index < articles.length) {
    columns[ index % columns.length ].push(articles[index]);
    index++;
  }
  return columns;
}

function initColumns (n) {
  const columns = [];
  var index = 0;
  while (index < n) {
    columns.push([]);
    index++;
  }
  return columns;
}