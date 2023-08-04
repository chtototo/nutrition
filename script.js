let products = [
    {
        name: 'Овсяная каша',
        proteins: 2.6,
        fats: 4.1,
        carbohydrates: 15.5,
        calories: 109,
    },
    {
        name: 'Рисовая каша',
        proteins: 2.4,
        fats: 3.5,
        carbohydrates: 25.8,
        calories: 144,
    },
    {
        name: 'Оладьи',
        proteins: 6.5,
        fats: 6.6,
        carbohydrates: 31.6,
        calories: 213,
    },
];

function sortByField(field) {
    products.sort((a, b) => a[field] > b[field] ? 1 : -1);
}

function sortOfName() {
    sortByField('name')
    render();
}

function sortOfProteins() {
    sortByField('proteins')
    render();
}

function sortOfFats() {
    sortByField('fats')
    render();
}

function sortOfCarbohydrates() {
    sortByField('carbohydrates')
    render();
}

function sortOfCalories() {
    sortByField('calories')
    render();
}

function render() {
    document.getElementById('calories_table').innerHTML=``
    for (product of products) {
        document.getElementById('calories_table').innerHTML+=`
        <tr>
                    <td id="name">${product.name}</td>
                    <td id="proteins">${product.proteins}</td>
                    <td id="fats">${product.fats}</td>
                    <td id="carbohydrates">${product.carbohydrates}</td>
                    <td id="calories">${product.calories}</td>
                </tr>
        `
    }
}