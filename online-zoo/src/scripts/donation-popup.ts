createDonationModal()
createDonationFormModal()

const donationModal = document.getElementById("donationModal")
const modalClose = document.getElementById("modalClose")
const donationTriggers =
  document.querySelectorAll<HTMLElement>(".donation-trigger")
const quickDonateBtn = document.getElementById("quickDonateBtn")
const quickDonationAmount = document.getElementById(
  "quickDonationAmount",
) as HTMLInputElement | null

function openDonationModal() {
  if (!donationModal) return
  donationModal.classList.remove("hidden")
  document.body.style.overflow = "hidden"
}

function closeDonationModal() {
  if (!donationModal) return
  donationModal.classList.add("hidden")
  document.body.style.overflow = ""
}

if (modalClose) {
  modalClose.addEventListener("click", closeDonationModal)
}

if (donationModal) {
  donationModal.addEventListener("click", (e) => {
    if (e.target === donationModal) {
      closeDonationModal()
    }
  })
}

const donationAmountBtns = document.querySelectorAll<HTMLButtonElement>(
  ".donation-amount-btn",
)
donationAmountBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const amount = btn.dataset.amount ?? null
    closeDonationModal()
    openDonationFormModal(amount)
  })
})

donationTriggers.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault()
    openDonationModal()
  })
})

if (quickDonateBtn) {
  quickDonateBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const amount = quickDonationAmount ? quickDonationAmount.value : ""
    openDonationFormModal(amount ? "other" : null)
    if (amount) {
      const otherInput = document.querySelector<HTMLInputElement>(
        ".other-amount-input",
      )
      if (otherInput) {
        otherInput.value = amount
      }
    }
  })
}

if (quickDonationAmount) {
  quickDonationAmount.addEventListener("input", (e) => {
    const target = e.target as HTMLInputElement | null
    if (!target) return
    target.value = target.value.replace(/[^0-9]/g, "")
  })
}

const donationFormModal = document.getElementById("donationFormModal")
const donationFormClose = document.getElementById("donationFormClose")
const step1 = document.getElementById("donationStep1")
const step2 = document.getElementById("donationStep2")
const step3 = document.getElementById("donationStep3")
const toStep2Btn = document.getElementById("toStep2")
const toStep3Btn = document.getElementById("toStep3")
const backToStep1Btn = document.getElementById("backToStep1")
const backToStep2Btn = document.getElementById("backToStep2")
const submitBtn = document.getElementById("submitDonation")

function openDonationFormModal(amount: string | null) {
  if (!donationFormModal) return
  donationFormModal.classList.remove("hidden")
  document.body.style.overflow = "hidden"

  if (amount && amount !== "other") {
    const amountBtns =
      document.querySelectorAll<HTMLButtonElement>(".amount-btn")
    amountBtns.forEach((btn) => {
      if (btn.dataset.amount === amount) {
        btn.classList.add("selected")
      } else {
        btn.classList.remove("selected")
      }
    })
  }

  showStep(1)
}

function closeDonationFormModal() {
  if (!donationFormModal) return
  donationFormModal.classList.add("hidden")
  document.body.style.overflow = ""
  showStep(1)
}

function showStep(stepNum: 1 | 2 | 3) {
  if (!step1 || !step2 || !step3) return
  step1.classList.add("hidden")
  step2.classList.add("hidden")
  step3.classList.add("hidden")

  if (stepNum === 1) step1.classList.remove("hidden")
  if (stepNum === 2) step2.classList.remove("hidden")
  if (stepNum === 3) step3.classList.remove("hidden")
}

if (donationFormClose) {
  donationFormClose.addEventListener("click", closeDonationFormModal)
}

if (donationFormModal) {
  donationFormModal.addEventListener("click", (e) => {
    if (e.target === donationFormModal) {
      closeDonationFormModal()
    }
  })
}

