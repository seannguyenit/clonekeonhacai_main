'use strict'


module.exports = {
    menu: () => {
        var LIST_TYPE = [
            {
                showname: 'Kết Quả Bóng Đá',
                name: 'KQ',
                action: 'ket-qua-bong-da',
                order: 0
            },
            {
                showname: 'Bảng Xếp Hạng',
                name: 'BXH',
                action: 'bang-xep-hang',
                order: 1
            },
            {
                showname: 'Lịch Thi Đấu',
                name: 'LTĐ',
                action: 'lich-thi-dau',
                use_key: 1,
                order: 2
            }
        ]

        var LIST_MAIN_MENU = [
            {
                action: 'anh',
                value: 36,
                key: 'english-premier-league-36',
                country: 'Anh',
                order: 0
            },
            {
                action: 'duc',
                value: 8,
                key: 'german-bundesliga-8',
                country: 'Đức',
                order: 1
            },
            {
                action: 'phap',
                value: 11,
                key: 'france-ligue-1-11',
                country: 'Pháp',
                order: 2
            },
            {
                action: 'y',
                value: 34,
                key: 'italian-serie-a-34',
                country: 'Ý',
                order: 3
            },
            {
                action: 'europan-league',
                value: 113,
                key: 'uefa-europa-league-113',
                country: 'Europa League',
                order: 4
            },
            {
                action: 'champions-league',
                value: 1864,
                key: 'uefa-champions-league-103',
                country: 'Champions League',
                order: 5
            },
            {
                action: 'viet-nam',
                value: 0,
                key: 'english-premier-league-36',
                country: 'Việt Nam',
                order: 6
            },
        ]
        const combile_menu = (new_symbol, new_action) => {
            let rs = LIST_MAIN_MENU.map(m => {
                let _c = new_symbol + ' ' + m.country;
                let _a = new_action;
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
