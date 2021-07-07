/**
 * Storage 封装
 * ES6规范（用于项目中）
 * config.js中的使用的commonJs规范（用于webpack）
 */

const STORAGE_KEY = 'mall';
export default {
    // 存储值
    setItem(key, value, module_name) {
        if (module_name) {
            let val = this.getItem(module_name);
            val[key] = value;
            this.setItem(module_name, val);
        } else {
            let val = this.getStorage();
            // console.log(val);
            val[key] = value;
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
        }
    },
    // 获取某一个模块下的属性 user 下面的 username
    getItem(key, module_name) {
        if (module_name) {
            let val = this.getItem(module_name);
            return val[key];
        }
        return this.getStorage()[key];
    },
    getStorage() {
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
    },
    clear(key, module_name) {
        let val = this.getStorage();
        if (module_name) {
            if (!val[module_name]) return;
            delete val[module_name][key];
        } else {
            delete val[key];
        }
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    }
}