/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        const elem = document.createElement(tag);
        elem.innerHTML = content;
        document.body.append(elem);
    }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level) {
    let div = document.createElement('div');
    div.classList.add('item_1');
    document.body.append(div);

    for (let i = 1; i < level; i++) {
        let current_lvl = document.getElementsByClassName(`item_${i}`);
        for (let cl of current_lvl) {
            for (let j = 0; j < childrenCount; j++) {
                const newDiv = document.createElement('div');
                newDiv.classList.add(`item_${i + 1}`);
                cl.append(newDiv);
            }
        }
    }
    return div;
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    const tree = generateTree(2, 3);
    const item2 = document.getElementsByClassName('item_2');

    for (let cl of item2) {
        const sect = document.createElement('section');
        sect.classList.add('item_2');
        sect.innerHTML = cl.innerHTML;
        tree.replaceChild(sect, cl);
    }
    return tree;
}
