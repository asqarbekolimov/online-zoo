const userAvatar = document.querySelector(".user__avatar") as HTMLElement | null

const LOGIN_MODAL_ID = "auth-login-modal"
const REGISTER_MODAL_ID = "auth-register-modal"

function validateName(value: string): string | null {
  const name = value.trim()
  if (name.length === 0) return "Name is required"
  if (name.length < 3) return "Name should be at least 3 characters long"
  if (!/^[A-Za-z]+$/.test(name)) return "Only English alphabet letters are allowed"
  return null
}

function validateLogin(value: string): string | null {
  const login = value.trim()
  if (login.length === 0) return "Login is required"
  if (login.length < 3) return "Login should be at least 3 characters long"
  if (!/^[A-Za-z]/.test(login)) return "Login should start with a letter"
  if (!/^[A-Za-z]+$/.test(login)) return "Only English alphabet letters are allowed"
  return null
}

function validatePassword(value: string): string | null {
  const password = value.trim()
  if (password.length === 0) return "Password is required"
  if (password.length < 6) return "Password should be at least 6 characters long"
  if (!/[^A-Za-z0-9]/.test(password)) return "Password should contain at least 1 special character"
  return null
}

function validateConfirmPassword(passwordValue: string, confirmValue: string): string | null {
  const confirmError = validatePassword(confirmValue)
  if (confirmError) return confirmError
  if (passwordValue !== confirmValue) return "Passwords should match"
  return null
}

function showInputError(input: HTMLInputElement, message: string) {
  const field = input.closest(".auth-modal__field") as HTMLElement | null
  if (!field) return
  const error = field.querySelector(".auth-modal__error") as HTMLElement | null
  input.classList.add("auth-modal__input--invalid")
  field.classList.add("auth-modal__field--invalid")
  if (error) error.textContent = message
}

function clearInputError(input: HTMLInputElement) {
  const field = input.closest(".auth-modal__field") as HTMLElement | null
  if (!field) return
  const error = field.querySelector(".auth-modal__error") as HTMLElement | null
  input.classList.remove("auth-modal__input--invalid")
  field.classList.remove("auth-modal__field--invalid")
  if (error) error.textContent = ""
}

function createLoginModal() {
  const old = document.getElementById(LOGIN_MODAL_ID)
  if (old) return old as HTMLElement

  const modal = document.createElement("div")
  modal.id = LOGIN_MODAL_ID
  modal.className = "auth-modal"
  modal.setAttribute("aria-hidden", "true")
  modal.innerHTML = `
    <div class="auth-modal__backdrop" data-auth-close="true"></div>
    <div class="auth-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="auth-login-title">
      <button class="auth-modal__close" type="button" aria-label="Close" data-auth-close="true">X</button>
      <h3 class="heading-3 auth-modal__title" id="auth-login-title">Login</h3>
      <form class="auth-modal__form" id="authLoginForm">
        <div class="auth-modal__field">
          <label class="auth-modal__label" for="authLoginOnly">Login</label>
          <input class="auth-modal__input" id="authLoginOnly" name="login" type="text" placeholder="Enter login" autocomplete="username" />
          <span class="auth-modal__error-icon" aria-hidden="true">!</span>
          <p class="auth-modal__error" aria-live="polite"></p>
        </div>
        <div class="auth-modal__field">
          <label class="auth-modal__label" for="authPasswordOnly">Password</label>
          <input class="auth-modal__input" id="authPasswordOnly" name="password" type="password" placeholder="Enter password" autocomplete="current-password" />
          <span class="auth-modal__error-icon" aria-hidden="true">!</span>
          <p class="auth-modal__error" aria-live="polite"></p>
        </div>
        <p class="auth-modal__form-error" id="authLoginFormError" aria-live="polite"></p>
        <button class="btn auth-modal__submit" type="submit">Login</button>
      </form>
      <p class="auth-modal__switch">
        Don't have an account?
        <button type="button" class="auth-modal__switch-btn" data-auth-switch="register">Register</button>
      </p>
    </div>
  `
  document.body.appendChild(modal)
  return modal
}

