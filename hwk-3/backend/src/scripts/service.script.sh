
file_name_prefix=$1
echo "
export default class ${file_name_prefix^}Service {
    private ${file_name_prefix}Repository: any;

    constructor(repository: any) {
        this.${file_name_prefix}Repository = repository;
    }
}
" >> ../services/${file_name_prefix}.service.ts

