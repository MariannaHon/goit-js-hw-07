const container = document.querySelector('#categories');
container.style.backgroundColor = "#fff";
container.style.borderRadius = "8px";
container.style.padding = "24px";
container.style.width = "440px";
container.style.height = "888px";
container.style.margin = "0 auto";
container.style.listStyleType = "none";
container.style.gap = "24px";

const findCategories = document.querySelectorAll('.item');

const categoriesString = `Number of categories: ${findCategories.length}`;

console.log(categoriesString);


findCategories.forEach(function categoryList(item) {    

    const categoriesTitle = item.firstElementChild.textContent;
    console.log(`Category: ${categoriesTitle}`);

    const next = item.lastElementChild;
    next.style.listStyleType = "none";

    const categoryItems = item.querySelectorAll('ul > li');
    console.log(`Elements: ${categoryItems.length}`);
})


// або можна це зробити ще так:

// const categoriesNames = document.querySelectorAll('h2');


// categoriesNames.forEach(function (name) {
//     const categoriesTitle = name.textContent;
//     console.log(`Category: ${categoriesTitle}`);

//     const categoryItems = name.parentElement.querySelectorAll('ul > li');
//     console.log(`Elements: ${categoryItems.length}`);
// });

