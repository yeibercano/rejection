import React from 'react';
import { Home } from '../app/home';
import { Main } from '../app/main';
import { withMain } from '../app/HoC/layouts/lobby';

export default () => withMain('lobby')(Main);
