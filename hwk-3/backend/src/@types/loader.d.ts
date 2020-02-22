import express from "express";

export interface ILoader {
  load(app: express.Application): void;
}

export interface IIndexLoader {
  initalizeAllLoadersSync(): void;
}