function createRegisterModal() {
  const old = document.getElementById(REGISTER_MODAL_ID)
  if (old) return old as HTMLElement

  const modal = document.createElement("div")
  modal.id = REGISTER_MODAL_ID
  modal.className = "auth-modal"
  modal.setAttribute("aria-hidden", "true")
  modal.innerHTML = `
    <div class="auth-modal__backdrop" data-auth-close="true"></div>
    <div class="auth-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="auth-register-title">
      <button class="auth-modal__close" type="button" aria-label="Close" data-auth-close="true">X</button>
      <h3 class="heading-3 auth-modal__title" id="auth-register-title">Register</h3>
      <form class="auth-modal__form" id="authRegisterForm">
        <div class="auth-modal__field">
          <label class="auth-modal__label" for="authName">Name</label>
          <input class="auth-modal__input" id="authName" name="name" type="text" placeholder="Enter name" autocomplete="name" />
          <span class="auth-modal__error-icon" aria-hidden="true">!</span>
          <p class="auth-modal__error" aria-live="polite"></p>
        </div>
        <div class="auth-modal__field">
          <label class="auth-modal__label" for="authLogin">Login</label>
          <input class="auth-modal__input" id="authLogin" name="login" type="text" placeholder="Enter login" autocomplete="username" />
          <span class="auth-modal__error-icon" aria-hidden="true">!</span>
          <p class="auth-modal__error" aria-live="polite"></p>
        </div>
        <div class="auth-modal__field">
          <label class="auth-modal__label" for="authPassword">Password</label>
          <input class="auth-modal__input" id="authPassword" name="password" type="password" placeholder="Enter password" autocomplete="new-password" />
          <span class="auth-modal__error-icon" aria-hidden="true">!</span>
          <p class="auth-modal__error" aria-live="polite"></p>
        </div>
        <div class="auth-modal__field">
          <label class="auth-modal__label" for="authConfirmPassword">Confirm Password</label>
          <input class="auth-modal__input" id="authConfirmPassword" name="confirmPassword" type="password" placeholder="Confirm password" autocomplete="new-password" />
          <span class="auth-modal__error-icon" aria-hidden="true">!</span>
          <p class="auth-modal__error" aria-live="polite"></p>
        </div>
        <button class="btn auth-modal__submit" id="authRegisterBtn" type="submit" disabled>Register</button>
      </form>
      <p class="auth-modal__switch">
        Already have an account?
        <button type="button" class="auth-modal__switch-btn" data-auth-switch="login">Login</button>
      </p>
    </div>
  `
  document.body.appendChild(modal)
  return modal
}

function openModal(modal: HTMLElement) {
  modal.classList.add("is-open")
  modal.setAttribute("aria-hidden", "false")
  document.body.classList.add("auth-modal-open")
}

function closeAllModals() {
  const all = document.querySelectorAll(".auth-modal")
  all.forEach((modal) => {
    const element = modal as HTMLElement
    element.classList.remove("is-open")
    element.setAttribute("aria-hidden", "true")
  })
  document.body.classList.remove("auth-modal-open")
}

