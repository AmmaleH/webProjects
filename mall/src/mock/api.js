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

// 购物车的商品数量
Mock.mock('/api/user/cartCount', {
    "status": 0,
    "data": {
        "cartCount|0-99": 0,
    }
});
// 购物车中的商品信息
Mock.mock('/api/user/cart', {
    "status": 0,
    "data": {
        "selectedAll": false,
        "cartTotalPrice": 13798,
        "cartTotalQuantity": 2,
        "cartProductVoList": [
            {
                "id": 1,
                "userId": 13,
                "productId": 6,
                "productName": "小米11",
                "productSubtitle": "双十一促销",
                "productMainImage": "/imgs/detail/mi11-1.jpg",
                "productPrice": 3799,
                "quantity": 1,
                "productStatus": 1,
                "productTotalPrice": 3799,
                "productStock": 86,
                "productSelected": true
            },
            {
                "id": 2,
                "userId": 13,
                "productId": 1,
                "productName": "MIX FOLD",
                "productSubtitle": "双十一促销",
                "productMainImage": "/imgs/detail/mix-fold.jpg",
                "productPrice": 9999,
                "quantity": 1,
                "productStatus": 1,
                "productTotalPrice": 9999,
                "productStock": 96,
                "productSelected": true
            }
        ]
    }
});
// 收货人信息
Mock.mock('/api/user/shippings', {
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
        "firstPage": 1,
        "prePage": 0,
        "nextPage": 0,
        "lastPage": 1,
        "isFirstPage": true,
        "isLastPage": true,
        "hasPreviousPage": false,
        "hasNextPage": false,
        "navigatePages": 8,
        "navigatepageNums": [],
        "list": [
            {
                "id": 1,
                "userId": 13,
                "receiverName": "geely",
                "receiverPhone": "010",
                "receiverMobile": "18688888888",
                "receiverProvince": "北京",
                "receiverCity": "北京市",
                "receiverDistrict": "海淀区",
                "receiverAddress": "中关村",
                "receiverZip": "100000",
                "createTime": 148506685000,
                "updateTime": 148506638500,
            },
            {
                "id": 1,
                "userId": 13,
                "receiverName": "jack",
                "receiverPhone": "077",
                "receiverMobile": "16866666666",
                "receiverProvince": "四川",
                "receiverCity": "成都市",
                "receiverDistrict": "郫都区",
                "receiverAddress": "电子科技大学清水河校区",
                "receiverZip": "100000",
                "createTime": 148506685000,
                "updateTime": 148506638500,
            }
        ]
    }
});
// 下单的商品信息
Mock.mock('/api/user/paycart', {
    "status": 0,
    "data": {
        "selectedAll": false,
        "cartTotalPrice": 13798,
        "cartTotalQuantity": 2,
        "cartProductVoList": [
            {
                "id": 1,
                "userId": 13,
                "productId": 6,
                "productName": "小米11",
                "productSubtitle": "双十一促销",
                "productMainImage": "/imgs/detail/mi11-1.jpg",
                "productPrice": 3799,
                "quantity": 1,
                "productStatus": 1,
                "productTotalPrice": 3799,
                "productStock": 86,
                "productSelected": true
            },
            {
                "id": 2,
                "userId": 13,
                "productId": 1,
                "productName": "MIX FOLD",
                "productSubtitle": "双十一促销",
                "productMainImage": "/imgs/detail/mix-fold.jpg",
                "productPrice": 9999,
                "quantity": 1,
                "productStatus": 1,
                "productTotalPrice": 9999,
                "productStock": 96,
                "productSelected": true
            }
        ]
    }
});

