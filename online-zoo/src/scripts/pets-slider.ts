const petsContainer = document.querySelector(
  ".our-pets_slider_container",
) as HTMLElement
const petsPrev = document.getElementById("petsPrev")
const petsNext = document.getElementById("petsNext")
let currentPetsSlide = 0

function getPetsCardWidth() {
  const firstCard = petsContainer?.querySelector(".card--navy") as HTMLElement
  if (!firstCard) return 460
  return firstCard.offsetWidth + 30
}

function getPetsCardsCount() {
  if (!petsContainer) return 0
  return petsContainer.querySelectorAll(".card--navy").length
}

function getPetsCardsToShow() {
  const inner = document.querySelector(".our-pets_slider_inner") as HTMLElement
  if (!inner) return 6
  const containerWidth = inner.offsetWidth
  const cardWidth = getPetsCardWidth()
  const cardsPerRow = Math.max(1, Math.floor(containerWidth / cardWidth))
  return cardsPerRow * 2
}

function updatePetsSlider() {
  if (!petsContainer) return
  const cardsCount = getPetsCardsCount()
  const cardsToShow = getPetsCardsToShow()
  const cardsPerRow = cardsToShow / 2
  const totalColumns = Math.ceil(cardsCount / 2)
  const maxSlide = Math.max(0, totalColumns - cardsPerRow)
  if (currentPetsSlide > maxSlide) currentPetsSlide = maxSlide
  const cardWidth = getPetsCardWidth()
  const offset = currentPetsSlide * cardWidth
  petsContainer.style.transform = `translateX(-${offset}px)`
  petsContainer.style.transition = "transform 0.3s ease"
}

if (petsPrev) {
  petsPrev.addEventListener("click", () => {
    const cardsCount = getPetsCardsCount()
    const cardsToShow = getPetsCardsToShow()
    const cardsPerRow = cardsToShow / 2
    const totalColumns = Math.ceil(cardsCount / 2)
    const maxSlide = Math.max(0, totalColumns - cardsPerRow)
    if (currentPetsSlide > 0) {
      currentPetsSlide--
    } else {
      currentPetsSlide = maxSlide
    }
    updatePetsSlider()
  })
}

if (petsNext) {
  petsNext.addEventListener("click", () => {
    const cardsCount = getPetsCardsCount()
    const cardsToShow = getPetsCardsToShow()
    const cardsPerRow = cardsToShow / 2
    const totalColumns = Math.ceil(cardsCount / 2)
    const maxSlide = Math.max(0, totalColumns - cardsPerRow)
    if (currentPetsSlide < maxSlide) {
      currentPetsSlide++
    } else {
      currentPetsSlide = 0
    }
    updatePetsSlider()
  })
}

window.addEventListener("resize", updatePetsSlider)

export { updatePetsSlider }
