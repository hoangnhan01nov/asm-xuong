const API_URL = `http://localhost:3000`;
type Tsanpham = {
    id: number;
    ten: string;
    gia: number | string;
    hinh: string;
}
type Tdichvu = {
    id: number;
    ten: string;
    mota: string;
    gia: number | string;
    hinh: string;
}
type GioiThieuItem = {
    tuade: string;
    mota: string;
}

type SuKienItem = {
    hinh: string;
    ten: string;
    ngay: string;
    mota: string;
}
const showsp = async () => {
    let arr: Tsanpham[] = await fetch(API_URL + "/sanpham")
        .then(res => res.json())
        .then(data => data as Tsanpham[]);
    let str;
    arr.forEach(row => str += hiensp(row))
    return str;

}
const hiensp = (sp: Tsanpham) => {
    return `<div>
    <img src="${sp.hinh}">
    <h4>${sp.ten}</h4>
    <p>${sp.gia}</p>
    </div>`;
}
const showdv = async () => {
    let arr: Tdichvu[] = await fetch(API_URL + "/dichvu")
        .then(res => res.json())
        .then(data => data as Tdichvu[]);
    let str = ``;
    arr.forEach(dv => str += hiendv(dv))
    return str;

}
const hiendv = (dv: Tdichvu) => {
    return `<div>
    <h4>${dv.ten}</h4>
    <p>${dv.mota}</p>
    </div>`;
}
const showGioithieu = async () => {
    let arr: GioiThieuItem[] = await fetch(API_URL + "/gioithieu")
        .then(res => res.json())
        .then(data => data as GioiThieuItem[]);
    let str = ``;
    arr.forEach(gt => str += hienGioithieu(gt))
    return str;
}
const hienGioithieu = (item: GioiThieuItem): string => {
    return `
    <div>
        <h4>${item.tuade}</h4>
        <p>${item.mota}</p>
    </div>`;
};

const showSukien = async () => {
    let arr: SuKienItem[] = await fetch(API_URL + "/sukien")
        .then(res => res.json())
        .then(data => data as SuKienItem[]);
    let str;
    arr.forEach(sk => str += hienSukien(sk))
    return str;
}
const hienSukien = (event: SuKienItem): string => {
    return `
    <div>
        <img src="${event.hinh}" alt="${event.ten}">
        <h4>${event.ten}</h4>
        <p>Ngày: ${event.ngay}</p>
        <p>${event.mota}</p>
    </div>`;
};
export { showsp, showdv, showGioithieu }
export { showSukien }