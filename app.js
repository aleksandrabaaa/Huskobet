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
            <h3>${content.title}</h3>
            <p>${content.text}</p>
            <a>Get access</a>
        </div>
      `;
    }
    document.querySelector('#content-container').innerHTML = htmlTemplate;
}

// console.log(doc);
