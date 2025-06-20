import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Private = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);

    return (
        <div>
            <h2>Zona Privada</h2>
            <p style={{ marginTop: "40px" }}>
                ¡Bienvenido! Solo puedes ver esto si estás autenticado.
            </p>
        </div>
    );
};

export default Private;