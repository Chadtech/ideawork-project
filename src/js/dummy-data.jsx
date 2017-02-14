

function makeArticle (date, title, imageSource){
  return {
    presenter: "LOREM IPSUM",
    date,
    title,
    imageSource
  }

}

export const dummyData = [
  makeArticle(
    "2017-02-10", 
    "Bureaux exquisite delightfully carefully curated soft power.", 
    "./images/layer-14.png"
  ),
  makeArticle(
    "2017-02-02",
    "Sharp bureaux sleepy K-pop carefully curated.",
    "./images/layer-18.png"
  ),
  makeArticle(
    "2017-01-27",
    "St Moritz uniform Beams",
    "./images/layer-19.png",
  ),
  makeArticle(
    "2017-01-21",
    "Esse airport veniam ryokan soft power",
    "./images/layer-20.png",
  ),
  makeArticle(
    "2017-01-18",
    "K-pop extraordinary",
    "./images/layer-21.png",
  ),
  makeArticle(
    "2017-01-12",
    "Artisanal iconic cutting-edge business class",
    "./images/layer-22.png",
  )
]