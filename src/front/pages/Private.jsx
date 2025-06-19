import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Private() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if (!token) {
            navigate("/login");
            return;
        }
        fetch("/api/private", {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => {
                if (!res.ok) throw new Error();
                return res.json();
            })
            .then(data => setUser(data.logged_in_as))
            .catch(() => navigate("/login"));
    }, [navigate]);

    return user ? <h2>Bienvenido a la zona privada</h2> : <div>Cargando...</div>;
}