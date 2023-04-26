'use strict'


module.exports = {
    menu: () => {
        var LIST_TYPE = [
            {
                showname: 'Kết Quả Bóng Đá',
                name: 'KQ',
                action: 'kq',
                order: 0
            },
            {
                showname: 'Bảng Xếp Hạng',
                name: 'BXH',
                action: 'bxh',
                order: 1
            },
            {
                showname: 'Lịch Thi Đấu',
                name: 'LTĐ',
                action: 'ltd',
                order: 2
            }
        ]

        var LIST_MAIN_MENU = [
            {
                action: 'anh',
                value: 0,
                country: 'Anh',
                order: 0
            },
            {
                action: 'duc',
                value: 0,
                country: 'Đức',
                order: 1
            },
            {
                action: 'phap',
                value: 0,
                country: 'Pháp',
                order: 2
            },
            {
                action: 'y',
                value: 0,
                country: 'Ý',
                order: 3
            },
            {
                action: 'europan-league',
                value: 0,
                country: '',
                order: 4
            },
            {
                action: 'champions-league',
                value: 0,
                country: 'Champions League',
                order: 5
            },
            {
                action: 'viet-nam',
                value: 0,
                country: 'Việt Nam',
                order: 6
            },
        ]
        const combile_menu = (new_symbol, new_action) => {
            let rs = LIST_MAIN_MENU.map(m => {
                let _c = new_symbol + ' ' + m.country;
                let _a = new_action + '-' + m.action;
                return { ...m, country: _c, action: _a };
            });
            return rs
        }
        return LIST_TYPE.map(f => {
            f.menu = combile_menu(f.name, f.action)
            return f;
        });
    }
}
