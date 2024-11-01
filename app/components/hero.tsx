import foto from "../Aga.jpg";

export default function Hero() {
    return (
        <div className="text-center">
            <h1 className="text-gray-300 font-bold">CV Online</h1>
            <h2 className="text-3x1">Aga Aprilyan Permana</h2>
            <Profile />
            <p>
                Saya adalah mahasiswa semester 5, jurusan Sistem Informasi dari Universitas Ma'soem.
                Hoby Saya Bermain sepak bola dan juga bermain game.
            </p>
        </div>
    );
}

function Profile() {
    return <img src={foto.src} alt="Ahmad Fauzan Alfarizi" className="fotoku" />;
}