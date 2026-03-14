import getData from "../lib/api"

type UserData = {
  name?: string
  email?: string
  login?: string
  password?: string
}

const userAvatar = document.querySelector(
  ".user__avatar",
) as HTMLButtonElement | null
const userAvatarName = document.querySelector(
  ".user__avatar-name",
) as HTMLElement | null
const userMenu = document.querySelector(".user-menu") as HTMLElement | null

const LOGIN_MODAL_ID = "auth-login-modal"
const REGISTER_MODAL_ID = "auth-register-modal"

function validateName(value: string): string | null {
  const name = value.trim()
  if (name.length === 0) return "Name is required"
  if (name.length < 3) return "Name should be at least 3 characters long"
  if (!/^[A-Za-z]+$/.test(name))
    return "Only English alphabet letters are allowed"
  return null
}

function validateLogin(value: string): string | null {
  const login = value.trim()
  if (login.length === 0) return "Login is required"
  if (login.length < 3) return "Login should be at least 3 characters long"
  if (!/^[A-Za-z]/.test(login)) return "Login should start with a letter"
  if (!/^[A-Za-z]+$/.test(login))
    return "Only English alphabet letters are allowed"
  return null
}

function validateEmail(value: string): string | null {
  const email = value.trim()
  if (email.length === 0) return "Email is required"
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Enter a valid email"
  return null
}

function validatePassword(value: string): string | null {
  const password = value.trim()
  if (password.length === 0) return "Password is required"
  if (password.length < 6)
    return "Password should be at least 6 characters long"
  if (!/[^A-Za-z0-9]/.test(password))
    return "Password should contain at least 1 special character"
  return null
}

