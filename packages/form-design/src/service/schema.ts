import { Message } from '@alifd/next';
import { Engine } from '@designable/core';
import {
  transformToSchema,
  transformToTreeNode,
} from '@designable/formily-transformer';

const storageKey = `llm-formily-schema`;

export const saveSchema = (designer: Engine) => {
  localStorage.setItem(
    storageKey,
    JSON.stringify(transformToSchema(designer.getCurrentTree())),
  );
  Message.success('Save Success');
};

export const loadInitialSchema = (designer: Engine) => {
  try {
    designer.setCurrentTree(
      transformToTreeNode(JSON.parse(localStorage.getItem(storageKey))),
    );
  } catch {}
};
