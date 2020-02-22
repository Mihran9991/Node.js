
file_name_prefix=$1
echo "
import express from 'express';

import { ILoader } from '../@types/loader';

export default class ${file_name_prefix^}Loader implements ILoader {
  public load(app: express.Application) {}
}
" >> ../loaders/${file_name_prefix}.loader.ts

