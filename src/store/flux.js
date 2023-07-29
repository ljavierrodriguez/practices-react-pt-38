const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            apiURL: 'http://localhost:3000',
            name: null, 
            contacts: null
        },
        actions: {
            updateName: (name) => {
                setStore({
                    name: name
                })
            },
            getData: () => {
                const store = getStore() // { apiURL, name }
                console.log(store.apiURL)

                const actions = getActions();
                actions.updateName("Juan")
            },
            getContacts: () => {
                const store = getStore()
                fetch(`${store.apiURL}/contacts`)
                    .then(response => response.json())
                    .then(data => setStore({ contacts: data }))
            }
        }
    }
}

export default getState;