if (userAvatar) {
  const loginModal = createLoginModal()
  const registerModal = createRegisterModal()

  const loginForm = loginModal.querySelector("#authLoginForm") as HTMLFormElement
  const loginInput = loginModal.querySelector("#authLoginOnly") as HTMLInputElement
  const loginPasswordInput = loginModal.querySelector("#authPasswordOnly") as HTMLInputElement
  const loginFormError = loginModal.querySelector("#authLoginFormError") as HTMLElement

  const registerForm = registerModal.querySelector("#authRegisterForm") as HTMLFormElement
  const nameInput = registerModal.querySelector("#authName") as HTMLInputElement
  const registerLoginInput = registerModal.querySelector("#authLogin") as HTMLInputElement
  const registerPasswordInput = registerModal.querySelector("#authPassword") as HTMLInputElement
  const confirmPasswordInput = registerModal.querySelector("#authConfirmPassword") as HTMLInputElement
  const registerButton = registerModal.querySelector("#authRegisterBtn") as HTMLButtonElement

  function updateRegisterButton() {
    const nameError = validateName(nameInput.value)
    const loginError = validateLogin(registerLoginInput.value)
    const passwordError = validatePassword(registerPasswordInput.value)
    const confirmError = validateConfirmPassword(
      registerPasswordInput.value,
      confirmPasswordInput.value,
    )
    registerButton.disabled = Boolean(nameError || loginError || passwordError || confirmError)
  }

  loginInput.addEventListener("blur", () => {
    const error = validateLogin(loginInput.value)
    if (error) showInputError(loginInput, error)
  })

  loginInput.addEventListener("focus", () => {
    clearInputError(loginInput)
    loginFormError.textContent = ""
  })

  loginPasswordInput.addEventListener("blur", () => {
    const error = validatePassword(loginPasswordInput.value)
    if (error) showInputError(loginPasswordInput, error)
  })

  loginPasswordInput.addEventListener("focus", () => {
    clearInputError(loginPasswordInput)
    loginFormError.textContent = ""
  })

  nameInput.addEventListener("blur", () => {
    const error = validateName(nameInput.value)
    if (error) showInputError(nameInput, error)
    updateRegisterButton()
  })

  nameInput.addEventListener("focus", () => {
    clearInputError(nameInput)
    updateRegisterButton()
  })

  nameInput.addEventListener("input", updateRegisterButton)

  registerLoginInput.addEventListener("blur", () => {
    const error = validateLogin(registerLoginInput.value)
    if (error) showInputError(registerLoginInput, error)
    updateRegisterButton()
  })

  registerLoginInput.addEventListener("focus", () => {
    clearInputError(registerLoginInput)
    updateRegisterButton()
  })

  registerLoginInput.addEventListener("input", updateRegisterButton)

  registerPasswordInput.addEventListener("blur", () => {
    const error = validatePassword(registerPasswordInput.value)
    if (error) showInputError(registerPasswordInput, error)

    const confirmError = validateConfirmPassword(
      registerPasswordInput.value,
      confirmPasswordInput.value,
    )
    if (confirmError) showInputError(confirmPasswordInput, confirmError)
    updateRegisterButton()
  })

  registerPasswordInput.addEventListener("focus", () => {
    clearInputError(registerPasswordInput)
    updateRegisterButton()
  })

  registerPasswordInput.addEventListener("input", () => {
    const confirmError = validateConfirmPassword(
      registerPasswordInput.value,
      confirmPasswordInput.value,
    )
    if (confirmError) {
      showInputError(confirmPasswordInput, confirmError)
    } else {
      clearInputError(confirmPasswordInput)
    }
    updateRegisterButton()
  })

  confirmPasswordInput.addEventListener("blur", () => {
    const error = validateConfirmPassword(
      registerPasswordInput.value,
      confirmPasswordInput.value,
    )
    if (error) showInputError(confirmPasswordInput, error)
    updateRegisterButton()
  })

  confirmPasswordInput.addEventListener("focus", () => {
    clearInputError(confirmPasswordInput)
    updateRegisterButton()
  })

  confirmPasswordInput.addEventListener("input", updateRegisterButton)

  userAvatar.addEventListener("click", () => {
    closeAllModals()
    openModal(loginModal)
  })

  document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement

    if (target.closest("[data-auth-close='true']")) {
      closeAllModals()
      return
    }

    const switchButton = target.closest("[data-auth-switch]") as HTMLElement | null
    if (!switchButton) return

    const switchTo = switchButton.getAttribute("data-auth-switch")

    if (switchTo === "register") {
      closeAllModals()
      openModal(registerModal)
      updateRegisterButton()
    }

    if (switchTo === "login") {
      closeAllModals()
      openModal(loginModal)
    }
  })

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const loginError = validateLogin(loginInput.value)
    const passwordError = validatePassword(loginPasswordInput.value)

    if (loginError) showInputError(loginInput, loginError)
    if (passwordError) showInputError(loginPasswordInput, passwordError)
    loginFormError.textContent = ""

    if (loginError || passwordError) return

    const userRaw = localStorage.getItem("online-zoo-user")
    if (!userRaw) {
      loginFormError.textContent = "No account found. Please register first."
      return
    }

    let user: { name: string; login: string; password: string } | null
    try {
      user = JSON.parse(userRaw) as { name: string; login: string; password: string }
    } catch {
      user = null
    }

    if (!user || user.login !== loginInput.value.trim() || user.password !== loginPasswordInput.value.trim()) {
      loginFormError.textContent = "Invalid login or password"
      return
    }

    closeAllModals()
    loginForm.reset()
    clearInputError(loginInput)
    clearInputError(loginPasswordInput)
  })

  registerForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const nameError = validateName(nameInput.value)
    const loginError = validateLogin(registerLoginInput.value)
    const passwordError = validatePassword(registerPasswordInput.value)
    const confirmError = validateConfirmPassword(
      registerPasswordInput.value,
      confirmPasswordInput.value,
    )

    if (nameError) showInputError(nameInput, nameError)
    if (loginError) showInputError(registerLoginInput, loginError)
    if (passwordError) showInputError(registerPasswordInput, passwordError)
    if (confirmError) showInputError(confirmPasswordInput, confirmError)

    updateRegisterButton()
    if (nameError || loginError || passwordError || confirmError) return

    localStorage.setItem(
      "online-zoo-user",
      JSON.stringify({
        name: nameInput.value.trim(),
        login: registerLoginInput.value.trim(),
        password: registerPasswordInput.value.trim(),
      }),
    )

    closeAllModals()
    registerForm.reset()
    clearInputError(nameInput)
    clearInputError(registerLoginInput)
    clearInputError(registerPasswordInput)
    clearInputError(confirmPasswordInput)
    updateRegisterButton()
  })

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeAllModals()
  })
}
