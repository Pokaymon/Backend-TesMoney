import getConnection from "./../db/database.js";

const getClientes = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM clientes");
        res.json(result);
    } catch (error) {
        console.error("❌ Error al obtener los clientes:", error.message);
        res.status(500).json({ mensaje: "Hubo un error al obtener los clientes", error: error.message });
    }
};

const getCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM clientes WHERE ClienteID = ?", id);
        res.json(result);
    } catch (error) {
        console.error("❌ Error al obtener el cliente:", error.message);
        res.status(500).json({ mensaje: "Hubo un error al obtener el cliente", error: error.message });
    }
};

const postCliente = async (req, res) => {
    try {
        const cliente = req.body;
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO clientes SET ?", cliente);
        res.json(result);
    } catch (error) {
        console.error("❌ Error al crear el cliente:", error.message);
        res.status(500).json({ mensaje: "Hubo un error al crear el cliente", error: error.message });
    }
};

const updateCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const cliente = req.body;
        const connection = await getConnection();
        const result = await connection.query("UPDATE clientes SET ? WHERE ClienteID = ?", [cliente, id]);
        res.json(result);
    } catch (error) {
        console.error("❌ Error al actualizar el cliente:", error.message);
        res.status(500).json({ mensaje: "Hubo un error al actualizar el cliente", error: error.message });
    }
};

const deleteCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM clientes WHERE ClienteID = ?", id);
        res.json(result);
    } catch (error) {
        console.error("❌ Error al eliminar el cliente:", error.message);
        res.status(500).json({ mensaje: "Hubo un error al eliminar el cliente", error: error.message });
    }
};

export const methodClientes = {
    getClientes,
    getCliente,
    postCliente,
    updateCliente,
    deleteCliente
};

