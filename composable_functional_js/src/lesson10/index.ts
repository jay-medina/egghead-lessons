import fs from 'fs';
import path from 'path';
import { Sum, List } from './util';

const res = List(Sum(1), Sum(2), Sum(3)).fold(Sum.empty());

console.log(res);
