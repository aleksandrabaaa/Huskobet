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
            <h3>${content.title}</h3>
            <p>${content.text}</p>
        </div>
      `;
    }
    document.querySelector('#content-container').innerHTML = htmlTemplate;
}

it("should order and limit", () => {
    let _contentRef = db.collection("contents");
    // [START order_and_limit]
    _contentRef.orderBy("title").limit(3);
    // [END order_and_limit]
});


// console.log(doc);
