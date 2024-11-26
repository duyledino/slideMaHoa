let body = document.querySelector("body");

function appearText(text) {
  // Replace each character with a span and apply a delay
  
  text.innerHTML = text.innerHTML
    .split("")
    .map((item, index) => {
      return `<span style="transition: opacity 0.5s ease ${
        index * 10
      }ms; opacity: 0;">${item}</span>`;
    })
    .join("");

  // Allow the spans to transition in with opacity
  setTimeout(() => {
    const spans = text.querySelectorAll("span");
    spans.forEach((span) => {
      span.style.opacity = "1";
    });
  }, 50);
}

function liAppear(slide2RightSideMember) {
  slide2RightSideMember.forEach((item) => {
    appearText(item);
  });
}

const getData = async () => {
  const respone = await fetch("./insert.json");
  const data = await respone.json();
  return data;
};

const data = getData();
data.then((d) => {
  debugger;
  arr = d.slides;
  body.innerHTML = arr[0].content;
  const mainContentTitleH2 = document.querySelector(".mainContent .title>h2");
  const leftSideTitleH2 = document.querySelector(".leftSide .title>h2");
  const menuInMainContent = document.querySelector(".mainContent .menu");
  const divInContent = document.querySelectorAll(
    ".slide .mainContent>.content>*"
  );
  const downSideI = document.querySelector("i");
  const slide2RightSideMember = document.querySelectorAll(
    ".slide2>.rightSide>.member>ul>*"
  );
  if (mainContentTitleH2 !== null) {
    appearText(mainContentTitleH2);
  }
  if (divInContent !== null) {
    divInContent.forEach((item) => {
      appearText(item);
    });
  }
  if(downSideI !== null){
    setTimeout(()=>{
    downSideI.classList.add("appear");
    },50)
  }
  let i = 0;
  function changeSlideNext() {
    const child = body.querySelector(`.${body.firstElementChild.classList[0]}`);
    child.style.transition = "all 0.5s ease";
    child.style.transform = `translateX(-${child.offsetWidth}px)`;
    setTimeout(() => {
      if (body.childElementCount > 0) {
        while (body.firstElementChild) {
          body.removeChild(body.firstElementChild);
        }
      }
      body.innerHTML = arr[i].content;
      const mainContentTitleH2 = document.querySelector(".mainContent .title>h2");
      const leftSideTitleH2 = document.querySelector(".leftSide .title>h2");
      const menuInMainContent = document.querySelector(".mainContent .menu");
      const downSideI = document.querySelector("i");
      const liInMainContent = document.querySelectorAll(".mainContent .content>ul>*");
      const slide2RightSideMember = document.querySelectorAll(
        ".slide2>.rightSide>.member>ul>*"
      );
        body = document.querySelector("body");
      if (mainContentTitleH2 !== null) {
        appearText(mainContentTitleH2);
      }
      if (divInContent !== null) {
        divInContent.forEach((item) => {
          appearText(item);
        });
      }
      if(leftSideTitleH2!==null){
        appearText(leftSideTitleH2);
      }
      if(liInMainContent !== null){
        liInMainContent.forEach((item) => {
            appearText(item);
          });
      }
      if(downSideI !== null){
        setTimeout(()=>{
        downSideI.classList.add("appear");
        },50)
      }

    }, 500);
  }
  function changeSlidePre() {
    const child = body.querySelector(`.${body.firstElementChild.classList[0]}`);
    child.style.transition = "all 0.5s ease";
    child.style.transform = `translateX(${child.offsetWidth}px)`;
    setTimeout(() => {
      if (body.childElementCount > 0) {
        while (body.firstElementChild) {
          body.removeChild(body.firstElementChild);
        }
      }
      body.innerHTML = arr[i].content;
      const mainContentTitleH2 = document.querySelector(".mainContent .title>h2");
      const leftSideTitleH2 = document.querySelector(".leftSide .title>h2");
      const menuInMainContent = document.querySelector(".mainContent .menu");
      const divInContent = document.querySelectorAll(
        ".slide .mainContent>.content>*"
      );
      const downSideI = document.querySelector("i");
      const slide2RightSideMember = document.querySelectorAll(
        ".slide2>.rightSide>.member>ul>*"
      );
    body = document.querySelector("body");
      if (mainContentTitleH2 !== null) {
        appearText(mainContentTitleH2);
      }
      if(downSideI !== null){
        setTimeout(()=>{
        downSideI.classList.add("appear");
        },50)
      }
    }, 500);
  }
  function doFuncIncre() {
    if (i >= arr.length - 1) {
      i = 0;
    } else {
      i++;
    }
    changeSlideNext();
  }

  function doFuncDecre() {
    if (i === 0) {
      i = arr.length - 1;
    } else {
      i--;
    }
    changeSlidePre();
  }
  document.addEventListener("keydown", (e) => {
    debugger;
    if (e.key === "ArrowRight") {
      doFuncIncre();
    } else if (e.key === "ArrowLeft") {
      doFuncDecre();
    }
  });
});

// leftSideText.forEach((item) => {
//   if (item.children.length > 0) {
//     const children = item.querySelector("h2");
//     appearText(children);
//   } else {
//     appearText(item);
//   }
// });

// menuInMainContent.style.opacity = 1;
// downSideI.classList.add("appear");
