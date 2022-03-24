export function add(a: number, b: number): number {
    return a + b;
}

/**
 * 银行卡号每隔4位增加空格
 * @param {*} v银行卡号 
 * @returns 
 */
export function bankCardNoAssert(v: string) {
    if (/\S{5}/.test(v)) {
        return v.replace(/\s/g, '').replace(/(.{4})/g, '$1 ');
    }
    return v;
}

/**
 * 将手机号、银行卡号、身份证号等中间位数转换为*号
 * @param {*} v 要转换的字符串
 * @param {*} s 首位需要展示的字符串长度 默认为3
 * @param {*} e 末尾需要展示的字符串长度 默认为4
 * @returns 
 */
export function asteriskNo(v: string, s = 3, e = 4) {
    if (!v) return v || '';
    var reg = new RegExp(`^(\\d{${s}})\\d+(\\d{${e}})$`)
    return v.replace(reg, "$1 **** $2")
}

