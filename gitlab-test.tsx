import React, { ReactNode } from 'react';

export type GitlabTestProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function GitlabTest({ children }: GitlabTestProps) {
  return (
    <div>
      {children}
    </div>
  );
}
