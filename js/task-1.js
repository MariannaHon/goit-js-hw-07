const findCategories = document.querySelectorAll('.item');
const categoriesString = `Number of categories: ${findCategories.length}`;

console.log(categoriesString);

findCategories.forEach(function (item) {
    const categoriesTitle = item.firstElementChild.textContent;
    console.log(`Category: ${categoriesTitle}`);

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