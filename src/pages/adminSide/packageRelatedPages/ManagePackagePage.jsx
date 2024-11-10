import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import PackageManageTable from './components/PackageManageTable';

const ManagePackagePage = () => {

    
   

    return (
        <div>
            <PackageManageTable></PackageManageTable>
        </div>
    );
};

export default ManagePackagePage;