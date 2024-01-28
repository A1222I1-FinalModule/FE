import React from 'react'
import { Route, Routes } from 'react-router-dom';
import StatisticalTable from './StastisticalTable/StatisticalTable';
import GetInput from './GetInput';
export const ContentWareHouse = () => {
  return (
    <Routes>
      <Route path={"*"} element={<GetInput />} />
      <Route path={"statistical/*"} element={<StatisticalTable />} />
      <Route path={"getInput/*"} element={<GetInput />} />
    </Routes>
  )
}