if (toStep2Btn) {
  toStep2Btn.addEventListener("click", () => showStep(2))
}
if (toStep3Btn) {
  toStep3Btn.addEventListener("click", () => showStep(3))
}
if (backToStep1Btn) {
  backToStep1Btn.addEventListener("click", () => showStep(1))
}
if (backToStep2Btn) {
  backToStep2Btn.addEventListener("click", () => showStep(2))
}

if (submitBtn) {
  submitBtn.addEventListener("click", () => {
    closeDonationFormModal()
  })
}

const amountBtns = document.querySelectorAll<HTMLButtonElement>(".amount-btn")
amountBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    amountBtns.forEach((b) => b.classList.remove("selected"))
    btn.classList.add("selected")
  })
})

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (donationModal && !donationModal.classList.contains("hidden")) {
      closeDonationModal()
    }
    if (donationFormModal && !donationFormModal.classList.contains("hidden")) {
      closeDonationFormModal()
    }
  }
})

const customSelect = document.getElementById("petSelect")
if (customSelect) {
  const selectSelected =
    customSelect.querySelector<HTMLElement>(".select-selected")
  const selectItems = customSelect.querySelector<HTMLElement>(".select-items")

  if (selectSelected && selectItems) {
    const options = selectItems.querySelectorAll<HTMLElement>("div")

    selectSelected.addEventListener("click", (e) => {
      e.stopPropagation()
      selectItems.classList.toggle("select-hide")
      selectSelected.classList.toggle("select-arrow-active")
    })

    options.forEach((option) => {
      option.addEventListener("click", () => {
        selectSelected.textContent = option.textContent ?? ""
        selectSelected.style.color = "#000"
        options.forEach((opt) => opt.classList.remove("same-as-selected"))
        option.classList.add("same-as-selected")
        selectItems.classList.add("select-hide")
        selectSelected.classList.remove("select-arrow-active")
      })
    })

    document.addEventListener("click", () => {
      selectItems.classList.add("select-hide")
      selectSelected.classList.remove("select-arrow-active")
    })
  }
}

function createDonationModal() {
  const modalHTML = `
    <div class="modal-overlay hidden" id="donationModal">
      <div class="modal">
        <button class="modal-close" id="modalClose" aria-label="Close modal">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="none">
            <path d="M29.0002 1L1 29.0002M1.00024 1L29.0005 29.0002" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div class="modal-image">
          <img src="../../assets/images/modal-hero.png" alt="Hand holding animal paw">
        </div>
        <div class="modal-content">
          <h2 class="modal-title">together we care, save and protect!</h2>
          <p class="modal-description">
            Your most generous gift not only cares for countless animals, but it
            also offers hope and a vital lifeline to the world's most endangered
            wildlife relying on us to survive.
          </p>
          <div class="modal-buttons">
            <button class="donation-btn donation-amount-btn" data-amount="20">$20</button>
            <button class="donation-btn donation-amount-btn" data-amount="30">$30</button>
            <button class="donation-btn donation-amount-btn" data-amount="50">$50</button>
            <button class="donation-btn donation-amount-btn" data-amount="80">$80</button>
            <button class="donation-btn donation-amount-btn" data-amount="100">$100</button>
            <button class="donation-btn donation-amount-btn" data-amount="other">other amount</button>
          </div>
        </div>
      </div>
    </div>`
  document.body.insertAdjacentHTML("beforeend", modalHTML)
}

