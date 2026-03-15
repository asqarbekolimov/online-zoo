import getData from "../lib/api"
import type { ITestimonial } from "../types"

const testimonialContainer = document.querySelector(
  ".users_testimonials_container",
) as HTMLElement

function showLoading() {
  if (!testimonialContainer) return
  testimonialContainer.innerHTML = `
    <div class="testimonials-loading">
      <div class="loading-spinner"></div>
      <p>Loading testimonials...</p>
    </div>
  `
}

function showError(message: string) {
  if (!testimonialContainer) return
  testimonialContainer.innerHTML = `
    <div class="testimonials-error">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
      </svg>
      <p>${message}</p>
      <button class="btn retry-btn" onclick="location.reload()">Retry</button>
    </div>
  `
}

function renderTestimonials(testimonials: ITestimonial[]) {
  if (!testimonialContainer) return

  testimonialContainer.innerHTML = testimonials
    .map(
      (testimonial) => `
        <div class="users_testimonial_card">
          <div class="quote_icon">
            <span class="quote">"</span>
          </div>
          <div class="text-subheader">${testimonial.city}, ${testimonial.month} ${testimonial.year}</div>
          <p class="text-body">${testimonial.text}</p>
          <div class="text-button">${testimonial.name}</div>
        </div>
      `,
    )
    .join("")
}

async function getTestimonials(): Promise<ITestimonial[] | null> {
  showLoading()

  try {
    const { data } = await getData("feedback")
    return data
  } catch (error) {
    console.error("Testimonials ma'lumotlarini olishda xatolik:", error)
    showError("Failed to load testimonials. Please try again.")
    return null
  }
}

const testimonialPrev = document.getElementById("testimonialPrev")
const testimonialNext = document.getElementById("testimonialNext")
let currentSlide = 0

function getCardWidth() {
  const firstCard = document.querySelector(
    ".users_testimonial_card",
  ) as HTMLElement
  if (!firstCard) return 545
  return firstCard.offsetWidth + 30
}

function getCardsPerRow() {
  if (!testimonialContainer) return 12
  const totalCards = testimonialContainer.querySelectorAll(
    ".users_testimonial_card",
  ).length
  return Math.ceil(totalCards / 2)
}

function getCardsToShow() {
  const inner = document.querySelector(
    ".users_testimonials_inner",
  ) as HTMLElement
  if (!inner) return 3
  const containerWidth = inner.offsetWidth
  const cardWidth = getCardWidth()
  return Math.max(1, Math.floor(containerWidth / cardWidth))
}

function updateTestimonialSlider() {
  if (!testimonialContainer) return
  const totalColumns = getCardsPerRow()
  const columnsToShow = getCardsToShow()
  const maxSlide = Math.max(0, totalColumns - columnsToShow)
  if (currentSlide > maxSlide) currentSlide = maxSlide
  const cardWidth = getCardWidth()
  const offset = currentSlide * cardWidth
  testimonialContainer.style.transform = `translateX(-${offset}px)`
  testimonialContainer.style.transition = "transform 0.3s ease"
}

if (testimonialPrev) {
  testimonialPrev.addEventListener("click", () => {
    const totalColumns = getCardsPerRow()
    const columnsToShow = getCardsToShow()
    const maxSlide = Math.max(0, totalColumns - columnsToShow)
    if (currentSlide > 0) {
      currentSlide--
    } else {
      currentSlide = maxSlide
    }
    updateTestimonialSlider()
  })
}

if (testimonialNext) {
  testimonialNext.addEventListener("click", () => {
    const totalColumns = getCardsPerRow()
    const columnsToShow = getCardsToShow()
    const maxSlide = Math.max(0, totalColumns - columnsToShow)
    if (currentSlide < maxSlide) {
      currentSlide++
    } else {
      currentSlide = 0
    }
    updateTestimonialSlider()
  })
}

window.addEventListener("resize", updateTestimonialSlider)

const testimonials = await getTestimonials()
if (testimonials) {
  renderTestimonials(testimonials)
  updateTestimonialSlider()
}
