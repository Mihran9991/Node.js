
file_name_prefix=$1
echo "
import { IRepository } from '../../@types/repository';
import ${file_name_prefix}Model from '../models/${file_name_prefix}.model';

export default class ${file_name_prefix^}Repository implements IRepository<${file_name_prefix}Model> {
    private model: any = ${file_name_prefix}Model;

    public create(arg: ${file_name_prefix}Model): Promise<any> {};
    public update(arg: ${file_name_prefix}Model): Promise<void> {};
    public delete(arg: ${file_name_prefix}Model): Promise<any> {};
    public getById(id: string): Promise<${file_name_prefix}Model> {};
}
" >> ../api/repositories/${file_name_prefix}.repository.ts

