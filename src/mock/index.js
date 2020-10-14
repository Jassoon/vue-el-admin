import Mock from 'mockjs'
import login from "./data/login";

Mock.mock('/login', 'post', login);