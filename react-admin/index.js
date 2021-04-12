// in src/App.js
import * as React from "react";
import { Provider } from 'react-redux';
import { createHashHistory } from 'history';
import { Admin, Resource } from 'react-admin';

import createAdminStore from './createAdminStore';

// your app components
import {PostEdit, Posts} from './Post';
import jsonServerProvider from 'ra-data-json-server';

// dependency injection
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const authProvider = () => Promise.resolve();

const history = createHashHistory();

const App = () => (
    <Provider
        store={createAdminStore({
            authProvider,
            dataProvider,
            history,
        })}
    >
        <Admin
            authProvider={authProvider}
            dataProvider={dataProvider}
            history={history}
            title="My Admin"
        >
            <Resource name="posts" list={Posts} edit={PostEdit} />
            <Resource name="posts1" list={Posts} edit={PostEdit} />
            <Resource name="posts2" list={Posts} edit={PostEdit} />
            <Resource name="posts3" list={Posts} edit={PostEdit} />
            <Resource name="posts4" list={Posts} edit={PostEdit} />
            <Resource name="posts5" list={Posts} edit={PostEdit} />
            <Resource name="posts6" list={Posts} edit={PostEdit} />
            <Resource name="posts11" list={Posts} edit={PostEdit} />
            <Resource name="posts7" list={Posts} edit={PostEdit} />
            <Resource name="posts8" list={Posts} edit={PostEdit} />
            <Resource name="posts9" list={Posts} edit={PostEdit} />
            <Resource name="posts11" list={Posts} edit={PostEdit} />
            <Resource name="posts12" list={Posts} edit={PostEdit} />
            <Resource name="posts13" list={Posts} edit={PostEdit} />
            <Resource name="posts14" list={Posts} edit={PostEdit} />
            <Resource name="posts15" list={Posts} edit={PostEdit} />
            <Resource name="posts16" list={Posts} edit={PostEdit} />
            <Resource name="posts17" list={Posts} edit={PostEdit} />
        </Admin>
    </Provider>
);

export default App;
