const categoryRef = document.querySelectorAll('.item');

console.log(`В списке ${categoryRef.length} категории.`);

categoryRef.forEach(category => {
    const categoryNameRef = category.querySelector('h2');
    console.log(`Категория: ${categoryNameRef.textContent}`);
    const categoryListEl = category.querySelectorAll('li');
    console.log(`Количество элементов: ${categoryListEl.length}`);
    
    });

