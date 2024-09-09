const DataRepository = (apiAdapter) => ({
    getAllItems: async () => {
        return await apiAdapter.get('/posts');
    },

    getItemById: async (id) => {
        return await apiAdapter.get(`/items/${id}`);
    },

    createItem: async (data) => {
        return await apiAdapter.post('/items', data);
    },

    updateItem: async (id, data) => {
        return await apiAdapter.put(`/items/${id}`, data);
    },

    deleteItem: async (id) => {
        return await apiAdapter.delete(`/items/${id}`);
    }
});

export default DataRepository;