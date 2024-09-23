import { Engine } from "@designable/core";
import {
  transformToSchema,
  transformToTreeNode,
} from "@designable/formily-transformer";
import { message } from "antd";

export const saveSchema = (designer: Engine) => {
  // localStorage.setItem(
  //   "formily-schema",
  //   JSON.stringify(transformToSchema(designer.getCurrentTree()))
  // );
  console.log("designer.getCurrentTree()", designer.getCurrentTree());
  console.log("1", transformToSchema(designer.getCurrentTree()));
  console.log(
    "2",
    JSON.stringify(transformToSchema(designer.getCurrentTree()))
  );
  message.success("Save Success");
};

export const loadInitialSchema = (designer: Engine) => {
  try {
    designer.setCurrentTree(
      transformToTreeNode(JSON.parse(localStorage.getItem("formily-schema")))
    );
  } catch {}
};
