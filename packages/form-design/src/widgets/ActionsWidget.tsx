import { GlobalRegistry } from '@designable/core';
import { TextWidget, useDesigner } from '@designable/react';
import { observer } from '@formily/react';
import { Button } from 'antd';
import React, { useEffect } from 'react';
import { loadInitialSchema, saveSchema } from '../service';

export const ActionsWidget = observer(() => {
  const designer = useDesigner();
  const supportLocales = ['zh-cn', 'en-us', 'ko-kr'];

  useEffect(() => {
    loadInitialSchema(designer);
  }, []);

  useEffect(() => {
    if (!supportLocales.includes(GlobalRegistry.getDesignerLanguage())) {
      GlobalRegistry.setDesignerLanguage('zh-cn');
    }
  }, []);

  return (
    <div style={{ marginRight: 10 }}>
      {/* <Radio.Group
        value={GlobalRegistry.getDesignerLanguage()}
        optionType="button"
        options={[
          { label: 'English', value: 'en-us' },
          { label: '简体中文', value: 'zh-cn' },
          { label: '한국어', value: 'ko-kr' },
        ]}
        onChange={(e: any) => {
          GlobalRegistry.setDesignerLanguage(e.target.value);
        }}
      /> */}
      <Button
        onClick={() => {
          saveSchema(designer);
        }}
      >
        <TextWidget>Save</TextWidget>
      </Button>
      <Button
        type="primary"
        onClick={() => {
          saveSchema(designer);
        }}
      >
        <TextWidget>Publish</TextWidget>
      </Button>
    </div>
  );
});
