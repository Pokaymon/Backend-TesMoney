import getConnection from "./../db/database.js";

const getEmpleados = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM empleados");
        res.json(result);
    } catch (error) {
        console.error("❌ Error al obtener los empleados:", error.message);
        res.status(500).json({ mensaje: "Hubo un error al obtener los empleados", error: error.message });
    }
};

const getEmpleado = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM empleados WHERE EmpleadoID = ?", id);
        res.json(result);
    } catch (error) {
        console.error("❌ Error al obtener el empleado:", error.message);
        res.status(500).json({ mensaje: "Hubo un error al obtener el empleado", error: error.message });
    }
};

const postEmpleado = async (req, res) => {
    try {
        const {
            Apellido,
            Nombre,
            Titulo,
            TituloCortesia,
            FechaNacimiento,
            FechaContratacion,
            Direccion,
            Ciudad,
            Regiones,
            CodigoPostal,
            Pais,
            Telefono,
            Extension,
            Foto,
            Notas,
            Jefe,
            RutaFoto
        } = req.body;

        const empleado = {
            Apellido,
            Nombre,
            Titulo,
            TituloCortesia,
            FechaNacimiento,
            FechaContratacion,
            Direccion,
            Ciudad,
            Regiones,
            CodigoPostal,
            Pais,
            Telefono,
            Extension,
            Foto,
            Notas,
            Jefe,
            RutaFoto
        };

        const connection = await getConnection();
        const result = await connection.query("INSERT INTO empleados SET ?", empleado);
        res.json(result);
    } catch (error) {
        console.error("❌ Error al crear el empleado:", error.message);
        res.status(500).json({
            mensaje: "Hubo un error al crear el empleado",
            error: error.message
        });
    }
};

const updateEmpleado = async (req, res) => {
    try {
        const { id } = req.params;

        const {
            Apellido,
            Nombre,
            Titulo,
            TituloCortesia,
            FechaNacimiento,
            FechaContratacion,
            Direccion,
            Ciudad,
            Regiones,
            CodigoPostal,
            Pais,
            Telefono,
            Extension,
            Foto,
            Notas,
            Jefe,
            RutaFoto
        } = req.body;

        const empleado = {
            Apellido,
            Nombre,
            Titulo,
            TituloCortesia,
            FechaNacimiento,
            FechaContratacion,
            Direccion,
            Ciudad,
            Regiones,
            CodigoPostal,
            Pais,
            Telefono,
            Extension,
            Foto,
            Notas,
            Jefe,
            RutaFoto
        };

        const connection = await getConnection();
        const result = await connection.query(
            "UPDATE empleados SET ? WHERE EmpleadoID = ?", [empleado, id]
        );
        res.json(result);
    } catch (error) {
        console.error("❌ Error al actualizar el empleado:", error.message);
        res.status(500).json({
            mensaje: "Hubo un error al actualizar el empleado",
            error: error.message
        });
    }
};

const deleteEmpleado = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM empleados WHERE EmpleadoID = ?", id);
        res.json(result);
    } catch (error) {
        console.error("❌ Error al eliminar el empleado:", error.message);
        res.status(500).json({ mensaje: "Hubo un error al eliminar el empleado", error: error.message });
    }
};

export const methodEmpleados = {
    getEmpleados,
    getEmpleado,
    postEmpleado,
    updateEmpleado,
    deleteEmpleado
};

