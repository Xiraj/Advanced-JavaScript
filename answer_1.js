const Obj = {
    author: "John Red Doe",
    title: "Mr.RED has a red and a green car",
    images: {
      url: "https://dummy.com/red-image.jpg",
    }
  };
  
  function replaceColor(Obj) {
    for (let prop in Obj) {
      if (typeof Obj[prop] === "string") {
        Obj[prop] = Obj[prop].replace(/red/gi, "blue");
      } else if (typeof Obj[prop] === "object" && Obj[prop] !== null) {
        replaceColor(Obj[prop]);
      }
    }
    return Obj;
  };
  
console.log(replaceColor(Obj))