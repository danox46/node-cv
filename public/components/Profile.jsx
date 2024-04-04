import React, { useEffect, useState } from 'react';
import axios from '../config/axiosConfig';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    axios.get('/profile')
      .then(response => {
        setProfileData(response.data);
      })
      .catch(error => {
        console.error('Error fetching profile data:', error);
      });
  }, []);

  return (
    <div className="profile-section">
      {/* Otras partes de tu interfaz de usuario */}
      {profileData ? (
        <div className="profile-section">
          <h2>Perfil de Usuario</h2>
          <p>Nombre: {profileData.name}</p>
          <p>Correo Electrónico: {profileData.email}</p>
          {/* Otros campos del perfil */}
        </div>
      ) : (
        <p>Cargando perfil...</p>
      )}
    </div>
  );
};

export default Profile;