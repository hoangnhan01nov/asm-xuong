const API_URL = `http://localhost:3000`;
const showsp = async () => {
    let arr = await fetch(API_URL + "/sanpham")
        .then(res => res.json())
        .then(data => data);
    let str;
    arr.forEach(row => str += hiensp(row));
    return str;
};
const hiensp = (sp) => {
    return `<div>
    <img src="${sp.hinh}">
    <h4>${sp.ten}</h4>
    <p>${sp.gia}</p>
    </div>`;
};
const showdv = async () => {
    let arr = await fetch(API_URL + "/dichvu")
        .then(res => res.json())
        .then(data => data);
    let str = ``;
    arr.forEach(dv => str += hiendv(dv));
    return str;
};
const hiendv = (dv) => {
    return `<div>
    <h4>${dv.ten}</h4>
    <p>${dv.mota}</p>
    </div>`;
};
const showGioithieu = async () => {
    let arr = await fetch(API_URL + "/gioithieu")
        .then(res => res.json())
        .then(data => data);
    let str = ``;
    arr.forEach(gt => str += hienGioithieu(gt));
    return str;
};
const hienGioithieu = (item) => {
    return `
    <div>
        <h4>${item.tuade}</h4>
        <p>${item.mota}</p>
    </div>`;
};
const showSukien = async () => {
    let arr = await fetch(API_URL + "/sukien")
        .then(res => res.json())
        .then(data => data);
    let str;
    arr.forEach(sk => str += hienSukien(sk));
    return str;
};
const hienSukien = (event) => {
    return `
    <div>
        <img src="${event.hinh}" alt="${event.ten}">
        <h4>${event.ten}</h4>
        <p>Ngày: ${event.ngay}</p>
        <p>${event.mota}</p>
    </div>`;
};
export { showsp, showdv, showGioithieu };
export { showSukien };
