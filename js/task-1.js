function slugify(title) {
    const slugLow = title.toLowerCase();
    const slugMassive = slugLow.split(" ");
    const slugHyphen = slugMassive.join("-")
    return slugHyphen;
}

console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"