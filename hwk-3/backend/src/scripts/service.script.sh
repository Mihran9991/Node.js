
file_name_prefix=$1
echo "
import ${file_name_prefix^}Repository from '../api/repositories/${file_name_prefix}.repository';

export default class ${file_name_prefix^}Service {
    private ${file_name_prefix}Repository: any = new ${file_name_prefix^}Repository();
}
" >> ../services/${file_name_prefix}.service.ts

