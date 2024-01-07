const BASE_URL = "https://calculateur-pate-server.onrender.com"

export async function getPates() {
    const response = await fetch(
        `${BASE_URL}/pates`,
        {
            method: "GET"
        }
    )
    if(response.status === 200) {
        return (await response.json())
    } else {
        console.log("Problème :(")
    }
}

export async function getPains(pate) {
    const response = await fetch(
        `${BASE_URL}/${pate}`,
        {
            method: "GET"
        }
    )
    if(response.status === 200) {
        return (await response.json())
    } else {
        console.log("Problème :(")
    }
}