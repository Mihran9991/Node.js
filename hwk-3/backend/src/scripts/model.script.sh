

file_name_prefix=$1
echo "
import mongoose, { Schema, Document } from 'mongoose';

export interface I${file_name_prefix^} extends Document {}

const ${file_name_prefix^}Schema: Schema = new Schema({});

export default mongoose.model<I${file_name_prefix^}>('${file_name_prefix^}', ${file_name_prefix^}Schema);
" >> ../api/models/${file_name_prefix}.model.ts

