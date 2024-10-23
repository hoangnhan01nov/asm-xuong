import { Tsp } from './data.js'
import { sp_arr } from './data.js'
const hiensp = (sp: Tsp) => {
    return `<div>
    <img src="${sp.hinh}">
    <h4>${sp.ten}</h4>
    <p>${sp.gia}</p>
    </div>`;
}
export const showsp = () => {
    const html_arr = sp_arr.map(hiensp);
    return html_arr.join("");
}