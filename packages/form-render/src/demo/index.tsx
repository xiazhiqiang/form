import SchemaFormRender from '@/index';
import '@alifd/next/components.scss';
import { createForm } from '@formily/core';
import { FormButtonGroup, Reset, Submit } from '@formily/next';
import { FormProvider } from '@formily/react';
import React, { useEffect } from 'react';
import './index.css';
import { form as layout, schema } from './schema.json';

const form = createForm();

export default function () {
  // todo 需要增加交互去掉默认的schema
  useEffect(() => {}, []);

  return (
    <>
      <FormProvider form={form}>
        <SchemaFormRender schema={schema} layout={layout} />
        <FormButtonGroup className="actions">
          <Submit size="large" onSubmit={console.log}>
            确认
          </Submit>
          <Reset type="secondary" size="large" onReset={() => form.reset()}>
            重置
          </Reset>
        </FormButtonGroup>
      </FormProvider>
    </>
  );
}
