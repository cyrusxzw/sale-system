import { juggler } from '@loopback/repository';
export declare class MlabDataSource extends juggler.DataSource {
    static dataSourceName: string;
    constructor(dsConfig?: object);
}
