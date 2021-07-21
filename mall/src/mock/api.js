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