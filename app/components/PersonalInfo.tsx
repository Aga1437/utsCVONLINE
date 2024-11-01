import React from 'react';

const PersonalInfo = () => {
    return (
        <div className="container mx-auto p-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Personal Info</h2>
            <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6">
                <p className="text-lg"><strong>Name:</strong> Aga Aprilyan Permana</p>
                <p className="text-lg"><strong>TTL:</strong> Bandung, 27 April 2003</p>
                <p className="text-lg"><strong>Jenis Kelamin:</strong> Laki-laki</p>
                <p className="text-lg"><strong>Tinggi Badan:</strong> 170 cm</p>
                <p className="text-lg"><strong>Berat Badan:</strong> 70 kg</p>
                <p className="text-lg"><strong>Status Pernikahan:</strong> Belum Menikah</p>
                <p className="text-lg"><strong>Whatsapp:</strong> 081323687318</p>
                <p className="text-lg"><strong>Email:</strong> AgaApriliyanpermana143@gmail.com</p>
            </div>
        </div>
    );
};

export default PersonalInfo;
