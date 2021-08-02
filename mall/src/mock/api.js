import Mock from 'mockjs';
// Mock: https://github.com/nuysoft/Mock/wiki
Mock.mock('/api/user/login', {
    "status": 0,
    "data": {
        "id|100000-500000": 0,
        "username": "@cname",
        "email": "@email",
        "phone": /^1[3-9]\d{9}$/,
        "role": 0,
        "createtime": 1479048325000,
        "updatetime": 1479048325000
    }
});

Mock.mock('/api/user/tv', {
    "status": 0,
    "data": {
        "pageNum": 1,
        "pageSize": 10,
        "size": 2,
        "orderBy": null,
        "startRow": 1,
        "endRow": 2,
        "total": 2,
        "pages": 1,
        "list": [
            {
                "id": 1,
                "img": "/imgs/nav-img/nav-3-1.jpg",
                "name": "小米壁画电视 65英寸",
                "price": 2999
            },
            {
                "id": 2,
                "img": "/imgs/nav-img/nav-3-2.jpg",
                "name": "小米全面屏电视E55A",
                "price": 2999
            },
            {
                "id": 3,
                "img": "/imgs/nav-img/nav-3-3.png",
                "name": "小米电视4A 32英寸",
                "price": 2999
            },
            {
                "id": 4,
                "img": "/imgs/nav-img/nav-3-4.jpg",
                "name": "小米电视4A 55英寸",
                "price": 2999
            },
            {
                "id": 5,
                "img": "/imgs/nav-img/nav-3-5.jpg",
                "name": "小米电视4A 65英寸",
                "price": 2999
            },
            {
                "id": 6,
                "img": "/imgs/nav-img/nav-3-6.png",
                "name": "查看全部",
                "price": 2999
            }
        ]
    }
});

Mock.mock('/api/user/miPhone', {
    "status": 0,
    "data": {
        "pageNum": 1,
        "pageSize": 10,
        "size": 2,
        "orderBy": null,
        "startRow": 1,
        "endRow": 2,
        "total": 2,
        "pages": 1,
        "list": [
            {
                "id": 1,
                "category": "新品",
                "img": "/imgs/phone/Note10Pro.webp",
                "name": "Note 10 Pro",
                "introduce": "天玑1100年度旗舰芯，VC液冷散热",
                "price": 1599
            },
            {
                "id": 2,
                "category": "新品",
                "img": "/imgs/phone/RedMiNote10.webp",
                "name": "Redmi Note 10 5G",
                "introduce": "5G小金刚，旗舰长续航",
                "price": 1099
            },
            {
                "id": 3,
                "category": "新品",
                "img": "/imgs/phone/MixFold.webp",
                "name": "小米MIX FOLD",
                "introduce": "折叠大屏 | 自研芯片",
                "price": 9999
            },
            {
                "id": 4,
                "category": "新品",
                "img": "/imgs/phone/Mi11Ultra.webp",
                "name": "小米11 Ultra",
                "introduce": "1/1.12\"GN2 | 2K四微曲屏",
                "price": 5499
            },
            {
                "id": 5,
                "category": "新品",
                "img": "/imgs/phone/Mi11Pro.webp",
                "name": "小米11 Pro",
                "introduce": "1/1.12\"GN2 | 骁龙888",
                "price": 4499
            },
            {
                "id": 6,
                "category": "新品",
                "img": "/imgs/phone/Mi11Young.webp",
                "name": "小米11 青春版",
                "introduce": "小米11 青春版 轻薄",
                "price": 2099
            },
            {
                "id": 7,
                "category": "新品",
                "img": "/imgs/phone/K40GamePlus.webp",
                "name": "K40 游戏增强版",
                "introduce": "轻薄电竞设计",
                "price": 1999
            },
            {
                "id": 8,
                "category": "新品",
                "img": "/imgs/phone/BlackShark4Pro.webp",
                "name": "黑鲨4 Pro",
                "introduce": "黑鲨4 Pro",
                "price": 3999
            }
        ]
    }
})