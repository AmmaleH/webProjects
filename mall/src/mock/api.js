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