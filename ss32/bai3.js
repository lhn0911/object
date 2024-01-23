function SinhVien(id, name) {
    this.id = id;
    this.name = name;
}
function nhapThongTinSinhVien() {
    const soLuong = prompt("Nhập số lượng sinh viên:");
    return Array.from({ length: soLuong }, (_, index) => {
        const id = prompt(`Nhập ID của sinh viên thứ ${index + 1}:`);
        const name = prompt(`Nhập tên của sinh viên thứ ${index + 1}:`);
        return new SinhVien(id, name);
    });
}
function inDanhSachSinhVien(danhSach) {
    console.log("\nDanh sách sinh viên:");
    danhSach.forEach((sinhVien) => console.log(`ID: ${sinhVien.id} - Tên: ${sinhVien.name}`));
}
const danhSachSinhVien = nhapThongTinSinhVien();
inDanhSachSinhVien(danhSachSinhVien);