function validateConfirmPassword(
  passwordValue: string,
  confirmValue: string,
): string | null {
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

function setFormError(element: HTMLElement, message: string) {
  element.textContent = message
}

function clearFormError(element: HTMLElement) {
  element.textContent = ""
}

function startButtonLoading(button: HTMLButtonElement, text: string) {
  button.disabled = true
  button.classList.add("is-loading")
  button.textContent = text
}

function stopButtonLoading(
  button: HTMLButtonElement,
  text: string,
  disabled = false,
) {
  button.disabled = disabled
  button.classList.remove("is-loading")
  button.textContent = text
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
          <label class="auth-modal__label" for="authEmail">Email</label>
          <input class="auth-modal__input" id="authEmail" name="email" type="email" placeholder="Enter email" autocomplete="email" />
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
        <p class="auth-modal__form-error" id="authRegisterFormError" aria-live="polite"></p>
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

function getUserData() {
  const userRaw = localStorage.getItem("online-zoo-user")
  if (!userRaw) return null

  try {
    return JSON.parse(userRaw) as UserData
  } catch {
    return null
  }
}

function openUserMenu() {
  if (!userMenu || !userAvatar) return
  userMenu.hidden = false
  userAvatar.setAttribute("aria-expanded", "true")
}

function closeUserMenu() {
  if (!userMenu || !userAvatar) return
  userMenu.hidden = true
  userAvatar.setAttribute("aria-expanded", "false")
}

function renderUserMenu() {
  if (!userMenu || !userAvatarName) return

  const user = getUserData()

  if (user && user.name) {
    userAvatarName.textContent = user.name
    userMenu.innerHTML = `
      <div class="user-menu__profile">
        <div class="user-menu__title">Profile information</div>
        <div class="user-menu__row"><span>Name</span><strong>${user.name}</strong></div>
        <div class="user-menu__row"><span>Email</span><strong>${user.email || "No email"}</strong></div>
      </div>
      <button type="button" class="user-menu__action user-menu__action--danger" data-user-menu-action="signout">Sign Out</button>
    `
    return
  }

  userAvatarName.textContent = ""
  userMenu.innerHTML = `
    <div class="user-menu__guest">
      <button type="button" class="user-menu__action" data-user-menu-action="login">Sign In</button>
      <button type="button" class="user-menu__action" data-user-menu-action="register">Registration</button>
    </div>
  `
}

if (userAvatar && userMenu) {
  const loginModal = createLoginModal()
  const registerModal = createRegisterModal()

  const loginForm = loginModal.querySelector(
    "#authLoginForm",
  ) as HTMLFormElement
  const loginInput = loginModal.querySelector(
    "#authLoginOnly",
  ) as HTMLInputElement
  const loginPasswordInput = loginModal.querySelector(
    "#authPasswordOnly",
  ) as HTMLInputElement
  const loginFormError = loginModal.querySelector(
    "#authLoginFormError",
  ) as HTMLElement

  const registerForm = registerModal.querySelector(
    "#authRegisterForm",
  ) as HTMLFormElement
  const nameInput = registerModal.querySelector("#authName") as HTMLInputElement
  const emailInput = registerModal.querySelector(
    "#authEmail",
  ) as HTMLInputElement
  const registerLoginInput = registerModal.querySelector(
    "#authLogin",
  ) as HTMLInputElement
  const registerPasswordInput = registerModal.querySelector(
    "#authPassword",
  ) as HTMLInputElement
  const confirmPasswordInput = registerModal.querySelector(
    "#authConfirmPassword",
  ) as HTMLInputElement
  const registerButton = registerModal.querySelector(
    "#authRegisterBtn",
  ) as HTMLButtonElement
  const registerFormError = registerModal.querySelector(
    "#authRegisterFormError",
  ) as HTMLElement

  renderUserMenu()

  function updateRegisterButton() {
    const nameError = validateName(nameInput.value)
    const emailError = validateEmail(emailInput.value)
    const loginError = validateLogin(registerLoginInput.value)
    const passwordError = validatePassword(registerPasswordInput.value)
    const confirmError = validateConfirmPassword(
      registerPasswordInput.value,
      confirmPasswordInput.value,
    )
    registerButton.disabled = Boolean(
      nameError || emailError || loginError || passwordError || confirmError,
    )
  }

  loginInput.addEventListener("blur", () => {
    const error = validateLogin(loginInput.value)
    if (error) showInputError(loginInput, error)
  })

  loginInput.addEventListener("focus", () => {
    clearInputError(loginInput)
    clearFormError(loginFormError)
  })

  loginPasswordInput.addEventListener("blur", () => {
    const error = validatePassword(loginPasswordInput.value)
    if (error) showInputError(loginPasswordInput, error)
  })

  loginPasswordInput.addEventListener("focus", () => {
    clearInputError(loginPasswordInput)
    clearFormError(loginFormError)
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

  emailInput.addEventListener("blur", () => {
    const error = validateEmail(emailInput.value)
    if (error) showInputError(emailInput, error)
    updateRegisterButton()
  })

  emailInput.addEventListener("focus", () => {
    clearInputError(emailInput)
    clearFormError(registerFormError)
    updateRegisterButton()
  })

  emailInput.addEventListener("input", updateRegisterButton)

  registerLoginInput.addEventListener("blur", () => {
    const error = validateLogin(registerLoginInput.value)
    if (error) showInputError(registerLoginInput, error)
    updateRegisterButton()
  })

  registerLoginInput.addEventListener("focus", () => {
    clearInputError(registerLoginInput)
    clearFormError(registerFormError)
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
    clearFormError(registerFormError)
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
    clearFormError(registerFormError)
    updateRegisterButton()
  })

  confirmPasswordInput.addEventListener("input", updateRegisterButton)

  userAvatar.addEventListener("click", (event) => {
    event.stopPropagation()

    if (userMenu.hidden) {
      openUserMenu()
    } else {
      closeUserMenu()
    }
  })

  document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement

    const clickedAvatar = target.closest(".user__avatar")
    const clickedMenu = target.closest(".user-menu")

    if (!clickedAvatar && !clickedMenu) {
      closeUserMenu()
    }

    if (target.closest("[data-auth-close='true']")) {
      closeAllModals()
      return
    }

    const userActionButton = target.closest(
      "[data-user-menu-action]",
    ) as HTMLElement | null

    if (userActionButton) {
      const action = userActionButton.getAttribute("data-user-menu-action")

      if (action === "login") {
        closeUserMenu()
        closeAllModals()
        openModal(loginModal)
      }

      if (action === "register") {
        closeUserMenu()
        closeAllModals()
        openModal(registerModal)
        updateRegisterButton()
      }

      if (action === "signout") {
        localStorage.removeItem("online-zoo-user")
        renderUserMenu()
        closeUserMenu()
      }

      return
    }

    const switchButton = target.closest(
      "[data-auth-switch]",
    ) as HTMLElement | null
    if (!switchButton) return

    const switchTo = switchButton.getAttribute("data-auth-switch")

    if (switchTo === "register") {
      closeAllModals()
      openModal(registerModal)
      updateRegisterButton()
      closeUserMenu()
    }

    if (switchTo === "login") {
      closeAllModals()
      openModal(loginModal)
      closeUserMenu()
    }
  })

  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault()
    const loginButton = loginForm.querySelector(
      ".auth-modal__submit",
    ) as HTMLButtonElement

    const loginError = validateLogin(loginInput.value)
    const passwordError = validatePassword(loginPasswordInput.value)

    if (loginError) showInputError(loginInput, loginError)
    if (passwordError) showInputError(loginPasswordInput, passwordError)
    clearFormError(loginFormError)

    if (loginError || passwordError) return

    startButtonLoading(loginButton, "Loading...")

    try {
      const loginUser = await getData("auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          login: loginInput.value.trim(),
          password: loginPasswordInput.value.trim(),
        }),
      })

      const user = loginUser?.data?.user || loginUser?.user || loginUser?.data
      localStorage.setItem("online-zoo-user", JSON.stringify(user))
      renderUserMenu()

      closeAllModals()
      loginForm.reset()
      clearInputError(loginInput)
      clearInputError(loginPasswordInput)
      stopButtonLoading(loginButton, "Login")
    } catch (error) {
      const status = (error as Error & { status?: number }).status

      if (status === 401 || status === 404) {
        setFormError(loginFormError, "Invalid login or password")
      } else {
        setFormError(loginFormError, "Something went wrong. Please try again.")
      }

      stopButtonLoading(loginButton, "Login")
      console.error("Login error:", error)
    }
  })

  registerForm.addEventListener("submit", async (event) => {
    event.preventDefault()
    clearFormError(registerFormError)

    const nameError = validateName(nameInput.value)
    const emailError = validateEmail(emailInput.value)
    const loginError = validateLogin(registerLoginInput.value)
    const passwordError = validatePassword(registerPasswordInput.value)
    const confirmError = validateConfirmPassword(
      registerPasswordInput.value,
      confirmPasswordInput.value,
    )

    if (nameError) showInputError(nameInput, nameError)
    if (emailError) showInputError(emailInput, emailError)
    if (loginError) showInputError(registerLoginInput, loginError)
    if (passwordError) showInputError(registerPasswordInput, passwordError)
    if (confirmError) showInputError(confirmPasswordInput, confirmError)

    updateRegisterButton()
    if (nameError || emailError || loginError || passwordError || confirmError)
      return

    startButtonLoading(registerButton, "Loading...")

    try {
      const registerUser = await getData("auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nameInput.value.trim(),
          email: emailInput.value.trim(),
          login: registerLoginInput.value.trim(),
          password: registerPasswordInput.value.trim(),
        }),
      })

      if (registerUser.length > 0) {
        showInputError(registerLoginInput, "Login is already taken")
        stopButtonLoading(registerButton, "Register", true)
        updateRegisterButton()
        return
      }

      localStorage.setItem(
        "online-zoo-user",
        JSON.stringify(registerUser.data.user),
      )
      renderUserMenu()

      closeAllModals()
      registerForm.reset()
      clearInputError(nameInput)
      clearInputError(emailInput)
      clearInputError(registerLoginInput)
      clearInputError(registerPasswordInput)
      clearInputError(confirmPasswordInput)
      clearFormError(registerFormError)
      stopButtonLoading(registerButton, "Register", true)
      updateRegisterButton()
    } catch (error) {
      const status = (error as Error & { status?: number }).status

      if (status === 409) {
        setFormError(
          registerFormError,
          "This login or email is already registered.",
        )
      } else {
        setFormError(
          registerFormError,
          "Something went wrong. Please try again.",
        )
      }

      stopButtonLoading(registerButton, "Register", true)
      updateRegisterButton()
      console.error("Register error:", error)
    }
  })

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeAllModals()
  })
}
