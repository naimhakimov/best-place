const card = document.querySelector('.content-card')

async function fetchData() {
  const data = await fetch('db.json')
  const { content } = await data.json()
  card.innerHTML = content.map((p, idx) => renderHtml(p, idx)).join(' ')
}

fetchData()

function renderHtml(place, idx) {
  return `
    <div class="content-item item">
      <div class="item__title">${idx + 1}.${place.title}</div>
      <img src="img/${place.img}" alt="">
      <div class="item__text">${place.text}</div>
    </div>
  `
}