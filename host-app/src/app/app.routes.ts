import { Routes } from '@angular/router';

// Add this import:
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
    // Add this route:
    {
        path: 'products',
        loadComponent: () =>
            loadRemoteModule('mf-products', './ProductList').then((m) => m.ProductListComponent),
    },
    {
        path: 'users',
        loadComponent: () =>
            loadRemoteModule('mf-users','./UserList').then((m) => m.UserListComponent),
    },
];
