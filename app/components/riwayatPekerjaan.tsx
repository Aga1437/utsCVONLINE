import RowPekerjaan from "./rowPekerjaan";

export default function RiwayatPekerjaan() {
    return (
        <div className="container mx-auto p-2 text-center">
            <div className="container mx-auto p-2 text-center pt-20">
                <h2 className="text-2x1">Riwayat Pekerjaan</h2>
            </div>
            <RowPekerjaan tahun="2021" instansi="PT PKSS Jakarta" sebagai="Administrasi" />
            <RowPekerjaan tahun="2021" instansi="PT LSBU GAPEKNAS" sebagai="Sekretarial & Asisten" />
            <RowPekerjaan tahun="2021" instansi="PT CIPTA KARYA TECNOLOGY" sebagai="TRANPORTASI" />
            <RowPekerjaan tahun="2021" instansi="PT Staff Purchasing" sebagai="Administrasi" />
        </div>
    );
}