import { Position } from '@reactflow/core';
import type { HTMLAttributes } from 'react';

export type NodeToolbarProps = HTMLAttributes<HTMLDivElement> & {
  nodeId: string;
  isVisible?: boolean;
  position?: Position;
  offset?: number;
};
