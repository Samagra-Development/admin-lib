/* eslint-disable no-nested-ternary */
import React from 'react';
import {
    List,
    Datagrid,
    Edit,
    TextInput,
    Pagination,
    SimpleForm,
    EditButton,
    TextField,
} from 'react-admin';
export const Posts = (props) => (
    <List
        {...props}
        title='Student List'
        className='customBox'
        pagination={<Pagination rowsPerPageOptions={[10,100]} limit={100} style={{ float: 'left' }} />}
    >
        <Datagrid rowClick='edit'>
            {/* <TextField source='id' /> */}
            <TextField label='Student Name' source='name' />

            <EditButton />
        </Datagrid>
    </List>
);

export const PostEdit = (props) => {
    return (
        <Edit {...props} className='customBox'>
            <SimpleForm
            >
                <TextInput
                    label='Student Name'
                    source='name'
                    variant='outlined'
                />
            </SimpleForm>
        </Edit>
    );
};
