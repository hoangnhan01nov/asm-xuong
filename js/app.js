import { sp_arr } from './data.js';
const hiensp = (sp) => {
    return `<div>
    <img src="${sp.hinh}">
    <h4>${sp.ten}</h4>
    <p>${sp.gia}</p>
    </div>`;
};
export const showsp = () => {
    const html_arr = sp_arr.map(hiensp);
    return html_arr.join("");
};
const hiendv = (dv) => {
    return `
    <div>
        <img src="${dv.hinh}" alt="${dv.ten}">
        <h4>${dv.ten}</h4>
        <p>${dv.mota}</p>
        <p>${dv.gia}</p>
    </div>`;
};

export const showdv = async () => {
    const response = await fetch('./services.json');
    const data = await response.json();
    const html_arr = data.services.map(hiendv);
    return html_arr.join("");
};
const hienGioiThieu = (item) => {
    return `
    <div>
        <h4>${item.tuade}</h4>
        <p>${item.mota}</p>
    </div>`;
};

export const showGioiThieu = async () => {
    const response = await fetch('./gioithieu.json');
    const data = await response.json();
    const html_arr = data.gioithieu.map(hienGioiThieu);
    return html_arr.join("");
};
const hienSuKien = (event) => {
    return `
    <div>
        <img src="${event.hinh}" alt="${event.ten}">
        <h4>${event.ten}</h4>
        <p>Ngày: ${event.ngay}</p>
        <p>${event.mota}</p>
    </div>`;
};

export const showSuKien = async () => {
    const response = await fetch('./sukien.json');
    const data = await response.json();
    const html_arr = data.sukien.map(hienSuKien);
    return html_arr.join("");
};
