import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { rootPath } from '../../config/menu.item';
import { MenuItems } from '../../types/menu.item';
import { StateStructure } from '../app/app';
import { PersonalForm } from '../personal.form/personal.form';

const Step1 = lazy(() => import('../../pages/step1/step1'));
const Step2 = lazy(() => import('../../pages/step2/step2'));
const Step3 = lazy(() => import('../../pages/step3/step3'));
const Step4 = lazy(() => import('../../pages/step4/step4'));

type AppRoutesProps = {
  items: MenuItems;
  state: StateStructure;
  setState: React.Dispatch<React.SetStateAction<StateStructure>>;
};
export function AppRoutes({ items, state, setState }: AppRoutesProps) {
  return (
    <Suspense>
      <Routes>
        <Route
          path={rootPath}
          element={
            <Step1>
              <PersonalForm state={state} setState={setState}></PersonalForm>
            </Step1>
          }
        ></Route>
        <Route
          path={items[0].path}
          element={
            <Step1>
              <PersonalForm state={state} setState={setState}></PersonalForm>
            </Step1>
          }
        ></Route>
        <Route path={items[1].path} element={<Step2></Step2>}></Route>
        <Route path={items[2].path} element={<Step3></Step3>}></Route>
        <Route path={items[3].path} element={<Step4></Step4>}></Route>
        <Route path={'*'} element={<Navigate to="" replace></Navigate>}></Route>
      </Routes>
    </Suspense>
  );
}
