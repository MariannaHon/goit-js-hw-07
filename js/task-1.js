const findCategories = document.querySelectorAll('.item');
const categoriesString = `Number of categories: ${findCategories.length}`;

console.log(categoriesString);

findCategories.forEach(function categoryList(item) {    
    const categoriesNames = item.firstElementChild;
    categoriesNames.classList.add('title-categories');

    const categoriesTitle = item.firstElementChild.textContent;
    console.log(`Category: ${categoriesTitle}`);

    const next = item.lastElementChild;
    next.classList.add('list');

    const categoryItems = item.lastElementChild.children;
    console.log(`Elements: ${categoryItems.length}`);
})

