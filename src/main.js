const url = "http://localhost:3001/api"

async function fetchData(){
    try {
        const resp = await fetch(url)
        return await resp.json()
    } catch (error) {
        console.log(`cannot get error ${error.message}`)
    }
}

function getDataAndAppend(){
    const container = document.getElementsByClassName("container")[0]
    fetchData()
    .then(data => {
        console.log(data)
        data.data.forEach(item => {
            const div = document.createElement("div")
            div.textContent = item.id
            container.appendChild(div)
        });
    })
    .catch(error => {
        console.error("Error:", error);
    });
    
}

function Main(){
    setInterval(getDataAndAppend, 3000)
    // getDataAnßdAppend()
}
export default Main
Main()