function createDonationFormModal() {
  const arrowRight = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="22" viewBox="0 0 25 22" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.2098 0.119971C13.0277 0.199174 12.8622 0.315255 12.7229 0.461565C12.5833 0.607505 12.4725 0.780876 12.397 0.971748C12.3214 1.16262 12.2825 1.36724 12.2825 1.57389C12.2825 1.78055 12.3214 1.98517 12.397 2.17604C12.4725 2.36691 12.5833 2.54028 12.7229 2.68622L18.7506 9H1.6C1.17565 9 0.768688 9.21071 0.468629 9.58579C0.168571 9.96086 0 10.4696 0 11C0 11.5304 0.168571 12.0391 0.468629 12.4142C0.768688 12.7893 1.17565 13 1.6 13H18.7514L12.7229 19.3146C12.4414 19.6096 12.2833 20.0097 12.2833 20.4269C12.2833 20.8441 12.4414 21.2443 12.7229 21.5393C13.0045 21.8343 13.3863 22 13.7845 22C14.1826 22 14.5645 21.8343 14.846 21.5393L23.842 12.1127C23.9816 11.9668 24.0924 11.7934 24.168 11.6026C24.2436 11.4117 24.2825 11.2071 24.2825 11.0004C24.2825 10.7938 24.2436 10.5891 24.168 10.3983C24.0924 10.2074 23.9816 10.034 23.842 9.88808L14.846 0.461565C14.7067 0.315255 14.5413 0.199174 14.3591 0.119971C14.177 0.0407677 13.9817 0 13.7845 0C13.5873 0 13.392 0.0407677 13.2098 0.119971Z" fill="white"/></svg>`
  const arrowLeft = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="22" viewBox="0 0 25 22" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.0724 0.119971C11.2545 0.199174 11.42 0.315255 11.5593 0.461565C11.6989 0.607505 11.8097 0.780876 11.8853 0.971748C11.9609 1.16262 11.9998 1.36724 11.9998 1.57389C11.9998 1.78055 11.9609 1.98517 11.8853 2.17604C11.8097 2.36691 11.6989 2.54028 11.5593 2.68622L5.53159 9H22.6822C23.1066 9 23.5135 9.21071 23.8136 9.58579C24.1137 9.96086 24.2822 10.4696 24.2822 11C24.2822 11.5304 24.1137 12.0391 23.8136 12.4142C23.5135 12.7893 23.1066 13 22.6822 13H5.53081L11.5593 19.3146C11.8408 19.6096 11.999 20.0097 11.999 20.4269C11.999 20.8441 11.8408 21.2443 11.5593 21.5393C11.2777 21.8343 10.8959 22 10.4978 22C10.0996 22 9.71776 21.8343 9.43622 21.5393L0.440245 12.1127C0.300617 11.9668 0.189838 11.7934 0.114252 11.6026C0.0386677 11.4117 -0.000240326 11.2071 -0.000240326 11.0004C-0.000240326 10.7938 0.0386677 10.5891 0.114252 10.3983C0.189838 10.2074 0.300617 10.034 0.440245 9.88808L9.43622 0.461565C9.5755 0.315255 9.74095 0.199174 9.92311 0.119971C10.1053 0.0407677 10.3005 0 10.4978 0C10.695 0 10.8902 0.0407677 11.0724 0.119971Z" fill="currentColor"/></svg>`

  const modalHTML = `
    <div class="modal-overlay hidden" id="donationFormModal">
      <div class="donation-form-modal">
        <button class="modal-close" id="donationFormClose" aria-label="Close modal">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="none">
            <path d="M29.0002 1L1 29.0002M1.00024 1L29.0005 29.0002" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <div class="donation-form-header">
          <h3 class="donation-form-title">make your donation</h3>
        </div>

        <div class="donation-form-divider"></div>

        <div class="donation-step" id="donationStep1">
          <h4 class="donation-section-title">Donation Information:</h4>
          <div class="donation-form-content">
            <p class="donation-label"><span class="required">*</span> Choose your donation amount:</p>
            <div class="amount-buttons">
              <button class="amount-btn" data-amount="10">$10</button>
              <button class="amount-btn" data-amount="20">$20</button>
              <button class="amount-btn" data-amount="30">$30</button>
              <button class="amount-btn" data-amount="50">$50</button>
              <button class="amount-btn" data-amount="80">$80</button>
              <button class="amount-btn" data-amount="100">$100</button>
            </div>
            <div class="other-amount-row">
              <button class="other-amount-btn">other amount</button>
              <input type="text" class="other-amount-input" placeholder="">
            </div>
            <div class="special-pet-row">
              <button class="special-pet-btn">for special pet</button>
              <div class="custom-select" id="petSelect">
                <div class="select-selected">Choose your favourite</div>
                <div class="select-items select-hide">
                  <div data-value="lukas">Lukas the Panda</div>
                  <div data-value="andy">Andy the Lemur</div>
                  <div data-value="glen">Glen the Gorilla</div>
                  <div data-value="mike">Mike the Alligator</div>
                  <div data-value="sam-lora">Sam & Lora the eagles family</div>
                  <div data-value="liz">Liz the Koala</div>
                  <div data-value="shake">Shake the Lion</div>
                  <div data-value="senja">Senja the Tiger</div>
                </div>
              </div>
            </div>
            <div class="recurring-gift">
              <label class="checkbox-container">
                <input type="checkbox" id="recurringGift">
                <span class="checkmark"></span>
                Make this a monthly recurring gift
              </label>
            </div>
          </div>
          <div class="donation-form-footer">
            <div class="step-indicators">
              <span class="step-dot active"></span>
              <span class="step-dot"></span>
              <span class="step-dot"></span>
            </div>
            <button class="next-btn" id="toStep2">
              <span>NEXT</span>
              ${arrowRight}
            </button>
          </div>
        </div>

        <div class="donation-step hidden" id="donationStep2">
          <h4 class="donation-section-title">Donor Information:</h4>
          <div class="donation-form-content">
            <div class="form-grid">
              <div class="form-group">
                <label><span class="required">*</span> First name</label>
                <input type="text" id="firstName" required>
              </div>
              <div class="form-group">
                <label><span class="required">*</span> Last name</label>
                <input type="text" id="lastName" required>
              </div>
              <div class="form-group">
                <label><span class="required">*</span> Email</label>
                <input type="email" id="email" required>
              </div>
              <div class="form-group">
                <label>Phone number</label>
                <input type="tel" id="phone">
              </div>
            </div>
          </div>
          <div class="donation-form-footer">
            <div class="step-indicators">
              <span class="step-dot completed"></span>
              <span class="step-dot active"></span>
              <span class="step-dot"></span>
            </div>
            <div class="footer-buttons">
              <button class="back-btn" id="backToStep1">
                ${arrowLeft}
                <span>BACK</span>
              </button>
              <button class="next-btn" id="toStep3">
                <span>NEXT</span>
                ${arrowRight}
              </button>
            </div>
          </div>
        </div>

        <div class="donation-step hidden" id="donationStep3">
          <h4 class="donation-section-title">Payment Information:</h4>
          <div class="donation-form-content">
            <div class="form-grid">
              <div class="form-group full-width">
                <label><span class="required">*</span> Card number</label>
                <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" required>
              </div>
              <div class="form-group">
                <label><span class="required">*</span> Expiration date</label>
                <input type="text" id="expDate" placeholder="MM/YY" required>
              </div>
              <div class="form-group">
                <label><span class="required">*</span> CVV</label>
                <input type="text" id="cvv" placeholder="123" required>
              </div>
              <div class="form-group full-width">
                <label><span class="required">*</span> Cardholder name</label>
                <input type="text" id="cardholderName" required>
              </div>
            </div>
          </div>
          <div class="donation-form-footer">
            <div class="step-indicators">
              <span class="step-dot completed"></span>
              <span class="step-dot completed"></span>
              <span class="step-dot active"></span>
            </div>
            <div class="footer-buttons">
              <button class="back-btn" id="backToStep2">
                ${arrowLeft}
                <span>BACK</span>
              </button>
              <button class="submit-btn" id="submitDonation">
                <span>DONATE</span>
                ${arrowRight}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>`
  document.body.insertAdjacentHTML("beforeend", modalHTML)
}
