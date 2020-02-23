
file_name_prefix=$1
echo "
export default class ${file_name_prefix^}Repository {
    private model: any;

    constructor(model: any) {
        this.model = model;
    }
}
" >> ../api/repositories/${file_name_prefix}.repository.ts

