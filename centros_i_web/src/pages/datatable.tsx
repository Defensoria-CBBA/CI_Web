import React from 'react';
import { Table } from 'antd';

const columns = [
    {
        title: 'Nombre',
        dataIndex: 'name',
        key: 'name',
        render: (text: any) => <a>{text}</a>,
    },
    {
        title: 'Apellido',
        dataIndex: 'lastName',
        key: 'lastName',
    },
    {
        title: 'CI',
        dataIndex: 'ci',
        key: 'ci',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Acciones',
        dataIndex: 'acciones',
        key: 'acciones',
    }
];

const data = [
    {
        key: '1',
        name: 'John',
        lastName: 'Brown',
        ci: 123456,
        email: 'jb@gmail.com',
        
    },
    {
        key: '2',
        name: 'John',
        lastName: 'Brown',
        ci: 123456,
        email: 'jb@gmail.com',
    },
    {
        key: '3',
        name: 'John',
        lastName: 'Brown',
        ci: 123456,
        email: 'jb@gmail.com',

    },
];

export default function dataTable() {
    return (
        <div className='tableContainer'>
            <Table columns={columns} dataSource={data} />
        </div>
    );
}
