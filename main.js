// 2. Сделайте fetch(post или get) запрос на любой api  c помощью mamp или локально
// 3.Создайте модальное окно  чисто на js и задайте ему размеры и стилизации 
// тоже через js изначально оно должно быть не видимым после отправки запроса 
// у вас должно открываться модальное окно. Если при отправке запроса 
// у вас произошло ошибка то открывайте окно с сообщение
//  что была ошибка(нужно добавить текст к DOM элементу),
//   если успешо то нужно вывести что запрос прошел успешно, 
//   и с помощью finally через тамй-аут на 5 сек нужно обратно 
//   закрыть модальное окно (используйте добавление активных и не активных
//      классов для открытие и закрытие модалки)
// 4. Сделайте запрос на:
// https://jsonplaceholder.typicode.com/todos 
// и нужно вывести каждую todo в html т.е каждый элемент нужно 
// добавить в html( если хотите можете стилизовать ). Использовать метод fetch для запросов


const todos = document.querySelector('.todos')

const getData = async () => {
    const modalWrapper = document.createElement('div')
    modalWrapper.classList.add('modalWrapper')
    modalWrapper.classList.add('modalOpen')
    document.body.append(modalWrapper)
    const modal = document.createElement('div')
    modal.classList.add('modal')
    modalWrapper.append(modal)

    setTimeout(() => {
        modalWrapper.classList.add('modalClose')
    }, 5000);

    
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json()
        
        modal.innerHTML = `
            <h3>Данные успешно получены</h3>
        `
        

        data.forEach(e => {
            todos.innerHTML += `
                <div>
                    <h2>${e.title}</h2>
                    <span>${e.id}</span>
                    <span>${e.completed ? 'Завершен' : 'Не завершен'}</span>
                </div>
            `
        })

    } catch(e) {
        modal.innerHTML = `
        <h3>Ошибка!</h3>
    `
    }



}

getData()

