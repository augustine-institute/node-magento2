/// <reference types="node" />

declare module 'node-magento2' {
  export default class MagentoTwo {
    constructor(url: string, options: any);
    init(): any;
    get(path: string, params?: any): any;
    delete(path: string, params?: any): any;
    post(path: string, params?: any, data?: any): any;
    put(path: string, params?: any, data?: any): any;
  }
}