// 订单列表
Mock.mock('/api/user/orderlist', {
    "status": 0,
    "data": {
        "pageNum": 1,
        "pageSize": 3,
        "size": 3,
        "orderBy": null,
        "startRow": 1,
        "endRow": 3,
        "total": 16,
        "pages": 6,
        "list": [
            {
                "orderNo": 1485158676346,
                "payment": 2999.11,
                "paymentType": 1,
                "paymentTypeDesc": "在线支付",
                "postage": 0,
                "status": 10,
                "statusDesc": "未支付",
                "paymentTime": "2021-07-21 12:27:18",
                "sendTime": "2021-07-21 12:27:18",
                "endTime": "2021-07-21 12:27:18",
                "closeTime": "2021-07-21 12:27:18",
                "createTime": "2021-07-21 12:27:18",
                "orderItemVoList": [
                    {
                        "orderNo": 1485158676346,
                        "productId": 2,
                        "productName": "MIX 4",
                        "productImage": "/imgs/phone/MIX4.jpg",
                        "currentUnitPrice": 4999.00,
                        "quantity": 1,
                        "totalPrice": 4999.00,
                        "createTime": "2021-07-21 12:27:18"
                    },
                    {
                        "orderNo": 1485158676346,
                        "productId": 2,
                        "productName": "小米11Pro",
                        "productImage": "/imgs/phone/Mi11Pro.webp",
                        "currentUnitPrice": 4499.00,
                        "quantity": 1,
                        "totalPrice": 4499.00,
                        "createTime": "2021-07-21 12:27:18"
                    }
                ],
                "imageHost": "http://img.happymmall.com/",
                "shippingId": 5,
                "receiverName": "geely",
                "shippingVo": null
            },
            {
                "orderNo": 1485158675516,
                "payment": 2999.12,
                "paymentType": 1,
                "paymentTypeDesc": "在线支付",
                "postage": 0,
                "status": 20,
                "statusDesc": "已付款",
                "paymentTime": "2021-07-21 12:27:18",
                "sendTime": "2021-07-21 12:27:18",
                "endTime": "2021-07-21 12:27:18",
                "closeTime": "2021-07-21 12:27:18",
                "createTime": "2021-07-21 12:27:18",
                "orderItemVoList": [
                    {
                        "orderNo": 1485158675516,
                        "productId": 2,
                        "productName": "红米 note10 Pro",
                        "productImage": "/imgs/phone/Note10Pro.webp",
                        "currentUnitPrice": 1599.00,
                        "quantity": 1,
                        "totalPrice": 1599.00,
                        "createTime": "2021-07-21 12:27:18"
                    },
                    {
                        "orderNo": 1485158676346,
                        "productId": 2,
                        "productName": "K40 游戏增强版",
                        "productImage": "/imgs/phone/K40GamePlus.webp",
                        "currentUnitPrice": 1999.00,
                        "quantity": 1,
                        "totalPrice": 1999.00,
                        "createTime": "2021-07-21 12:27:18"
                    },
                    {
                        "orderNo": 1485158676346,
                        "productId": 2,
                        "productName": "红米 note10",
                        "productImage": "/imgs/phone/RedMiNote10.webp",
                        "currentUnitPrice": 1099.00,
                        "quantity": 1,
                        "totalPrice": 1099.00,
                        "createTime": "2021-07-21 12:27:18"
                    }
                ],
                "imageHost": "http://img.happymmall.com/",
                "shippingId": 5,
                "receiverName": "geely",
                "shippingVo": null
            },
            {
                "orderNo": 1485158675316,
                "payment": 2999.13,
                "paymentType": 1,
                "paymentTypeDesc": "在线支付",
                "postage": 0,
                "status": 20,
                "statusDesc": "已付款",
                "paymentTime": "2021-07-21 12:27:18",
                "sendTime": "2021-07-21 12:27:18",
                "endTime": "2021-07-21 12:27:18",
                "closeTime": "2021-07-21 12:27:18",
                "createTime": "2021-07-21 12:27:18",
                "orderItemVoList": [
                    {
                        "orderNo": 1485158675316,
                        "productId": 2,
                        "productName": "Redmibook Pro 14 锐龙版",
                        "productImage": "/imgs/phone/redmibookPro14.jpg",
                        "currentUnitPrice": 4499.00,
                        "quantity": 1,
                        "totalPrice": 4499.00,
                        "createTime": "2021-07-21 12:27:18"
                    },
                    {
                        "orderNo": 1485158676346,
                        "productId": 2,
                        "productName": "oppo R8",
                        "productImage": "/imgs/phone/mipad5.png",
                        "currentUnitPrice": 1999.00,
                        "quantity": 1,
                        "totalPrice": 1999.00,
                        "createTime": "2021-07-21 12:27:18"
                    }
                ],
                "imageHost": "http://img.happymmall.com/",
                "shippingId": 5,
                "receiverName": "geely",
                "shippingVo": null
            }
        ],
        "firstPage": 1,
        "prePage": 0,
        "nextPage": 2,
        "lastPage": 6,
        "isFirstPage": true,
        "isLastPage": false,
        "hasPreviousPage": false,
        "hasNextPage": true,
        "navigatePages": 8,
        "navigatepageNums": [
            1,
            2,
            3,
            4,
            5,
            6
        ]
    }
});



