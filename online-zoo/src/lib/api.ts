const API: string =
  "https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod"

async function getData(url: string) {
  const res = await fetch(`${API}/${url}`)

  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`)
  }

  const data = await res.json()
  return data
}

export default getData
