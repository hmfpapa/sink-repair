import { getRequests, sendRequest, getPlumbers} from "./dataAccess.js"
const mainContainer = document.querySelector("#container")


const createListElement = (request) => {
    const plumbers = getPlumbers()
    return `<li> ${request.description} 
    <select class="plumbers" id="plumbers">
    <option value="0">Choose</option>
    ${
        plumbers.map(
            plumber => {
                return `<option value="${request.id}--${plumber.id}">${plumber.name}</option>`
            }
        ).join("")
    }
</select>
    <button class="request__delete"
    id="request--${request.id}">
Delete
</button>
</li>`
}

export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${requests.map(createListElement).join("")
        }
        </ul>
    `

    return html
}


mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "plumbers") {
            const [requestId, plumberId] = event.target.value.split("--")

            const completion = { 
                requestId: requestId,
                plumberId: plumberId,
                dateCreated: Date.now()
            }

            /*
                Invoke the function that performs the POST request
                to the `completions` resource for your API. Send the
                completion object as a parameter.
             */
saveCompletion(completion)
        }
    }
)