import { Routes } from '@angular/router';
import path from 'path';

import { About } from './Pages/about/about';
import { Products } from './Pages/products/products';

export const routes: Routes = [
    {path:"", component:Products },
    {path:"about", component:About}
];
