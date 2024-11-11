export const GetTaskApi = async () => {
    const res = await fetch(" /api/completed_tasks", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Beaerer `
        }
    })
    const json = await res.json()
    return json
}

export const PutTaskApi = async (name, category) => {
    const res = await fetch(" api/completed_tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Beaerer `
        },
        body: JSON.stringify({ name: name, category: category })
    })
    const json = await res.json()
    return json
}

export const DeleteTaskApi = async (id) => {
    const res = await fetch(`/api/completed_tasks/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Beaerer `
        }
    })
    const json = await res.json()
    return json
}