Mock.mock('/api/user/detail', {
    "status": 0,
    "data": {
        "name": "小米11",
        "price": 3499,
        "imgs": [
            "/imgs/detail/mi11-1.jpg",
            "/imgs/detail/mi11-2.jpg",
            "",
            ""
        ]
    }
});

Mock.mock('/api/user/product', {
    "status": 0,
    "data": [
        {
            "id": 0,
            "name": "小米11",
            "subtitle": "2021轻装上阵",
            "price": 3799,
            "imgs": [
                "/imgs/product/product-bg-mi11-1.jpg",
                "/imgs/product/product-bg-mi11-2.png",
                "/imgs/product/product-bg-mi11-3.png"
            ],
            "introduce": [
                "全新骁龙888",
                "2K AMOLED",
                "哈曼卡顿",
                "1亿像素",
                "4600mAh + 55W 有线闪充"
            ]
        }
    ]
});

Mock.mock('/api/user/redmi', {
    "status": 0,
    "data": {
        "list": [
            {
                "id": 1,
                "img": "/imgs/header/redmiNote10Pro.webp",
                "name": "Redmi Note 10 Pro",
                "price": "1599元起"
            },
            {
                "id": 2,
                "img": "/imgs/header/redmiNote10.webp",
                "name": "Redmi Note 10 5G",
                "price": "1099元起"
            },
            {
                "id": 3,
                "img": "/imgs/header/k40GamePro.webp",
                "name": "K40 游戏增强版",
                "price": "1999元起"
            },
            {
                "id": 4,
                "img": "/imgs/header/k40Pro.webp",
                "name": "K40 Pro 系列",
                "price": "2499元起"
            },
            {
                "id": 5,
                "img": "/imgs/header/redmiK40.webp",
                "name": "Redmi K40",
                "price": "1999元起"
            },
            {
                "id": 6,
                "img": "/imgs/header/redmiNote9.webp",
                "name": "Redmi Note 9 4G",
                "price": "899元起"
            }
        ]
    }
});
Mock.mock('/api/user/mi', {
    "status": 0,
    "data": {
        "list": [
            {
                "id": 1,
                "img": "/imgs/header/mixfold.webp",
                "name": "小米MIX FOLD",
                "price": "9999元起"
            },
            {
                "id": 2,
                "img": "/imgs/header/mi11Ultra.webp",
                "name": "小米11 Ultra",
                "price": "5499元起"
            },
            {
                "id": 3,
                "img": "/imgs/header/mi11pro.webp",
                "name": "小米11 Pro",
                "price": "4499元起"
            },
            {
                "id": 4,
                "img": "/imgs/header/mi11Young.webp",
                "name": "小米11 青春版",
                "price": "2099元起"
            },
            {
                "id": 5,
                "img": "/imgs/header/mi10s.webp",
                "name": "小米10S",
                "price": "2999元起"
            },
            {
                "id": 6,
                "img": "/imgs/header/mi11.webp",
                "name": "小米11",
                "price": "3799元起"
            }
        ]
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

Mock.mock('/api/user/index_miPhone', {
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