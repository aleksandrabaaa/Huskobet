"use strict";

// db.collection('contents').get().then((snaphot) => {
//     console.log(snapshot.docs);

// })

const _contentRef = _db.collection("contents");
let _contents;

_contentRef.orderBy("title").onSnapshot(snapshotData => {
    _contents = [];
    snapshotData.forEach(doc => {
      let content = doc.data();
      content.id = doc.id;
      _contents.push(content);
    });
    appendContents(_contents);
  });

function appendContents(contents) {
    let htmlTemplate = "";
    for (let content of contents) {
      htmlTemplate += `
        <div>
            <img src="${content.img}">
            <p>${content.category}</p>
            <h4>${content.title}</h4>
            <p>${content.text}</p>
            <a href="#">Get access</a>
        </div>
      `;
    }
    document.querySelector('#content-container').innerHTML = htmlTemplate;
}

const _articleRef = _db.collection("articles");
let _articles;

_articleRef.orderBy("title").onSnapshot(snapshotData => {
  _articles = [];
  snapshotData.forEach(doc => {
    let article = doc.data();
    article.id = doc.id;
    _articles.push(article);
  });
  appendArticles(_articles);
});

function appendArticles(articles) {
  let htmlTemplate = "";
  for (let article of articles) {
    htmlTemplate += `
      <div>
          <img src="${article.img}">
          <p>${article.category}</p>
          <h4>${article.title}</h4>
          <p>${article.text}</p>
          <a href="#">Read more</a>
      </div>
    `;
  }
  document.querySelector('#articles-container').innerHTML = htmlTemplate;
}