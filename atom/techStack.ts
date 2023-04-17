import { atom } from "recoil";

export type gitHubTechStack = {
  client: string[];
  server: string[];
  database: string[];
  devOps: string[];
  features: string[];
  environmentVariables: string[];
  prerequisites: string[];
  installation: string[];
  runningTests: string[];
};

const defaultPostState: gitHubTechStack = {
  client: [],
  server: [],
  database: [],
  devOps: [],
  features: [],
  environmentVariables: [],
  prerequisites: [],
  installation: [],
  runningTests: [],
};

export const gitTechStack = atom<gitHubTechStack>({
  key: "GitTechStack",
  default: defaultPostState,
});
